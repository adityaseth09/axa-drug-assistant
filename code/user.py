import sqlite3
from flask_restful import Resource, reqparse
from flask_jwt import jwt_required


class User:
    def __init__(self, _id, username, password, name, birth_date, type_of_user):
        self.id = _id
        self.username = username
        self.password = password
        self.name = name
        self.birth_date = birth_date
        self.type_of_user = type_of_user

    @classmethod
    def find_by_username(cls, username):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "SELECT * FROM users where username=?"
        result = cursor.execute(query, (username,))
        row = result.fetchone()
        if row:
            user = cls(*row)
        else:
            user = None

        connection.close()
        return user

    @classmethod
    def find_by_id(cls, id):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "SELECT * FROM users where id=?"
        result = cursor.execute(query, (id,))
        row = result.fetchone()
        if row:
            user = cls(*row)
        else:
            user = None

        connection.close()
        return user


class UserRegister(Resource):

    parser = reqparse.RequestParser()
    parser.add_argument('username',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    parser.add_argument('password',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    parser.add_argument('name',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    parser.add_argument('birth_date',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    parser.add_argument('type_of_user',
                        type=str,
                        required=True,
                        help="This field cannot be blank."
                        )

    def post(self):
        data = UserRegister.parser.parse_args()

        if User.find_by_username(data['username']):
            return {"message": "A user with that username already exists"}

        connection = sqlite3.connect('data.db')

        cursor = connection.cursor()

        query = "INSERT INTO users VALUES (NULL, ?, ?, ?, ?, ?)"
        cursor.execute(
            query, (
                data['username'],
                data['password'],
                data['name'],
                data['birth_date'],
                data['type_of_user']
            )
         )

        connection.commit()
        connection.close()

        return {'message': "User created successfully"}, 201


class Patient(Resource):
    @jwt_required()
    def get(self, id):
        patient = Patient.find_patient_by_id(id)
        if patient:
            return patient

        return {'message': 'Item not found'}, 404

    @classmethod
    def find_patient_by_id(cls,id):

        connection = sqlite3.connect('data.db')

        cursor = connection.cursor()
        ##@todo put type
        query = "SELECT * FROM users where type_of_user='patient' and id=?"
        result = cursor.execute(query, (id,))
        row = result.fetchone()
        connection.close()
        if row:
            return {'patient': {'name': row[3],'Birth date': row[4]}}

    def delete(self, id):
        global patients
        patients = list(filter(lambda x: x['id'] !=id, patients))


class PatientList(Resource):
    def get(self):
        connection = sqlite3.connect('data.db')

        cursor = connection.cursor()
        query = "SELECT * FROM users where type_of_user='patient'"
        result = cursor.execute(query)
        data = {'patients':result.fetchall()}
        connection.close()

        return data


class Allergy:
    def __init__(self, _id, name):
        self.id = _id
        self.name = name

    @classmethod
    def allergies_of_user(cls, uid):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "SELECT a.id, a.name FROM allergy a, patient_allergies pa WHERE a.id=pa.allergy_id AND pa.patient_id=?"
        result = cursor.execute(query, (uid,))
        answers = [cls(*row) for row in result.fetchall()]
        connection.close()
        return answers


class AllergyList(Resource):
    @jwt_required()
    def get(self, id):
        return Allergy.allergies_of_user(id)


class Drug:
    def __init__(self, _id, name):
        self.id = _id
        self.name = name

    @classmethod
    def drugs_of_user(cls, uid):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "SELECT d.id, d.name FROM drugs d, patient_drugs pd WHERE d.id=pd.drug_id AND pd.patient_id=?"
        result = cursor.execute(query, (uid,))
        answers = [cls(*row) for row in result.fetchall()]
        connection.close()
        return answers


class DrugList(Resource):
    @jwt_required()
    def get(self, id):
        return Drug.drugs_of_user(id)


class Condition:
    def __init__(self, _id, name):
        self.id = _id
        self.name = name

    @classmethod
    def conditions_of_user(cls, uid):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "SELECT c.id, c.name FROM condition c, patient_conditions pc WHERE c.id=pc.condition_id AND pc.patient_id=?"
        result = cursor.execute(query, (uid,))
        answers = [cls(*row) for row in result.fetchall()]
        connection.close()
        return answers


class ConditionList(Resource):
    @jwt_required()
    def get(self, id):
        return Condition.conditions_of_user(id)
