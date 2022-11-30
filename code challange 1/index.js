
   
function studentGrade(percentage){
    if (percentage>79){
        return "A"
    }
    else if(percentage>=60 && percentage<=79){
        return "B"
    }
    else if(percentage>49 && percentage<=59){
        return "C"
    }
    else if(percentage>=40 && percentage<=49){
        return "D"
    }
    //if the percentage is<39 it will return an E
    else{
        return "E"
    }
}

function grade(){
let number_string = document.getElementById('number').value;
let number = parseInt(number_string);
let grade = studentGrade(number);
//make grade bolder than the rest
document.getElementById('grade').innerHTML = '<b>'+grade+'</b>';
}
