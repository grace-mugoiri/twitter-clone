from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import re

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///twitter.db"
CORS(app)

# DB
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True) # primary_key makes it so that this value is unique and can be used to identify this record.
    username = db.Column(db.String(24))
    email = db.Column(db.String(64))
    pwd = db.Column(db.String(64))

    # Constructor
    def __init__(self, username, email, pwd):
        self.username = username
        self.email = email
        self.pwd = pwd

def getUsers():
    users = User.query.all()
    return [{"id":i.id, "username":i.username, "email":i.email, "password":i.pwd} for i in users]

def getUser(uid):
    users = User.query.all()
    user = list(filter(lambda x:x.id == uid, users))[0]
    return {"id": user.id, "username": user.username, "email": user.email, "password": user.pwd}

def addUser(username, email, pwd):
    try:
        user = User(username, pwd, email)
        db.session.add(user)
        db.session.commit()
        return True
    except Exception as e:
        print(e)
        return False

def removeUser(uid):
    try:
        user = User.query.get(uid)
        db.session.delete(user)
        db.session.commit()
        return True
    except Exception as e:
        print(e)
        return False


class Tweet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    uid = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship('User', foreign_keys=uid)
    title = db.Column(db.String(256))
    content = db.Column(db.String(2050))

def getTweets():
    tweets = Tweet.query.all()
    return [{"id": i.id, "title": i.title, "content": i.content, "user": getUser(i.uid)} for i in tweets]

def getUserTweets(uid):
    tweets = Tweet.query.all()
    return [{"id":item.id, "userid":item.user_id, "title":item.title, "content":item.content}
        for item in filter(lambda i: i.user_id == uid, tweets)]

def addTweet(title, content, uid):
    if (title and content and uid):
        try:
            user = list(filter(lambda i: i.id == uid, User.query.all()))[0]
            twt = Tweet(title=title, content=content, user=user)
            db.session.add(twt)
            db.session.commit()
            return True
        except Exception as e:
            print(e)
            return False
    else:
        return False

def delTweet(tid):
    try:
        tweet = Tweet.query.get(tid)
        db.session.delete(tweet)
        db.session.commit()
        return True
    except Exception as e:
        print(e)
        return False

@app.route("/")
def react_index():
    return "Home Page"

@app.route("/api/tweets")
def get_tweets():
	return jsonify(getTweets())

@app.route("/api/addtweet", methods=["POST"])
def add_tweet():
	try:
		title = request.json["title"]
		content = request.json["content"]
		uid = request.json["uid"]
		addTweet(title, content, uid)
		return jsonify({"success": "true"})
	except Exception as e:
		print(e)
		return jsonify({"error": "Invalid form"})

@app.route("/api/deletetweet", methods=["DELETE"])
def delete_tweet():
	try:
		tid = request.json["tid"]
		delTweet(tid)
		return jsonify({"success": "true"})
	except:
		return jsonify({"error": "Invalid form"})

@app.route("/api/login", methods=["POST"])
def login():
    try:
        email = request.json["email"]
        password = request.json["pwd"]
        if (email and password):
            users = getUsers()
            return jsonify(len(list(filter(lambda x: x["email"] == email and x["password"] == password, users))) == 1)
        else:
            return jsonify({"error": "Invalid form"})
    except:
        return jsonify({"error": "Invalid form"})

@app.route("/api/register", methods=["POST"])
def register():
    try:
        email = request.json["email"]
        email = email.lower()
        password = request.json["pwd"]
        username = request.json["username"]

        users = getUsers()

        if (len(list(filter(lambda x: x["email"] == email, users))) == 1):
            return jsonify({"error": "Invalid form"})
        if not re.match(r"[\w\._]{5,}@\w{3,}.\w{2,4}", email):
            return jsonify({"error": "Invalid form"})
        addUser(username, email, password)
        return jsonify({"success": True})
    except:
        return jsonify({"error": "Invalid form"})


if __name__ == "__main__":
    app.run(debug=True)
