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
    #
    if 'recherche' in request.args :
        recherche = request.args['recherche']
        print("Recherche de ...")
        print(recherche)
        return jsonify(fragments)

    #
    if 'id' in request.args :
        id = int(request.args['id'])
        print(f"envoie des données de la clé {id}")
        return jsonify(fragments[id])
    else :
        return jsonify([])
app.run()