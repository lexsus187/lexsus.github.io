let tg = window.Telegram.WebApp;
let btn = document,querySelector("#click");

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let item = {
    M-HH: 0,
    C-K: 0,
    I-B: 0,
    V-C: 0
}

let price = 0
let name = ""
let photo = ""
let email = ""

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")

let usercard = document.querySelector("#usercard")
let username = document.querySelector("#user-name")
let useremail = document.querySelector("#user-email")
let userphone = document.querySelector("#userphone")

function create_li(text){
    let li = document.createElement("li")
    li.innerHTML = text
    usercard.appendChild(li)
}

function update_orders(){
    usercard.innerHTML = "Ваши заказы:"
    if (name != ""){
        create_li("Name:" + name)
    }
    if (phone != ""){
        create_li("Phone:" + name)
    }
    if (email != ""){
        create_li("Email:" + name)
    }
    for (let item in items){
        if (items[item] != 0){
            create_li(item + ": " + items[item])
        }
    }
}

username.onchange = () => {
    name = username.value
}

useremail.onchange = () => {
    email = useremail.value
}

userphone.onchange = () => {
    phone = userphone.value
}

btn1.onclick = () => {
    items["M-HH"] += 1
    price += 6000
    update_orders()
}

btn2.onclick = () => {
   items["C-K"] += 1
    price += 6600
    update_orders()
}

btn3.onclick = () => {
    items["I-B"] += 1
    price += 5000
    update_orders()
}

btn4.onclick = () => {
    items["V-C"] += 1
    price += 90000
    update_orders()
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    result = ""
    if (name != ""){
        result("Name:" + name + "\n")
    }
    if (phone != ""){
        result("Phone:" + name + "\n")
    }
    if (email != ""){
        result("Email:" + name + "\n")
    }
    for (let item in items){
        if (items[item] != 0){
            result(item + ": " + items[item])
        }
    }
tg.sendData(item);
})

tg.expand();