from random import randrange

from flask.json import jsonify
from flask import render_template

from pyecharts import options as opts
from pyecharts.charts import Line
from pyecharts.charts import Bar
from flask import (Blueprint, redirect, render_template, url_for)

bp = Blueprint('show', __name__, url_prefix='/show')


# 画柱状图
# 柱状图基本数据
def bar_base() -> Bar:
    c = (Bar().add_xaxis(["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]).add_yaxis(
        "商家A", [5, 20, 36, 10, 75, 90]).add_yaxis(
            "商家B", [15, 25, 16, 55, 48, 8]).set_global_opts(
                title_opts=opts.TitleOpts(title="Bar-基本示例", subtitle="我是副标题")))
    return c

# 操作序列化传至前端
@bp.route('/barData')
def get_bar_base():
    bar = bar_base()
    return bar.dump_options_with_quotes()

# 返回对应页面
@bp.route('/bar')
def get_bar():
    return render_template('show/chartShow.html')


# 画动态折线图
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


@bp.route("/dynData")
def dynData():
    return render_template("show/dynamicData.html")


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
