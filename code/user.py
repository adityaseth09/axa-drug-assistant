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
        return{'patients':patients}
