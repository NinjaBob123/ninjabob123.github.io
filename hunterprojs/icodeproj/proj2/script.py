from flask.flask import Flask, request, render_template

#Flask Constructor
app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def getAction():
  if request.method == "POST":
    action = request.form.get("action")
    return action
def showEffect():
  if request.method == "POST":
    action = getAction()
    if 'forest' in action:
      return render_template('index.html', text="You are born to a small family of druids, and the family lives alone in the woods, using the resources around them. They rely only on themselves. /n You have gained the ability to communicate with animals. /n When you grow up, you leave your family to be on your own. After awhile, you spot a very pretty druid on the far side of some trees. Do you try to talk to her, or ignore her?"
