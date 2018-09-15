from flask import Flask, request
from flask_restful import Resource, Api
from flask_jwt import JWT, jwt_required
from flask_cors import CORS

from security import authenticate,identity
from user import UserRegister, PatientList, Patient

from allergy import Allergy

axa_key = 'mountainous motion'

app = Flask(__name__)
app.secret_key = 'hellohack'
api = Api(app)
CORS(app)
jwt = JWT(app, authenticate, identity)  # /auth

api.add_resource(PatientList, '/patients')
api.add_resource(Patient, '/patient/<int:id>')
api.add_resource(Allergy, '/<int:patient_id>/allergy')
api.add_resource(UserRegister, '/register')


if __name__== '__main__':
    app.run(port=5001, debug=True)



