import functools
from random import randrange

from flask.json import jsonify
from flask import Flask, render_template

from pyecharts import options as opts
from pyecharts.charts import Line
from flask import (Blueprint, flash, g, redirect, render_template, request,
                   session, url_for)

bp = Blueprint('show', __name__, url_prefix='/show')


def line_base() -> Line:
    line = (Line().add_xaxis(["{}".format(i) for i in range(10)]).add_yaxis(
        series_name="",
        y_axis=[randrange(50, 80) for _ in range(10)],
        is_smooth=True,
        label_opts=opts.LabelOpts(is_show=False),
    ).set_global_opts(
        title_opts=opts.TitleOpts(title="动态数据"),
        xaxis_opts=opts.AxisOpts(type_="value"),
        yaxis_opts=opts.AxisOpts(type_="value"),
    ))
    return line


@bp.route("/")
def index():
    return render_template("show/index.html")


@bp.route("/lineChart")
def get_line_chart():
    c = line_base()
    return c.dump_options_with_quotes()


idx = 9


@bp.route('/lineDynamicData')
def update_line_data():
    global idx
    idx = idx + 1
    return jsonify({"name": idx, "value": randrange(50, 80)})
