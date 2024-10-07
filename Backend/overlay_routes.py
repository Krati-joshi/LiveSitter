from flask import Blueprint, request, jsonify
from models import create_overlay, get_overlays, update_overlay, delete_overlay
from bson import ObjectId

overlay_routes = Blueprint('overlay_routes', __name__)

@overlay_routes.route('/api/overlays', methods=['POST'])
def add_overlay():
    data = request.json
    result = create_overlay(data)
    return jsonify({"id": result}), 201

@overlay_routes.route('/api/overlays', methods=['GET'])
def fetch_overlays():
    result = get_overlays()
    return jsonify(result), 200

@overlay_routes.route('/api/overlays/<string:overlay_id>', methods=['PUT'])
def edit_overlay(overlay_id):
    data = request.json
    result = update_overlay(ObjectId(overlay_id), data)
    return jsonify(result), 200

@overlay_routes.route('/api/overlays/<string:overlay_id>', methods=['DELETE'])
def remove_overlay(overlay_id):
    result = delete_overlay(ObjectId(overlay_id))
    return jsonify(result), 204
