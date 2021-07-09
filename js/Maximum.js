var maxSequence = function(arr){
    let max     = -100;
    let index   = 0;
    let areaLen = 1;
    while (true)
    {
        for (let j = 0; j < arr.length; j++) // по массиву, начиная с позиции каждого элемента
        {
            let sum = 0;
            if (arr.length - j < areaLen)
            {
                continue;
            }
            for (let i = j; i < j + areaLen; i++) // по массиву, суммируя участки, длинной areaLen
            {
                sum += arr[i];
            }
            if (sum > max)
            {
                max = sum;
            }
        }
        if (areaLen == arr.length || arr.length == 0)
        {
            break;
        }
        areaLen++;
    }
    if (max < 0)
    {
        return 0;
    }
    return max;
}

let MaximumDiv = document.getElementById("Maximum");
MaximumDiv.innerHTML += maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);