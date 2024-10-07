API Documentation
Base URL 
http://localhost:5000/api
Endpoints
Create Overlay

URL: /overlays
Method: POST
Request Body:
{
  "text": "Overlay Text",
  "x": 100,
  "y": 50,
  "width": 200,
  "height": 100
}
Response:
201 Created
{
  "id": "overlay_id"
}

Get Overlays

URL: /overlays
Method: GET
Response:
200 OK
[
  {
    "_id": "overlay_id",
    "text": "Overlay Text",
    "x": 100,
    "y": 50,
    "width": 200,
    "height": 100
  },
  ...
]

Update Overlay

URL: /overlays/<overlay_id>
Method: PUT
{
  "text": "Updated Overlay Text",
  "x": 150,
  "y": 60,
  "width": 220,
  "height": 110
}

Response:
200 OK
[
  {
    "_id": "overlay_id",
    "text": "Updated Overlay Text",
    "x": 150,
    "y": 60,
    "width": 220,
    "height": 110
  },
  ...
]

Delete Overlay

URL: /overlays/<overlay_id>
Method: DELETE
Response:
204 No Content
