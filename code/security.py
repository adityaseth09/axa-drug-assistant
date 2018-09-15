from user import User
from werkzeug.security import safe_str_cmp

from fakedb import get_user_by_username


def authenticate(username, password):
    user = get_user_by_username(username)
    if user and safe_str_cmp(user.password, password):
        return user


def identity(payload):
    user_id = payload['identity']
    return userid_mapping.get(user_id, None)
