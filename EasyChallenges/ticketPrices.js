/**
 * The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:

tickets([25, 25, 50]); // => YES
tickets([25, 100]); // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]); // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

tickets([25, 25, 50, 50]); => NO

tickets([75, 50, 50]) => NO
tickets([25, 50, 50]) => 
 => amountInBank = 0;
 => 25 (0); 50 (25) => 50(25)

 * 
 */

// * I know I need a condition that checks for if each person can be sold a ticket
// * There are three possible amounts a person can possibly have
// * Output has to be a response of 'yes' or 'no' 
// * Vasya initially has no money

/**
 * For each person,
 *  calculate the change needed and see if we have enough in the bank,
 *  if we do, then give them the change and add the their ticket revenue
 *  if we dont, fail 
 */

 const ticketPrice = 25;

 // 25, 50, 50
 
 // amountInBank = 0
 // i = 0
 // changedNeeded = 
 // bill = 25
 // ticketPrice = 25;
 const tickets = money => {
     let amountInBank = 0; // 0
     for (let i = 0; i < money.length; i++) { 
         // every person
         const bill = money[i]; //
         const changeNeeded = bill - ticketPrice; // 25(bill) - 25 = 0;
         // amountInBank, changeNeeded
         if(changeNeeded > amountInBank) {
             return "NO";
         }  
         amountInBank = amountInBank - changeNeeded + ticketPrice;
         // Is there enough money
     }
     
     return "YES";
 }
 
 
 console.log(tickets([25, 50, 100])); 
 // tickets([25, 100]);
 // tickets([25, 25, 50, 50, 100]);
 
 // bill, ticket_price
 // change = bill 