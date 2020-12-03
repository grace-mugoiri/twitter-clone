from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import re
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity, jwt_refresh_token_required, create_refresh_token, get_raw_jwt

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///twitter.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
app.config["JWT_SECRET_KEY"] = "thisismyjwtsecrettoken"
app.config["JWT_BLACKLIST_ENABLED"] = True
app.config["JWT_BLACKLIST_TOKEN_CHECKS"] = ["access", "refresh"]
jwt = JWTManager(app)
CORS(app)


# DB

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
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
    return [{"id": i.id, "username": i.username, "email": i.email, "password": i.pwd} for i in users]

def getUser(uid):
    users = User.query.all()
    user = list(filter(lambda x: x.id == uid, users))[0]
    return {"id": user.id, "username": user.username, "email": user.email, "password": user.pwd}

def addUser(username, email, pwd):
    try:
        user = User(username, email, pwd)
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
    content = db.Column(db.String(2048))

def getTweets():
    tweets = Tweet.query.all()
    return [{"id": i.id, "title": i.title, "content": i.content, "user": getUser(i.uid)} for i in tweets]

def getUserTweets(uid):
    tweets = Tweet.query.all()
    return [{"id": item.id, "userid": item.user_id, "title": item.title, "content": item.content}
        for item in filter(lambda i: i.user_id == uid, tweets)]

def addTweet(title, content, uid):
	try:
		user = list(filter(lambda i: i.id == uid, User.query.all()))[0]
		twt = Tweet(title=title, content=content, user=user)
		db.session.add(twt)
		db.session.commit()
		return True
	except Exception as e:
		print(e)
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

class InvalidToken(db.Model):
    __tablename__ = "invalid_tokens"
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String)

    def save(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def is_invalid(cls, jti):
        q = cls.query.filter_by(jti=jti).first()
        return bool(q)

# ROUTES

@jwt.token_in_blacklist_loader
def check_if_blacklisted_token(decrypted):
    jti = decrypted["jti"]
    return InvalidToken.is_invalid(jti)

@app.route("/api/login", methods=["GET", "POST"])
def login():
    try:
        email = request.json["email"]
        password = request.json["pwd"]
        if email and password:
            user = list(filter(lambda x: x["email"] == email and x["password"] == password, getUsers()))
            print("reached here")
            if len(user) == 1:
                token = create_access_token(identity=user[0]["id"])
                refresh_token = create_refresh_token(identity=user[0]["id"])
                return jsonify({"token": token, "refreshToken": refresh_token})
            else:
                return jsonify({"error": "wrong credentials"})
        else:
            return jsonify({"error": "Invalid pass/email"})
    except Exception as e:
        print(e)
        return jsonify({"error": "Invalid form in gen"})


@app.route("/api/register", methods=["GET", "POST"])
def register():
    try:
        email = request.json["email"]
        email = email.lower()
        password = request.json["pwd"]
        username = request.json["username"]

        users = getUsers()

        if (len(list(filter(lambda x: x["email"] == email, users))) == 1):
            return jsonify({"error": "email is wrong"})
        if not re.match(r"[\w\._]{5,}@\w{3,}.\w{2,4}", email):
            return jsonify({"error": "email character"})
        addUser(username, email, password)
        return jsonify({"success": True})
    except Exception as e:
        print(e)
        return jsonify({"error": "some thing is wrong at the end"})

@app.route("/api/checkiftokenexpire", methods=["POST"])
@jwt_required
def check_if_token_expire():
    print(get_jwt_identity())
    return jsonify({"success": True})

@app.route("/api/refreshtoken", methods=["POST"])
@jwt_refresh_token_required
def refresh():
    identity = get_jwt_identity()
    token = create_access_token(identity=identity)
    return jsonify({"token": token})

@app.route("/api/logout/access", methods=["POST"])
@jwt_required
def access_logout():
    jti = get_raw_jwt()["jti"]
    try:
        invalid_token = InvalidToken(jti=jti)
        invalid_token.save()
        return jsonify({"success": True})
    except Exception as e:
        print(e)
        return {"error": e}


@app.route("/api/logout/refresh", methods=["POST"])
@jwt_required
def refresh_logout():
    jti = get_raw_jwt()["jti"]
    try:
        invalid_token = InvalidToken(jti=jti)
        invalid_token.save()
        return jsonify({"success": True})
    except Exception as e:
        print(e)
        return {"error": e}

@app.route("/api/tweets")
def get_tweets():
	return jsonify(getTweets())

@app.route("/api/addtweet", methods=["POST"])
@jwt_required
def add_tweet():
	try:
		title = request.json["title"]
		content = request.json["content"]
		uid = get_jwt_identity()
		addTweet(title, content, uid)
		return jsonify({"success": "true"})
	except Exception as e:
		print(e)
		return jsonify({"error": "Could not add your tweet"})

@app.route("/api/deletetweet", methods=["DELETE"])
@jwt_required
def delete_tweet():
	try:
		tid = request.json["tid"]
		delTweet(tid)
		return jsonify({"success": "true"})
	except:
		return jsonify({"error": "Could not delete tweet"})

@app.route("/api/getcurrentuser")
@jwt_required
def get_current_user():
	uid = get_jwt_identity()
	return jsonify(getUser(uid))

@app.route("/api/changepassword", methods=["POST"])
@jwt_required
def change_password():
	try:
		user = User.query.get(get_jwt_identity())
		if not (request.json["password"] and request.json["npassword"]):
			return jsonify({"error": "Invalid form"})
		if not user.pwd == request.json["password"]:
			return jsonify({"error": "Wrong password"})
		user.pwd = request.json["npassword"]
		db.session.add(user)
		db.session.commit()
		return jsonify({"success": True})
	except Exception as e:
		print(e)
		return jsonify({"error": "Invalid form"})

@app.route("/api/deleteaccount", methods=["DELETE"])
@jwt_required
def delete_account():
	try:
		user = User.query.get(get_jwt_identity())
		tweets = Tweet.query.all()
		for tweet in tweets:
			if tweet.user.username == user.username:
				delTweet(tweet.id)
		removeUser(user.id)
		return jsonify({"success": True})
	except Exception as e:
		print(e)
		return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)
