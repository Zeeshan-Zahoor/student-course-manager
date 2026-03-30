from flask import Blueprint, request, jsonify
from models.student_model import *
from bson import ObjectId
from bson.errors import InvalidId

student_bp = Blueprint("students", __name__)

@student_bp.route("/add", methods=["POST"])
def add_student():
    data = request.json
    create_student(data)
    return jsonify({"msg": "Student added"})

@student_bp.route("/all", methods=["GET"])
def all_students():
    return jsonify(get_students())

@student_bp.route("/add-course", methods=["POST"])
def add_course_route():
    data = request.json
    add_course(data["name"], data["course"])
    return jsonify({"msg": "Course added"})

@student_bp.route("/delete/<id>", methods=["DELETE"])
def delete_student_route(id):
    try:
        delete_student(id)
        return jsonify({"msg": "Deleted"})
    except InvalidId:
        return jsonify({"error": "Invalid ID"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@student_bp.route("/update/<id>", methods=["PUT"])
def update_student_route(id):
    data = request.json
    update_student(id, data)
    return jsonify({"msg": "Updated"})

