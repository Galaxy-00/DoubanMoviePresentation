from flask import render_template

from flask import (Blueprint, redirect, render_template, url_for)

bp = Blueprint('show', __name__, url_prefix='/show')


# 返回对应页面
@bp.route('/table')
def get_table():
    return render_template('show/table.html')


@bp.route('/oneFunc')
def get_one():
    return render_template('show/oneFunc.html')


@bp.route("/twoFunc")
def get_two():
    return render_template("show/twoFunc.html")


@bp.route("/threeFunc")
def get_three():
    return render_template("show/threeFunc.html")


@bp.route("/fourFunc")
def get_four():
    return render_template("show/fourFunc.html")


@bp.route("/fiveFunc")
def get_five():
    return render_template("show/fiveFunc.html")


@bp.route("/sixFunc")
def get_six():
    return render_template("show/sixFunc.html")
