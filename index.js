// Code your solutions in this file

function writeCards(names, event) {
    const newNames = [];
    for(let i =0; i < names.length; i++){
      const message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
      newNames.push(message)
    }

    return newNames 

}


function countDown() {
    let count = 10;
    while(0 <= count) {
        console.log(count--); 
    }
}