from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["your_database_name"]
overlays_collection = db["overlays"]

def create_overlay(data):
    result = overlays_collection.insert_one(data)
    return str(result.inserted_id)

def get_overlays():
    return list(overlays_collection.find())

def update_overlay(overlay_id, data):
    overlays_collection.update_one({"_id": overlay_id}, {"$set": data})
    return get_overlays()

def delete_overlay(overlay_id):
    overlays_collection.delete_one({"_id": overlay_id})
    return get_overlays()
