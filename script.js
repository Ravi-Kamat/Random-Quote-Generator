

const btn = document.querySelector(".btn")
const p = document.querySelector(".quotes")

let API = "http://api.quotable.io/random"

btn.addEventListener("click", () => {

    fetch(API).then(res => res.json())
        .then(data => {
            p.innerHTML = data.content;
        })
        .catch(() => alert("Error API"))
})
