function task1(input){
    let name = input[0];
    let numAdultTicket = Number(input[1]);
    let numOfChiledTicket = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let tax = Number(input[4]);

    let chiledTicketPrice = adultTicketPrice -( adultTicketPrice * 0.7);

    let adultTickets = numAdultTicket * (adultTicketPrice + tax);
    let chiledTickets = numOfChiledTicket * (chiledTicketPrice + tax);
    let total = adultTickets + chiledTickets;
    let final = total * 0.2;
    console.log(`The profit of your agency from ${name} tickets is ${final.toFixed(2)} lv.`)
}
task1(["WizzAir",
"15",
"5",
"120",
"40"])
