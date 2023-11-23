
let avCount=document.getElementById("avarageCount");
let avValue=document.getElementById("avarageValue");
let avarageResultCount=document.getElementById("avarageEndCount");
let avarageResultPrice=document.getElementById("avarageEndPrice");
let avarageResultValue=document.getElementById("avarageEndValue");
let avarageCountArray=[];
let avarageValueArray=[];

document.getElementById("avarageAdd").addEventListener("click", countAvarageAdd);
document.getElementById("avarageClear").addEventListener("click",clearAvarage);
document.getElementById("avarageMinus").addEventListener("click", countAvarageMinus);

function countAvarageAdd(){
    avarageCountArray.push(avCount.value);
    avarageValueArray.push(avValue.value);
    let countData=0;
    for(let i = 0; i<avarageCountArray.length; i++){
            countData+=parseInt(avarageCountArray[i],10);
    }
    
    let price=0;
    let db=0;
    for(let i =0; i<avarageCountArray.length; i++){
        if(avarageCountArray[i]>0){
            db+=parseInt(avarageCountArray[i],10);
            price+=parseInt(avarageValueArray[i],10)*parseInt(avarageCountArray[i],10);
        }
    }
    let avaragePrice=price/db;
    let value=countData*avaragePrice;
    avarageResultCount.innerHTML=`Időszaki zárókészlet: ${countData}`;
    avarageResultPrice.innerHTML=`Időszaki átlagár: ${avaragePrice}`;
    avarageResultValue.innerHTML=`Időszaki zárókészlet értéke: ${value}`;
}


function countAvarageMinus(){
    let minusValue=avCount.value;
    avarageCountArray.push(parseInt(minusValue)*(-1));
    avarageValueArray.push(avValue.value);
    let countData=0;
    for(let i = 0; i<avarageCountArray.length; i++){
            countData+=parseInt(avarageCountArray[i],10);
    }
    let price=0;
    let db=0;
    for(let i =0; i<avarageCountArray.length; i++){
        if(avarageCountArray[i]>0){
            db+=parseInt(avarageCountArray[i],10);
            price+=parseInt(avarageValueArray[i],10)*parseInt(avarageCountArray[i],10);
        }
    }
    let avaragePrice=price/db;
    let value=countData*avaragePrice;
    avarageResultCount.innerHTML=`Időszaki zárókészlet: ${countData}`;
    avarageResultPrice.innerHTML=`Időszaki átlagár: ${avaragePrice}`;
    avarageResultValue.innerHTML=`Időszaki zárókészlet értéke: ${value}`;
}
function clearAvarage(){
    avCount.value="";
    avValue.value="";
    avarageResultCount.innerHTML="";
    avarageResultPrice.innerHTML="";
    avarageResultValue.innerHTML="";
    avarageCountArray=[];
    avarageValueArray=[];
}







let avCountC=document.getElementById("avarageCountContinue");
let avValueC=document.getElementById("avarageValueContinue");
let avarageResultCountC=document.getElementById("avarageEndCountContinue");
let avarageResultPriceC=document.getElementById("avarageEndPriceContinue");
let avarageResultValueC=document.getElementById("avarageEndValueContinue");
let avarageCountArrayC=[];
let avarageValueArrayC=[];

document.getElementById("avarageAddContinue").addEventListener("click", countAvarageAddC);
document.getElementById("avarageClearContinue").addEventListener("click",clearAvarageC);
document.getElementById("avarageMinusContinue").addEventListener("click", countAvarageMinusC);

let backCount=0;
let backPrice=0;
function countAvarageAddC(){
    avarageCountArrayC.push(avCountC.value);
    avarageValueArrayC.push(avValueC.value);
    let countData=0;
    for(let i = 0; i<avarageCountArrayC.length; i++){
            countData+=parseInt(avarageCountArrayC[i],10);
    }
    
    let value=1;
    let avaragePrice=1;
    if(avarageCountArrayC.length==1){
        let price=0;
        let db=0;
        for(let i =0; i<avarageCountArrayC.length; i++){
            if(avarageCountArrayC[i]>0){
                db+=parseInt(avarageCountArrayC[i],10);
                price+=parseInt(avarageValueArrayC[i],10)*parseInt(avarageCountArrayC[i],10);
            }
    }
    avaragePrice=price/db;
    value=countData*avaragePrice;
    }
    else{
    
        let newPrice=((backCount*backPrice)+(parseInt(avCountC.value))*(parseInt(avValueC.value)))/countData;
        avaragePrice=newPrice;
        value=countData*avaragePrice;
        
    }
    backCount=countData;
    backPrice=avaragePrice;
    avarageResultCountC.innerHTML=`Időszaki zárókészlet: ${countData}`;
    avarageResultPriceC.innerHTML=`Időszaki átlagár: ${avaragePrice}`;
    avarageResultValueC.innerHTML=`Időszaki zárókészlet értéke: ${value}`;
    
}


