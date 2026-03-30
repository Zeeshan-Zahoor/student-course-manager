from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

print("Mongo URI:", MONGO_URI)  

client = MongoClient(MONGO_URI)
db = client["college"]
student_collection = db["students"]