//take a Number

var katzDeliLine =[]; 

function takeANumber(katzDeliLine, name){
  // var number =number++;
 //katzDeliLine = 0;
// katzDeliLine++;
 katzDeliLine.push(name);
  return ("Welcome, "+name+". You are number "+katzDeliLine.length+" in line.")
}

function nowServing (katzDeliLine){
   
  if (katzDeliLine.length === 0){
  return ("There is nobody waiting to be served!")
  }
  else{
    var current = katzDeliLine[0];
    katzDeliLine.shift();
    return ("Currently serving " +current+"." );
    
  }

}

function currentLine (katzDeliLine){
   
    for (var i=0; katzDeliLine.length>i; i++){
    
    if (katzDeliLine.lenght === 0){
    return("The line is currently empty.")
    }
  else{
     return ("The line is currently: "+${i}+". "+ ${katzDeliLine}+",");
  }
    }
}
/*
function currentLine (katzDeliLine){
const iterator = katzDeliLine.values();
countMax = katzDeliLine.length;
count = 0;


  return("The line is currently empty.")
}
for (const value of iterator) {
      return ("The line is currently: " + value);
      count++;
    }
  }
*/