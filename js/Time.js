function num2str(num)
{
    if (num < 10)
    {
        return "0" + num;
    }
    else
    {
        return num.toString();
    }
}

function humanReadable(seconds)
{
    let hh = Math.floor(seconds/60/60);
    let mm = Math.floor(seconds/60) - hh*60;
    let ss = seconds - hh * 60 * 60 - mm * 60; 
    return num2str(hh) + ":" + num2str(mm) + ":" + num2str(ss);
}

let TimeDiv = document.getElementById("Time");
TimeDiv.innerHTML += humanReadable(0) + '<br>';
TimeDiv.innerHTML += humanReadable(5) + '<br>';
TimeDiv.innerHTML += humanReadable(60) + '<br>';
TimeDiv.innerHTML += humanReadable(86399) + '<br>';
TimeDiv.innerHTML += humanReadable(359999);