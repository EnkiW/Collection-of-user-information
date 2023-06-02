let year = prompt("Введіть рік народження:");
if (year) {
    var city = prompt("Введіть місто, де ви живете:");
    if (city) {
        var sport = prompt("Введіть ваш улюблений вид спорту:");
        if (sport) {
            var currentYear = new Date().getFullYear();
            var age = currentYear - parseInt(year);
            if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
                alert("Ти живеш у столиці " + getCountry(city) + ".\n\n" + "Твій вік: " + age + " років.\n" + "Ти любиш спорт: " + sport + ".\n" + "Круто! Хочеш стати як " + getChampion(sport) + "?");
            } else {
                alert("Ти живеш у місті " + city + ".\n\n" + "Твій вік: " + age + " років.\n" + "Ти любиш спорт: " + sport + ".\n");
            }
        } else {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        }
    } else {
        alert("Шкода, що Ви не захотіли ввести своє місто проживання.");
    }
} else {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
}

function getCountry(city) {
    switch (city) {
        case "Київ":
            return "України";
        case "Вашингтон":
            return "США";
        case "Лондон":
            return "Великобританії";
        default:
            return "";
    }
}

function getChampion(sport) {
    switch (sport) {
        case "футбол":
            return "Мессі";
        case "бокс":
            return "Ломаченко";
        case "баскетбол":
            return "Казінс";
        default:
            return "";
    }
}