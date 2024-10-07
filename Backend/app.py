from flask import Flask
from routes import overlay_routes

app = Flask(__name__)

app.register_blueprint(overlay_routes)

if __name__ == '__main__':
    app.run(debug=True)
