function tickets(peopleInLine){
    let ticketCost = 25;
    let cashbox    = [];
    let curBill;
    let surrender;
    
    for (let i = 0; i < peopleInLine.length; i++)
    {
        let cash = peopleInLine[i];
        surrender = 0;
          
        // Сортировка имеющихся купюр в порядке возрастания
        cashbox.sort((a,b) => a - b);
          
        if (cash - ticketCost != 0)
        {
            // Поиск купюр на сдачу
            let len = cashbox.length; 
            for (let j = 0; j < len; j++)
            {
                curBill = cashbox.pop();
                if (curBill > cash - ticketCost)
                {
                    cashbox.unshift(curBill);
                }
                else
                {
                    surrender += curBill;    
                }
                if (surrender == cash - ticketCost)
                {
                    break;
                }
            }
            if (surrender != cash - ticketCost)
            {
                return "NO";
            }
        }
            
        cashbox.push(cash);
    }
    
    return "YES";
}

let ClerkDiv = document.getElementById("Clerk");
ClerkDiv.innerHTML += tickets([25, 25, 50]) + '<br>';
ClerkDiv.innerHTML += tickets([25, 100]) + '<br>';
ClerkDiv.innerHTML += tickets([25, 25, 50, 50, 100]);