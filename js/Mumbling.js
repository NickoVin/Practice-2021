function accum(s) {
    let result = '';
    let lower;
    for (let i = 0; i < s.length; i++)
    {
        result += s[i].toUpperCase();
        lower   = s[i].toLowerCase();
        for (let j = 0; j < i; j++)
        {
            result += lower;
        }
        if (i + 1 != s.length)
        {
            result += "-";
        } 
    }
    return result;
}

let MumblingDiv = document.getElementById("Mumbling");
MumblingDiv.innerHTML += accum("ZpglnRxqenU") + '<br>';
MumblingDiv.innerHTML += accum("NyffsGeyylB") + '<br>';
MumblingDiv.innerHTML += accum("MjtkuBovqrU") + '<br>';
MumblingDiv.innerHTML += accum("EvidjUnokmM");