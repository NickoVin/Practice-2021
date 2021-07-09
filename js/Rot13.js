function transform(min, max, code)
{
    if (min <= code && code <= max)
    {
        code += 13;
        if (code > max)
        {
            code = min + (code - max - 1);
        }
        return code;
    }
    
    return 0;
}

function rot13(message){
    let result = [];
  
    let A = "A".charCodeAt(0);
    let Z = "Z".charCodeAt(0);
    let a = "a".charCodeAt(0);
    let z = "z".charCodeAt(0);
  
    message.split("").forEach(
        function(char, i, arr)
        {
            let charCode = char.charCodeAt(0);
            
            let newCode = transform(A, Z, charCode);
            if (newCode == 0) // Если строчная буква
            {
                newCode = transform(a, z, charCode);
            }
            if (newCode == 0) // Если буква не подходит для кодирования
            {
                newCode = charCode;
            }
          
            result.push(String.fromCharCode(newCode));
        }
    )
    return result.join('');
}

let Rot13Div = document.getElementById("Rot13");
Rot13Div.innerHTML += rot13("test") + '<br>';
Rot13Div.innerHTML += rot13("Test") + '<br>';