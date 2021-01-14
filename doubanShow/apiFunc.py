from loguru import logger
from flask.json import jsonify
from flask import Blueprint

import json

bp = Blueprint('api', __name__, url_prefix='/api')


@bp.route('/0json', methods=['GET'])
def get_json_0():
    try:
        with open('./doubanShow/static/data/func5.json', 'r', encoding='UTF-8') as f:
            data = json.load(f)
        return jsonify(data)
    except FileNotFoundError as e:
        logger.error(e)
        
