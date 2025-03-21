let tg = window.Telegram.WebApp;

tg.expand()

let btn = document.querlySelector("#click")

btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("your have cate")
        tg.MainButton.show()
    }
}