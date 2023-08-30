from flask import Flask
from flask import jsonify, send_file
import logging
import drink_api
import cv_load


app = Flask(__name__)

logging.basicConfig(level=logging.DEBUG)


@app.route("/backend/random-drink")
def random_drink():
    data = drink_api.random_drink()
    return jsonify(data)


@app.route("/backend/drink/<name>")
def drink_by_name(name):
    data = drink_api.search_by_name(name)
    return jsonify(data)


@app.route("/backend/search/<ingredient>")
def drink_by_ingredient(ingredient):
    data = drink_api.search_by_ingredient(ingredient)
    return jsonify(data)


@app.route("/backend/cv")
def cv():
    data = cv_load.load_cv_data()
    return jsonify(data)


@app.route("/backend/cv/img")
def img():
    return send_file("C:\projects2\First-Full\Backend\img\profile-img.jpg", mimetype="jpg")


if __name__ == "__main__":
    app.run(debug=True)
