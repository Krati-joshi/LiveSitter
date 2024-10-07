from flask import Blueprint, jsonify, request
from pymongo import MongoClient
from overlay_routes import overlay_routes


overlay_routes = Blueprint('overlay_routes', __name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['overlay_db']
overlays_collection = db['overlays']

@overlay_routes.route('/', methods=['GET'])
def get_overlays():
    overlays = list(overlays_collection.find())
    return jsonify(overlays)

@overlay_routes.route('/', methods=['POST'])
def create_overlay():
    data = request.json
    overlays_collection.insert_one(data)
    return jsonify({"message": "Overlay created!"}), 201

@overlay_routes.route('/<string:id>', methods=['PUT'])
def update_overlay(id):
    data = request.json
    overlays_collection.update_one({"_id": id}, {"$set": data})
    return jsonify({"message": "Overlay updated!"})

@overlay_routes.route('/<string:id>', methods=['DELETE'])
def delete_overlay(id):
    overlays_collection.delete_one({"_id": id})
    return jsonify({"message": "Overlay deleted!"})
