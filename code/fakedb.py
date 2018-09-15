from user import User
from collections import namedtuple

from user import User
from werkzeug.security import safe_str_cmp

users = [
    User(1, 'bob', 'asdf'),
]

def UserData():
     def __init__(name, emergency_drugs, regular_drugs, conditions):
         self.name = name
         self.drugs = drugs
         self.conditions = conditions

user_data = {
    1: UserData("Bob the Builder",
                ['33124', '50192', '51750', '65723'],
                []
                ["Pregnancy", "Bipolar"]),
}


def get_user_by_username(username):
    for u in users:
        if u.username == username:
            return u

def get_user_by_id(pk):
    for u in users:
        if u.pk == pk:
            return u

def get_user_data(u):
    return user_data[u.id]
