//    generation of tax
function getTax(taxablePay){
    let tax = 0;

    if (taxablePay<=24000) {
        tax += 0.1 * taxablePay;
    } else {
        tax += 2400;
    }

    if(taxablePay > 24000 && taxablePay<=32333) {
        tax += 0.25 * (taxablePay - 24000)
    } else {
        tax += 0.25 * 8333;
    }
    
    if(taxablePay > 32333) {
        tax += 0.3 * (taxablePay - (24000 + 8333));
    }
    return tax;
}
// generation of nssf
function getNSSF(grossPay){
    let nssf = 0;
    if(grossPay <= 6000){
        nssf += 0.06 * grossPay;
    } else {
        nssf += 0.06 * 6000;
    }

    if(grossPay > 6000 && grossPay <= 18000){
        nssf += 0.06 * (grossPay - 6000)
    } else {
        nssf += 0.06 * 12000;
    }
    return nssf;
}


function getNHIF(grossPay){
    let nhif;
    if(grossPay <= 5999){
        nhif = 150;      
    }
    else if(grossPay>=6000 && grossPay<=7999){
        nhif = 300;
    }
    else if(grossPay>=8000 && grossPay<=11999){
        nhif = 400;
    }
    else if(grossPay>=12000 && grossPay<=14999){
        nhif = 500;
    }
    else if(grossPay>=15000 && grossPay<=19999){
        nhif = 600;
    }
    else if(grossPay>=20000 && grossPay<=24999){
        nhif = 750;
    }
    else if(grossPay>=25000 && grossPay<=29999){
        nhif = 850;
    }
    else if(grossPay>=30000 && grossPay<=34999){
        nhif = 900;
    }
    else if(grossPay>=35000 && grossPay<=39999){
        nhif = 950;
    }
    else if(grossPay>=40000 && grossPay<=44999){
        nhif = 1000;
    }
    else if(grossPay>=45000 && grossPay<=49999){
        nhif = 1100;
    }
    else if(grossPay>=50000 && grossPay<=59999){
        nhif = 1200;
    }
    else if(grossPay>=60000 && grossPay<=69999){
        nhif = 1300;
    }
    else if(grossPay>=70000 && grossPay<=79999){
        nhif = 1400;
    }
    else if(grossPay>=80000 && grossPay<=89999){
        nhif = 1500;
    }
    else if(grossPay>=90000 && grossPay<=99999){
        nhif = 1600;
    }
    else if(grossPay>=100000){
        nhif = 1700;
    }
    return nhif;
}
    
// generation of net salary
function netSalary(){
    let number_string=document.getElementById('number').value;
    let gross_pay = parseInt(number_string);
    let nssf = getNSSF(gross_pay);
    let taxable_pay = gross_pay - nssf;
    let tax = getTax(taxable_pay);
    let nhif = getNHIF(gross_pay);
    let insurance_relief = 0.15 * nhif;
    let personal_relief = 2400;
    let paye =Math.round(tax - insurance_relief - personal_relief);
    let deductions = paye + nhif;
    let net_pay = taxable_pay - deductions;
    //console.log(net_pay);
    document.getElementById('gross_pay').innerText = gross_pay;
    document.getElementById('nssf').innerText=nssf;
    document.getElementById('nhif').innerText=nhif;
    document.getElementById('taxable_pay').innerText=taxable_pay;
    document.getElementById('insuarance_relief').innerText=insurance_relief;
    document.getElementById('personal_relief').innerText=personal_relief;
    document.getElementById('paye').innerText=paye;
    document.getElementById('net_pay').innerText=net_pay;


}
