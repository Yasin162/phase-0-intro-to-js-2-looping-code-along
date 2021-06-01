// Code your solutions in this file
//for (let age = 30; age <40; age++) {
    //console.log (`I'm ${age} years onload. Happy birthday to me!`);

//}
//const gifts =['teddy bear', 'drone', 'doll'];
//function wrapGifts(gifts){
  //  for (let i = 0; i < gifts.length; i++) {
   //     console.log(`wrapped ${gifts[i]} and added a bow!`);
   //     debugger;
 //   }
//}
const arr1 = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
    arr1.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;}
    return arr1;
}
function countDown(int) {
    let i=int;
    while (i >=0) {
        console.log (i--);
        
    }
    return int;
}