function countAvarageMinusC(){
    let minusValue=avCountC.value;
    avarageCountArrayC.push(parseInt(minusValue)*(-1));
    avarageValueArrayC.push(avValueC.value);
    let countData=0;
    for(let i = 0; i<avarageCountArrayC.length; i++){
            countData+=parseInt(avarageCountArrayC[i],10);
    }
    let avaragePrice=backPrice;
    let value=countData*avaragePrice;
    backCount=countData;
    backPrice=avaragePrice;
    avarageResultCountC.innerHTML=`Időszaki zárókészlet: ${countData}`;
    avarageResultPriceC.innerHTML=`Időszaki átlagár: ${avaragePrice}`;
    avarageResultValueC.innerHTML=`Időszaki zárókészlet értéke: ${value}`;
   
}
function clearAvarageC(){
    avCountC.value="";
    avValueC.value="";
    avarageResultCountC.innerHTML="";
    avarageResultPriceC.innerHTML="";
    avarageResultValueC.innerHTML="";
    avarageCountArrayC=[];
    avarageValueArrayC=[];
}



let avCountF=document.getElementById("avarageCountFifo");
let avValueF=document.getElementById("avarageValueFifo");
let avarageResultCountF=document.getElementById("avarageEndCountFifo");
let avarageResultPriceF=document.getElementById("avarageEndPriceFifo");
let avarageResultValueF=document.getElementById("avarageEndValueFifo");
let avarageCountArrayF=[];
let avarageValueArrayF=[];

document.getElementById("avarageAddFifo").addEventListener("click", countAddFifo);
document.getElementById("avarageClearFifo").addEventListener("click",clearFifo);
document.getElementById("avarageMinusFifo").addEventListener("click", countMinusFifo);


function countAddFifo(){
    avarageResultCountF.innerHTML=`Időszaki zárókészlet: `;
    avarageResultPriceF.innerHTML=`Időszaki átlagár: `;
    
    avarageCountArrayF.push(avCountF.value);
    avarageValueArrayF.push(avValueF.value);
    let countData=0;
    for(let i = 0; i<avarageCountArrayF.length; i++){
            countData+=parseInt(avarageCountArrayF[i],10);
            if(avarageCountArrayF[i]>0){
                avarageResultCountF.innerHTML+=`${avarageCountArrayF[i]}   `
                avarageResultPriceF.innerHTML+=`${avarageValueArrayF[i]}   `
            }      
    }
    
    let price=0;
    let db=0;
    for(let i =0; i<avarageCountArrayF.length; i++){
        if(avarageCountArrayF[i]>0){
            db+=parseInt(avarageCountArrayF[i],10);
            price+=parseInt(avarageValueArrayF[i],10)*parseInt(avarageCountArrayF[i],10);
        }
    }
    let avaragePrice=price/db;
    let value=countData*avaragePrice;
    avarageResultValueF.innerHTML=`Időszaki zárókészlet értéke: ${value}`;
    
}

function countMinusFifo(){
    avarageResultCountF.innerHTML=`Időszaki zárókészlet: `;
    avarageResultPriceF.innerHTML=`Időszaki átlagár: `;
    let minusValue=parseInt(avCountF.value);
    let countData=0;
    for(let i = 0; i<avarageCountArrayF.length; i++){
            if(avarageCountArrayF[i]<= parseInt(minusValue) && minusValue>0){
                minusValue-=avarageCountArrayF[i];
                avarageCountArrayF[i] = 0;
                avarageValueArrayF[i] = 0;
            }
            else if(avarageCountArrayF[i]> parseInt(minusValue) && minusValue>0){
                avarageCountArrayF[i] -= minusValue;
                minusValue=0;
                break;
            }
    }
    for(let i=0; i<avarageCountArrayF.length; i++){
        countData+=avarageCountArrayF[i];
        if(avarageCountArrayF[i]>0){
            avarageResultCountF.innerHTML+=`${avarageCountArrayF[i]}   `
            avarageResultPriceF.innerHTML+=`${avarageValueArrayF[i]}   `
        }      
    }
    let price=0;
    let db=0;
    for(let i =0; i<avarageCountArrayF.length; i++){
        if(avarageCountArrayF[i]>0){
            db+=parseInt(avarageCountArrayF[i],10);
            price+=parseInt(avarageValueArrayF[i],10)*parseInt(avarageCountArrayF[i],10);
        }
    }
    let avaragePrice=price/db;
    let value=countData*avaragePrice;
    avarageResultValueF.innerHTML=`Időszaki zárókészlet értéke: ${value}`;
}
function clearFifo(){
    avCountF.value="";
    avValueF.value="";
    avarageResultCountF.innerHTML="";
    avarageResultPriceF.innerHTML="";
    avarageResultValueF.innerHTML="";
    avarageCountArrayF=[];
    avarageValueArrayF=[];
}



