from flask import Flask, render_template


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    
    # 欢迎界面
    @app.route('/')
    def index():
        return render_template('welcomePage.html')

    from . import dataShow
    app.register_blueprint(dataShow.bp)

    return app
