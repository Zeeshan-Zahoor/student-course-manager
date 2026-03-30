from flask import Flask
from flask_cors import CORS
from routes.student_routes import student_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(student_bp, url_prefix="/students")

if __name__ == "__main__" :
    app.run(debug=True)