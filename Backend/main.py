# Import the Canvas class
from canvasapi import Canvas
from flask import Flask, request
from flask_cors import CORS
from gevent.pywsgi import WSGIServer
from flask import jsonify

app = Flask(__name__)
CORS(app, support_credentials=True)
#
# Canvas API URL
API_URL = "https://umkc.instructure.com"
# Canvas API key
API_KEY = "10876~MbZEVkEy0wXg4Oy95Xa4QgGIjZ29eacv4BvssQintgOtMlgPf28DYBGp6Caezf1z"
#
print("The backend is loading")
print("Check http://127.0.0.1:64000/")
# c = list()
# canvas = Canvas(API_URL, API_KEY)
# user = canvas.get_current_user()
# courses = user.get_courses()
# for course in courses:
#     c.append(course)
# for single in c:
#     print(single)
#
#
@app.route('/', methods=['GET'])
def getcourses():
    if request.method == 'GET':
        c = list()
        canvas = Canvas(API_URL, API_KEY)
        user = canvas.get_current_user()
        courses = user.get_courses()
        for course in courses:
            c.append(str(course))
        for single in c:
            print(single)
        # t = tuple(c)
        # return t
        return jsonify(c)
    return None

# canvas = Canvas(API_URL, API_KEY)
# user = canvas.get_current_user()
# courses = user.get_courses()
# for course in courses:
#     print(course)
# acc = canvas.get_accounts()
#
# user = canvas.get_current_user()
# print(user)

# logins = user.get_user_logins()
# for login in logins:
#     print(login)
#     n_login = login.edit(
#         login = {
#             'unique_id': 'ljn29',
#             'password': 'Ljq19970925'
#         }
#     )
#     print(n_login)

# n_u1 = user.add_observee_with_credentials(
#     observee = {
#         'unique_id': "tlg24",
#         'password': "Ltt101100708"
#     }
# )
# print(n_u1)
# logins = u.get_user_logins()
#
# for login in logins:
#     print(login)
#     print(type(login))
#     print(login.)
# user = account.create_user(
#     user={
#         'name': 'Gou lyn'
#     },
#     pseudonym={
#         'password': 'Ljq19970925',
#         'sis_user_id': 'ljn29'
#     }
# 'unique_id': 'tlg24',
# 'password': 'Ltt101100708'
# )
# page_views = user.get_page_views()
# ljn29
# Ljq19970925
# user = canvas.get_user('xtc569','Aa190884810')

if __name__ == '__main__':

    # Serve the app with gevent
    http_server = WSGIServer(('', 64000), app)
    http_server.serve_forever()