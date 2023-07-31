from flask import Flask
from flask import jsonify
import logging
import drink_api


app = Flask(__name__)

logging.basicConfig(level=logging.DEBUG)

@app.route("/backend/random-drink")
def random_drink():
    data = drink_api.random_drink()
    return jsonify(data)


@app.route("/baceknd/drink/<name>")
def drink_by_name(name):
    data = drink_api.search_by_name(name)
    return jsonify(data)

@app.route("/backend/search/<ingredient>")
def drink_by_ingredient(ingredient):
    data = drink_api.search_by_ingredient(ingredient)
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
