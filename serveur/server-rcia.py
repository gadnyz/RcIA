import flask
from flask import request, jsonify

import data

app = flask.Flask(__name__)
app.config["DEBUG"] = True

#creation des données test de fragment de code
fragments = data.FRAGMENT()

@app.route('/', methods=['GET'])
def home():
    return (fragments)

@app.route('/api/v1/fragments/',methods=['GET'])
def api_get_fragments() :
    return jsonify(fragments)

app.run()