let avCountL=document.getElementById("avarageCountLifo");
let avValueL=document.getElementById("avarageValueLifo");
let avarageResultCountL=document.getElementById("avarageEndCountLifo");
let avarageResultPriceL=document.getElementById("avarageEndPriceLifo");
let avarageResultValueL=document.getElementById("avarageEndValueLifo");
let avarageCountArrayL=[];
let avarageValueArrayL=[];

document.getElementById("avarageAddLifo").addEventListener("click", countAddLifo);
document.getElementById("avarageClearLifo").addEventListener("click",clearLifo);
document.getElementById("avarageMinusLifo").addEventListener("click", countMinusLifo);


function countAddLifo(){
    avarageResultCountL.innerHTML=`Időszaki zárókészlet: `;
    avarageResultPriceL.innerHTML=`Időszaki átlagár: `;
    
    avarageCountArrayL.push(avCountL.value);
    avarageValueArrayL.push(avValueL.value);
    let countData=0;
    for(let i = 0; i<avarageCountArrayL.length; i++){
            countData+=parseInt(avarageCountArrayL[i],10);
            if(avarageCountArrayL[i]>0){
                avarageResultCountL.innerHTML+=`${avarageCountArrayL[i]}   `
                avarageResultPriceL.innerHTML+=`${avarageValueArrayL[i]}   `
            }      
    }
    
    let price=0;
    let db=0;
    for(let i =0; i<avarageCountArrayL.length; i++){
        if(avarageCountArrayL[i]>0){
            db+=parseInt(avarageCountArrayL[i],10);
            price+=parseInt(avarageValueArrayL[i],10)*parseInt(avarageCountArrayL[i],10);
        }
    }
    let avaragePrice=price/db;
    let value=countData*avaragePrice;
    avarageResultValueL.innerHTML=`Időszaki zárókészlet értéke: ${value}`;
    
}

function countMinusLifo(){
    avarageResultCountL.innerHTML=`Időszaki zárókészlet: `;
    avarageResultPriceL.innerHTML=`Időszaki átlagár: `;
    let minusValue=parseInt(avCountL.value);
    let countData=0;
    for(let i = avarageCountArrayL.length-1; i>-1; i--){
            if(avarageCountArrayL[i]<= parseInt(minusValue) && minusValue>0){
                minusValue-=avarageCountArrayL[i];
                avarageCountArrayL[i] = 0;
                avarageValueArrayL[i] = 0;
            }
            else if(avarageCountArrayL[i]> parseInt(minusValue) && minusValue>0){
                avarageCountArrayL[i] -= minusValue;
                minusValue=0;
                break;
            }
    }
    for(let i=0; i<avarageCountArrayL.length; i++){
        countData+=avarageCountArrayL[i];
        if(avarageCountArrayL[i]>0){
            avarageResultCountL.innerHTML+=`${avarageCountArrayL[i]}   `
            avarageResultPriceL.innerHTML+=`${avarageValueArrayL[i]}   `
        }      
    }
    let price=0;
    let db=0;
    for(let i =0; i<avarageCountArrayL.length; i++){
        if(avarageCountArrayL[i]>0){
            db+=parseInt(avarageCountArrayL[i],10);
            price+=parseInt(avarageValueArrayL[i],10)*parseInt(avarageCountArrayL[i],10);
        }
    }
    let avaragePrice=price/db;
    let value=countData*avaragePrice;
    avarageResultValueL.innerHTML=`Időszaki zárókészlet értéke: ${value}`;
}
function clearLifo(){
    avCountL.value="";
    avValueL.value="";
    avarageResultCountL.innerHTML="";
    avarageResultPriceL.innerHTML="";
    avarageResultValueL.innerHTML="";
    avarageCountArrayL=[];
    avarageValueArrayL=[];
}
