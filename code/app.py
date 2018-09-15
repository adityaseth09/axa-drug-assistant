from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


class Patient(Resource):
    def get(self, name):
        return {'patient': name}

api.add_resource(Patient, '/patient/<string:name>')

app.run(port=5001)



