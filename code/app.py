from flask import Flask, request
from flask_restful import Resource, Api
from flask_jwt import JWT, jwt_required
from flask_cors import CORS

from security import authenticate,identity
from user import UserRegister

axa_key = 'mountainous motion'

app = Flask(__name__)
app.secret_key = 'hellohack'
api = Api(app)
CORS(app)
jwt = JWT(app, authenticate, identity)  # /auth

patients = []

class Patient(Resource):
    @jwt_required()
    def get(self, id):
        patient = next(filter(lambda x: x['id'] == id, patients), None)
        return {'patient':patient}, 200 if patient else 404

    @jwt_required()
    def post(self, id):
        if next(filter(lambda x: x['id'] == id, patients), None):
            return {'message': 'A patient with id: {} Already exists'.format(id)}, 400
        data = request.get_json()
        patient = {'id': id, 'name': data['name']}
        patients.append(patient)
        return data, 201

    def delete(self, id):
        global patients
        patients = list(filter(lambda x: x['id'] !=id, patients))


class PatientList(Resource):
    def get(self):
        return{'patients':patients}


class Allergy(Resource):
    def post(self):
        data = request.get_json()
        allergy = {'id': id, 'name': data['name']}
        patients.append(patient)


api.add_resource(PatientList, '/patients')
api.add_resource(Patient, '/patient/<int:id>')
api.add_resource(Allergy, '/<int:patient_id>/allergy')
api.add_resource(UserRegister, '/register')


app.run(port=5001, debug=True)



