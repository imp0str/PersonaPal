import os
from flask import Flask, render_template, request, jsonify, send_from_directory
from dotenv import load_dotenv
from openai import OpenAI

# Load your OPENAI_API_KEY from .env
load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=openai_api_key)

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/favicon.ico')
def favicon():
    # points to static/images/favicon.ico
    ico_path = os.path.join(app.static_folder, 'images')
    return send_from_directory(
        ico_path,
        'favicon.ico',
        mimetype='image/vnd.microsoft.icon'
    )

@app.route("/chat", methods=["POST"])
def chat():
    """
    Expects JSON: { conversation: [ { role, content }, ... ] }
    """
    try:
        data = request.json or {}
        conv = data.get("conversation", [])
        resp = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=conv
        )
        reply = resp.choices[0].message.content
        return jsonify({"reply": reply})
    except Exception as e:
        app.logger.exception("Chat error")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
