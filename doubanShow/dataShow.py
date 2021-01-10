from flask import render_template

from flask import (Blueprint, redirect, render_template, url_for)

bp = Blueprint('show', __name__, url_prefix='/show')


# 返回对应页面
@bp.route('/bar')
def get_bar():
    return render_template('show/chartShow.html')


@bp.route("/dynData")
def dynData():
    return render_template("show/dynamicData.html")
