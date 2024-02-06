from flask import Flask, render_template, request, send_from_directory, url_for, Response, jsonify, redirect, session
import cv2
from flask_cors import CORS

# Create a Flask Instance
app = Flask(__name__)
CORS(app)
app.secret_key = 'secretkey'


# @app.route("/")
# def init():
#     return render_template('test.html')


@app.route('/api/data', methods=['GET'])
def home():
    data = {'message': 'Hello from Flask'}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
