function songDecoder(song){
    // Поиск вхождений
    let indexes = [];
    let searchPos = 0;
    while (true) {
        let pos = song.indexOf("WUB", searchPos);
        if (pos == -1){
            break;
        }
        indexes.push(pos);
        searchPos = pos + 1;
    }
  
    // Выход, если строка не содержит WUB
    if (indexes.length == 0)
    {
        return song;
    }
    
    // Поиск стоящих рядом вхождений
    let start;
    let end;
    let i = 0;
    start = indexes[i];
    end = start + 3;
    while (true) 
    {
        if (indexes[i + 1] - end == 0)
        {
            end = indexes[i + 1] + 3;
        }
        else // выход из поиска
        {
          break;
        }
        i += 1;
    }
  
    // Удаление
    let separator = " ";
    if (start == 0 || end == song.length) // Учёт WUB в начале и в конце строки
    {
        separator = "";
    }
    song = song.slice(0, start) + separator + song.slice(end, song.length);
    
    return songDecoder(song);
}

let DubstepDiv = document.getElementById("Dubstep");
DubstepDiv.innerHTML += songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");