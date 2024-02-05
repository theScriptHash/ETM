from flask import Flask, render_template, request, send_from_directory, url_for, Response, jsonify, redirect, session
import cv2

# Create a Flask Instance
app = Flask(__name__)
app.secret_key = 'secretkey'


@app.route("/")
def home():
    return render_template('test.html')


if __name__ == '__main__':
    app.run(debug=True)
