
let SzK = document.getElementById("SzamviteliKoltseg");
let SzP = document.getElementById("SzamviteliProfit");
let EK = document.getElementById("ExplicitKoltseg");
let A = document.getElementById("amortizacio");
let NP = document.getElementById("NormalProfit");
let GP = document.getElementById("GazdasagiProfit");
let EK2 = document.getElementById("ExplicitKoltseg2");
let IK = document.getElementById("ImplicitKoltseg");
let GP2 = document.getElementById("GazdasagiProfit2");
let GK = document.getElementById("GazdasagiKoltseg");
let GP3 = document.getElementById("GazdasagiProfit3");
let O=document.getElementById("OsszKoltseg");
let values = [];

document.getElementById("calculate").addEventListener("click", Calculate);

function Calculate(){
    values=[];
    boolValues = []
    for(let i = 0; i < 12; i++){
        boolValues.push(false);
    }
    let ready=false;
    values.push(SzK.value);
    values.push(SzP.value);
    values.push(EK.value);
    values.push(A.value);
    values.push(NP.value);
    values.push(GP.value);
    values.push(EK2.value);
    values.push(IK.value);
    values.push(GP2.value);
    values.push(GK.value);
    values.push(GP3.value);
    values.push(O.value);
    while(!ready){
        checkFirst();
        checkSecond();
        checkThird();
        checkFourth();
        CheckFifth();
        CheckSixth();
        CheckSeventh();
        CheckEight();
        CheckNineth();
        CheckTenth();
        CheckEleventh();
        CheckTwelfth();
        let j = 0;
        for( j; j< 12; j++){
            if(boolValues[j]!=true){
                break;
            }
        }
        if(j==12)
            ready=true;
    }
    SzK.value=values[0];
    SzP.value=values[1];
    EK.value=values[2];
    A.value=values[3];
    NP.value=values[4];
    GP.value=values[5];
    EK2.value=values[6];
    IK.value=values[7];
    GP2.value=values[8];
    GK.value=values[9];
    GP3.value=values[10];
    O.value=values[11];
    
   
   
}
function checkFirst(){
    if ( values[0] === '') {
        if(values[2]!= '' && values[3]!= ''){
            values[0] = parseInt(values[2])+ parseInt(values[3]);
            boolValues[0]=true;
        }
        else if(values[1]!= '' && values[11]!= ''){
            values[0] = parseInt(values[11])- parseInt(values[1]);
            boolValues[0]=true;
        }
      }
    else{
        boolValues[0]=true;
    }
    console.log("Kész");
}
function checkSecond(){
    if ( values[1] === '') {
        if(values[4]!= '' && values[5]!= ''){
            values[1] = parseInt(values[4])+ parseInt(values[5]);
            boolValues[1]=true;
        }
        else if(values[0]!= '' && values[11]!= ''){
            values[1] = parseInt(values[11])- parseInt(values[0]);
            boolValues[1]=true;
        }
      }
    else{
        boolValues[1]=true;
    }
    console.log("Kész");
}
function checkThird(){
    if ( values[2] === '') {
        if(values[0]!= '' && values[3]!= ''){
            values[2] = parseInt(values[0])- parseInt(values[3]);
            boolValues[2]=true;
        }
        else if(values[3]!= '' && values[4]!= '' &&  values[6]!= ''  && values[7]!= ''){
            values[2] = (parseInt(values[6])+ parseInt(values[7]))-(parseInt(values[3])+ parseInt(values[4]));
            boolValues[2]=true;
        }
        else if(values[6]!= ''){
            values[2] = parseInt(values[6]);
            boolValues[2]=true;
        }
        else if(values[3]!= '' && values[4]!= '' &&  values[5]!= ''  && values[11]!= ''){
            values[2] =parseInt(values[11])-(parseInt(values[3])+ parseInt(values[4])+parseInt(values[5]));
            boolValues[2]=true;
        }
      }
    else{
        boolValues[2]=true;
    }
    console.log("Kész");
}
function checkFourth(){
    if ( values[3] === '') {
        if(values[0]!= '' && values[2]!= ''){
            values[3] = parseInt(values[0])- parseInt(values[2]);
            boolValues[3]=true;
        }
        else if(values[2]!= '' && values[4]!= '' &&  values[6]!= ''  && values[7]!= ''){
            values[3] = (parseInt(values[6])+ parseInt(values[7]))-(parseInt(values[2])+ parseInt(values[4]));
            boolValues[3]=true;
        }
        else if(values[2]!= '' && values[4]!= '' &&  values[5]!= ''  && values[11]!= ''){
            values[3] =parseInt(values[11])-(parseInt(values[2])+ parseInt(values[4])+parseInt(values[5]));
            boolValues[3]=true;
        }
      }
    else{
        boolValues[3]=true;
    }
    console.log("Kész");
}
function CheckFifth(){
    if ( values[4] === '') {
        if(values[1]!= '' && values[5]!= ''){
            values[4] = parseInt(values[1])- parseInt(values[5]);
            boolValues[4]=true;
        }
        else if(values[2]!= '' && values[3]!= '' &&  values[6]!= ''  && values[7]!= ''){
            values[4] = (parseInt(values[6])+ parseInt(values[7]))-(parseInt(values[2])+ parseInt(values[3]));
            boolValues[4]=true;
        }
        else if(values[7]!= '' && values[3]!= ''){
            values[4] = parseInt(values[7]) - parseInt(values[3]);
            boolValues[4]=true;
        }
        else if(values[3]!= '' && values[2]!= '' &&  values[5]!= ''  && values[11]!= ''){
            values[4] =parseInt(values[11])-(parseInt(values[3])+ parseInt(values[2])+parseInt(values[5]));
            boolValues[4]=true;
        }
      }
    else{
        boolValues[4]=true;
    }
    console.log("Kész");
}
function CheckSixth(){
    if ( values[5] === ''){
        if(values[1]!= '' && values[4]!= ''){
            values[5] = parseInt(values[1])- parseInt(values[4]);
            boolValues[5]=true;
        }
        else if(values[8]!= ''){
            values[5] = parseInt(values[8]);
            boolValues[5]=true;
        }
        else if(values[10]!= ''){
            values[5] = parseInt(values[10]);
            boolValues[5]=true;
        }
        else if(values[3]!= '' && values[4]!= '' &&  values[2]!= ''  && values[11]!= ''){
            values[5] =parseInt(values[11])-(parseInt(values[3])+ parseInt(values[4])+parseInt(values[2]));
            boolValues[5]=true;
        }
    }
    else{
        boolValues[5]=true;
    }
    console.log("Kész");
}
function CheckSeventh(){
    if ( values[6] === ''){
        if(values[7]!= '' && values[9]!= ''){
            values[6] = parseInt(values[9])- parseInt(values[7]);
            boolValues[6]=true;
        }
        else if(values[2]!= '' && values[3]!= '' &&  values[4]!= ''  && values[7]!= ''){
            values[6] = (parseInt(values[2])+ parseInt(values[3]) + parseInt(values[4]))-parseInt(values[7]);
            boolValues[6]=true;
        }
        else if(values[2]!= ''){
            values[6] = parseInt(values[2]);
            boolValues[6]=true;
        }
        else if(values[7]!= '' && values[8]!= '' && values[11]!= ''){
            values[6] =parseInt(values[11])-(parseInt(values[7])+ parseInt(values[8]));
            boolValues[6]=true;
        }
    }
    else{
        boolValues[6]=true;
    }
    console.log("Kész");
}
function CheckEight(){
    if ( values[7] === ''){
        if(values[6]!= '' && values[9]!= ''){
            values[7] = parseInt(values[9])- parseInt(values[6]);
            boolValues[7]=true;
        }
        else if(values[2]!= '' && values[3]!= '' &&  values[4]!= ''  && values[6]!= ''){
            values[7] = (parseInt(values[2])+ parseInt(values[3]) + parseInt(values[4]))-parseInt(values[6]);
            boolValues[7]=true;
        }
        else if(values[6]!= '' && values[8]!= '' && values[11]!= ''){
            values[7] =parseInt(values[11])-(parseInt(values[6])+ parseInt(values[8]));
            boolValues[7]=true;
        }
        
    }
    else{
        boolValues[7]=true;
    }
    console.log("Kész");
}
function CheckNineth(){
    if ( values[8] === ''){
        if(values[5]!= ''){
            values[8] = parseInt(values[5]);
            boolValues[8]=true;
        }
        else if(values[10]!= ''){
            values[8] = parseInt(values[10]);
            boolValues[8]=true;
        }
        else if(values[7]!= '' && values[6]!= '' && values[11]!= ''){
            values[8] =parseInt(values[11])-(parseInt(values[7])+ parseInt(values[6]));
            boolValues[6]=true;
        }
        
    }
    else{
        boolValues[8]=true;
    }
    console.log("Kész");
}
function CheckTenth(){
    if ( values[9] === ''){
        if(values[6]!= '' && values[7]!= ''){
            values[9] = parseInt(values[6])+ parseInt(values[7]);
            boolValues[9]=true;
        }
        else if(values[10]!= ''&& values[11]!= ''){
            values[9] =parseInt(values[11])-(parseInt(values[10]));
            boolValues[9]=true;
        }
        
    }
    else{
        boolValues[9]=true;
    }
    console.log("Kész");
}
function CheckEleventh(){
    if ( values[10] === ''){
        if(values[5]!= ''){
            values[10] = parseInt(values[5]);
            boolValues[10]=true;
        }
        else if(values[8]!= ''){
            values[10] = parseInt(values[8]);
            boolValues[10]=true;
        }
        else if(values[9]!= ''&& values[11]!= ''){
            values[10] =parseInt(values[11])-(parseInt(values[9]));
            boolValues[10]=true;
        }
        
    }
    else{
        boolValues[10]=true;
    }
    console.log("Kész");
}
function CheckTwelfth(){
    if ( values[11] === ''){
        if(values[0]!= '' && values[1]!= ''){
            values[11] = parseInt(values[0])+ parseInt(values[1]);
            boolValues[11]=true;
        }
        else if(values[2]!= '' && values[3]!= '' && values[4]!= '' && values[5]!= ''){
            values[11] = parseInt(values[2])+ parseInt(values[3])+ parseInt(values[4])+ parseInt(values[5]);
            boolValues[11]=true;
        }
        else if(values[6]!= '' && values[7]!= '' && values[8]!= '' ){
            values[11] = parseInt(values[6])+ parseInt(values[7])+ parseInt(values[8]);
            boolValues[11]=true;
        }
        else if(values[9]!= '' && values[10]!= ''){
            values[11] = parseInt(values[9])+ parseInt(values[10]);
            boolValues[11]=true;
        }
        
    }
    else{
        boolValues[11]=true;
    }
    console.log("Kész");
}