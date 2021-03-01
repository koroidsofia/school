// alert(1 || 1)
// alert(0 || 1)
// alert(1 || 0)
// alert(0 || 0)
// let a = prompt("Час роботы")
// if (a > 18 || a < 10) {
//     alert("Закрыто")
// } else {
//     alert("Открыто")
// }
// alert(1 || "Den")
// alert(null || 1)
// alert(null || 0 || 1)
// alert(null || 0)
// alert("Den" || null)
// alert("Den" || 1)
// let a = prompt("Час работи")
// if (a > 10 && a < 18) {
//     alert("Oткрыто")
// } else {
//     alert("Закрыто")
// }
// alert(5 && 1)
// alert(null && 5)
// alert(0 && "Den")
// alert("Den" && 0)
// alert(1 && 2 && null && 3)
// alert(1 && 2 && 3)
// alert((a && b) || (c && d))
// alert(!!null)
// alert(Boolean(null || 1))
// alert(alert(1) || 2 || alert(3))
alert("Начало")
let a = prompt("Кто ты?")
if (a = "Админ") {
    let b = prompt("Пароль")
    if (b == "111") {
        alert("Здравствуйте,администратор")

    } else if (b != "111" || b == "") {
        alert("Неверный пароль")
    }
} else if (a != "Админ") {
    alert("Зарегаться?")
    let d = prompt("Какой никнейм вы желаете?")
} else {
    alert("Отмена")
}