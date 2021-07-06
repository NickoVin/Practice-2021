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

let ResultDiv = document.getElementById("TwoToOne");
ResultDiv.textContent += longest("aretheyhere", "yestheyarehere") + " / ";
ResultDiv.textContent += longest("loopingisfunbutdangerous", "lessdangerousthancoding") + " / ";
ResultDiv.textContent += longest("inmanylanguages", "theresapairoffunctions");