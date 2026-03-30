from config import student_collection
from bson import ObjectId

def create_student(data):
    return student_collection.insert_one(data)

def get_students():
    students = list(student_collection.find())

    for s in students:
        s["_id"] = str(s["_id"])    # convert objectId to string

    return students

def add_course(name, course):
    return student_collection.update_one(
        {"name": name},
        {"$push": {"courses": course}}
    )

def delete_student(student_id):
    return student_collection.delete_one({
        "_id": ObjectId(student_id)
    })

def update_student(student_id, new_data):
    return student_collection.update_one(
        {"_id": ObjectId(student_id)},
        {"$set": new_data}
    )