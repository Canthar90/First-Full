from flask import Flask
from flask import jsonify
import drink_api


app = Flask(__name__)

@app.route("/backend/random-drink")
def random_drink():
    data = drink_api.random_drink()
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
