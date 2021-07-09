function longest(s1, s2) {
    // Раздерение строк по буквам
    let s1Chars = s1.split('');
    let s2Chars = s2.split('');
    
    // Добавление букв каждой строки во множество
    let set = new Set();
    s1Chars.forEach(
        function(item, i, arr) {
            set.add(item);
        }
    )
    s2Chars.forEach(
        function(item, i, arr) {
            set.add(item);
        }
    )

    // Создание массива из множества
    let resultArray = Array.from(set);

    // Сортировка букв
    resultArray.sort();

    // Возврат конечной строки
    return resultArray.join('');
}

let TwoToOneDiv = document.getElementById("TwoToOne");
TwoToOneDiv.innerHTML += longest("aretheyhere", "yestheyarehere") + "<br>";
TwoToOneDiv.innerHTML += longest("loopingisfunbutdangerous", "lessdangerousthancoding") + "<br>";
TwoToOneDiv.innerHTML += longest("inmanylanguages", "theresapairoffunctions");