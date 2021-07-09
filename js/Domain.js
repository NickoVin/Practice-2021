function domainName(url){
    let prev   = "";
    let domain = [];
  
    url = url.replace("http://", '');
    url = url.replace("https://", '');
    url = url.replace("www.", '');
    
    let index = 0;
    while (url[index] != ".")
    {
        domain.push(url[index]);
        index++;
    }
  
    return domain.join('');
}

let DomainDiv = document.getElementById("Domain");
DomainDiv.innerHTML += domainName("https://www.codewars.com") + '<br>';
DomainDiv.innerHTML += domainName("http://google.co.jp") + '<br>';
DomainDiv.innerHTML += domainName("www.xakep.ru") + '<br>';
DomainDiv.innerHTML += domainName("https://youtube.com");