function digital_root(n) {
    // Условие выхода
    if (n < 10)
    {
        return n;
    }

    // Сложение цифр числа
    let digits = String(n);
    let sum    = 0;
    for (let i = 0; i < digits.length; i++)
    {
        sum += Number(digits[i]);
    }
    
    // Рекурсивное продолжение
    return digital_root(sum);
}

let DigitalRootDiv = document.getElementById("DigitalRoot");
DigitalRootDiv.innerHTML += digital_root(16) + '<br>';
DigitalRootDiv.innerHTML += digital_root(456);