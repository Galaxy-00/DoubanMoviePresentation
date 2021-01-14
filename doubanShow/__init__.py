from flask import Flask, render_template


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config['DEBUG'] = True

    # 欢迎界面
    @app.route('/')
    def index():
        return render_template('index.html')

    # 用于返回页面
    from . import dataShow
    app.register_blueprint(dataShow.bp)

    # api, 用于返回数据
    from . import apiFunc
    app.register_blueprint(apiFunc.bp)

    return app


app = create_app()
