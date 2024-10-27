let data = JSON.parse("./data.json")

let p = document.getElementById("POST1")
p.innerHTML = data["message"]