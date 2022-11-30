function speedDetector(speed){
if (speed<70){
    return "OK"
}

let points = (speed -70)/5 //used to calculate points//
if (points>12) {
    return "License suspended"
}
//if points are <than 12 points will be returned
else{
    return points
}

}
function points(){
    let number_string=document.getElementById('number').value
    let number =parseInt(number_string);
    let points=speedDetector(number);
    document.getElementById('Points').innerHTML= '<b>'+points+'</b>';
}














