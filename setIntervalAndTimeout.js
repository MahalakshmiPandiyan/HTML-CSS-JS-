function immediate(platform){
    console.log("function passed to setImmediate is called after all the statements in the script are executed->>Hi, I'm " + platform);
}

console.log("Before the setImmediate call")
let timerID = setImmediate(immediate, "Mahalakshmi");
console.log("After the setImmediate call")
for(let i=0; i<10; i++){
    console.log("Iteration of loop: "+i);
}

function print(name,color) {
  console.log( name + ' like ' + color + ' color' );
}

setTimeout(print, 2000, "Maha", "Black");