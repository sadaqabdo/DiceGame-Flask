from flask import Flask, render_template, request

app = Flask(__name__)

global gamers
gamers = []


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        gamers.append({"id": len(
            gamers), "name": request.form["username"], "email": request.form["email"]})
        return render_template("game.html", users=gamers[-1])
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True, port=5599)
