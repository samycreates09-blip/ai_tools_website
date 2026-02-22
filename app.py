from pathlib import Path

from flask import Flask, redirect, send_from_directory

app = Flask(__name__)
BASE_PATH = "/samycreatesai"
SITE_DIR = Path(__file__).resolve().parent


@app.get(BASE_PATH)
def base_redirect():
    return redirect(f"{BASE_PATH}/", code=302)


@app.get(f"{BASE_PATH}/")
def serve_index():
    return send_from_directory(SITE_DIR, "index.html")


@app.get(f"{BASE_PATH}/<path:filename>")
def serve_assets(filename: str):
    return send_from_directory(SITE_DIR, filename)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=False, use_reloader=False)
