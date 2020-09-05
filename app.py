from flask import Flask, render_template, abort
from jinja2 import TemplateNotFound

app = Flask(__name__, static_folder="./static", template_folder="./templates")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)


if __name__ == '__main__':
    app.run(debug=True)
