from flask import Flask, request
from flask_restful import Resource, Api
from flask_jwt import JWT, jwt_required
from flask_cors import CORS

from security import authenticate,identity
from user import AllergyListAll, ConditionListAll, DrugListAll, UserData, UserRegister, PatientList, Patient, AllergyList, DrugList, ConditionList, IsDoctor

axa_key = 'mountainous motion'

app = Flask(__name__)
app.secret_key = 'hellohack'
api = Api(app)
CORS(app)
jwt = JWT(app, authenticate, identity)  # /auth

api.add_resource(PatientList, '/patients')
api.add_resource(Patient, '/patient/<int:id>')
api.add_resource(AllergyList, '/patient/<int:id>/allergies')
api.add_resource(DrugList, '/patient/<int:id>/drugs')
api.add_resource(ConditionList, '/patient/<int:id>/conditions')
api.add_resource(AllergyListAll, '/allergies')
api.add_resource(DrugListAll, '/drugs')
api.add_resource(ConditionListAll, '/conditions')
api.add_resource(UserRegister, '/register')
api.add_resource(UserData, '/getuserid/<string:username>')
api.add_resource(IsDoctor, '/isdoctor/<int:id>')

if __name__== '__main__':
    app.run('0.0.0.0', port=5005, debug=False)
