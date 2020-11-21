from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///twitter.db"

db = SQLAlchemy(app)
class Users(db.Model):
	id = db.Column('student_id', db.Integer, primary_key=True)
	username = db.Column(db.String(24))
	email = db.Column(db.String(64))
	pwd = db.Column(db.String(64))

	def __init__(self, username, email, pwd):
		self.username = username
		self.email = email
		self.pwd = pwd

@app.route("/api/users", methods=["GET", "POST", "DELETE"])
def users():
	method = request.method
	if (method.lower() == "get"):
		users = Users.query.all()
		return jsonify([{"id":i.id, "username":i.username, "email":i.email, "password":i.pwd} for i in users])
	elif (method.lower() == "post"):
		try:
			username = request.json["username"]
			email = request.json["email"]
			pwd = request.json["pwd"]
			if (username and email and pwd):
				try:
					user = Users(username, email, pwd)
					db.session.add(user)
					db.session.commit()
					return jsonify({"success": True})
				except Exception as e:
					return ({"error": e})
			else:
				return jsonify({"error": "Invalid Form"})
		except:
			return jsonify({"error": "Invalid Form"})
	elif (method.lower() == "delete"):
		try:
			uid = request.json["id"]
			if (uid):
				try:
					user = Users.query.get(uid)
					db.session.delete(user)
					db.session.commit()
					return jsonify({"success": True})
				except Exception as e:
					return jsonify({"error": e})
			else:
				return jsonify({"error": "Invalid Form"})
		except:
			return jsonify({"error": "m"})

if __name__ == "__main__":
	app.run(debug=True)
