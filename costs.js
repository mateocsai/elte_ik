
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
document.getElementById("reset").addEventListener("click", Reset);


function Reset(event){
    SzK.value="";
    SzP.value="";
    EK.value="";
    A.value="";
    NP.value="";
    GP.value="";
    EK2.value="";
    IK.value="";
    GP2.value="";
    GK.value="";
    GP3.value="";
    O.value="";
    values=[];
    event.preventDefault();
}

function Calculate(event){
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
    
   
    event.preventDefault();
}
function checkFirst(){
    if ( values[0] === '') {
        if(values[2]!= '' && values[3]!= ''){
            values[0] = parseFloat(values[2])+ parseFloat(values[3]);
            boolValues[0]=true;
        }
        else if(values[1]!= '' && values[11]!= ''){
            values[0] = parseFloat(values[11])- parseFloat(values[1]);
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
            values[1] = parseFloat(values[4])+ parseFloat(values[5]);
            boolValues[1]=true;
        }
        else if(values[0]!= '' && values[11]!= ''){
            values[1] = parseFloat(values[11])- parseFloat(values[0]);
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
            values[2] = parseFloat(values[0])- parseFloat(values[3]);
            boolValues[2]=true;
        }
        else if(values[3]!= '' && values[4]!= '' &&  values[6]!= ''  && values[7]!= ''){
            values[2] = (parseFloat(values[6])+ parseFloat(values[7]))-(parseFloat(values[3])+ parseFloat(values[4]));
            boolValues[2]=true;
        }
        else if(values[6]!= ''){
            values[2] = parseFloat(values[6]);
            boolValues[2]=true;
        }
        else if(values[3]!= '' && values[4]!= '' &&  values[5]!= ''  && values[11]!= ''){
            values[2] =parseFloat(values[11])-(parseFloat(values[3])+ parseFloat(values[4])+parseFloat(values[5]));
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
            values[3] = parseFloat(values[0])- parseFloat(values[2]);
            boolValues[3]=true;
        }
        else if(values[2]!= '' && values[4]!= '' &&  values[6]!= ''  && values[7]!= ''){
            values[3] = (parseFloat(values[6])+ parseFloat(values[7]))-(parseFloat(values[2])+ parseFloat(values[4]));
            boolValues[3]=true;
        }
        else if(values[2]!= '' && values[4]!= '' &&  values[5]!= ''  && values[11]!= ''){
            values[3] =parseFloat(values[11])-(parseFloat(values[2])+ parseFloat(values[4])+parseFloat(values[5]));
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
            values[4] = parseFloat(values[1])- parseFloat(values[5]);
            boolValues[4]=true;
        }
        else if(values[2]!= '' && values[3]!= '' &&  values[6]!= ''  && values[7]!= ''){
            values[4] = (parseFloat(values[6])+ parseFloat(values[7]))-(parseFloat(values[2])+ parseFloat(values[3]));
            boolValues[4]=true;
        }
        else if(values[7]!= '' && values[3]!= ''){
            values[4] = parseFloat(values[7]) - parseFloat(values[3]);
            boolValues[4]=true;
        }
        else if(values[3]!= '' && values[2]!= '' &&  values[5]!= ''  && values[11]!= ''){
            values[4] =parseFloat(values[11])-(parseFloat(values[3])+ parseFloat(values[2])+parseFloat(values[5]));
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
            values[5] = parseFloat(values[1])- parseFloat(values[4]);
            boolValues[5]=true;
        }
        else if(values[8]!= ''){
            values[5] = parseFloat(values[8]);
            boolValues[5]=true;
        }
        else if(values[10]!= ''){
            values[5] = parseFloat(values[10]);
            boolValues[5]=true;
        }
        else if(values[3]!= '' && values[4]!= '' &&  values[2]!= ''  && values[11]!= ''){
            values[5] =parseFloat(values[11])-(parseFloat(values[3])+ parseFloat(values[4])+parseFloat(values[2]));
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
            values[6] = parseFloat(values[9])- parseFloat(values[7]);
            boolValues[6]=true;
        }
        else if(values[2]!= '' && values[3]!= '' &&  values[4]!= ''  && values[7]!= ''){
            values[6] = (parseFloat(values[2])+ parseFloat(values[3]) + parseFloat(values[4]))-parseFloat(values[7]);
            boolValues[6]=true;
        }
        else if(values[2]!= ''){
            values[6] = parseFloat(values[2]);
            boolValues[6]=true;
        }
        else if(values[7]!= '' && values[8]!= '' && values[11]!= ''){
            values[6] =parseFloat(values[11])-(parseFloat(values[7])+ parseFloat(values[8]));
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
            values[7] = parseFloat(values[9])- parseFloat(values[6]);
            boolValues[7]=true;
        }
        else if(values[2]!= '' && values[3]!= '' &&  values[4]!= ''  && values[6]!= ''){
            values[7] = (parseFloat(values[2])+ parseFloat(values[3]) + parseFloat(values[4]))-parseFloat(values[6]);
            boolValues[7]=true;
        }
        else if(values[6]!= '' && values[8]!= '' && values[11]!= ''){
            values[7] =parseFloat(values[11])-(parseFloat(values[6])+ parseFloat(values[8]));
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
            values[8] = parseFloat(values[5]);
            boolValues[8]=true;
        }
        else if(values[10]!= ''){
            values[8] = parseFloat(values[10]);
            boolValues[8]=true;
        }
        else if(values[7]!= '' && values[6]!= '' && values[11]!= ''){
            values[8] =parseFloat(values[11])-(parseFloat(values[7])+ parseFloat(values[6]));
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
            values[9] = parseFloat(values[6])+ parseFloat(values[7]);
            boolValues[9]=true;
        }
        else if(values[10]!= ''&& values[11]!= ''){
            values[9] =parseFloat(values[11])-(parseFloat(values[10]));
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
            values[10] = parseFloat(values[5]);
            boolValues[10]=true;
        }
        else if(values[8]!= ''){
            values[10] = parseFloat(values[8]);
            boolValues[10]=true;
        }
        else if(values[9]!= ''&& values[11]!= ''){
            values[10] =parseFloat(values[11])-(parseFloat(values[9]));
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
            values[11] = parseFloat(values[0])+ parseFloat(values[1]);
            boolValues[11]=true;
        }
        else if(values[2]!= '' && values[3]!= '' && values[4]!= '' && values[5]!= ''){
            values[11] = parseFloat(values[2])+ parseFloat(values[3])+ parseFloat(values[4])+ parseFloat(values[5]);
            boolValues[11]=true;
        }
        else if(values[6]!= '' && values[7]!= '' && values[8]!= '' ){
            values[11] = parseFloat(values[6])+ parseFloat(values[7])+ parseFloat(values[8]);
            boolValues[11]=true;
        }
        else if(values[9]!= '' && values[10]!= ''){
            values[11] = parseFloat(values[9])+ parseFloat(values[10]);
            boolValues[11]=true;
        }
        
    }
    else{
        boolValues[11]=true;
    }
    console.log("Kész");
}




let counter = 0;
let rows = [];
document.getElementById("calculate2").addEventListener("click", Calculate2);
document.getElementById("addRow").addEventListener("click", AddRowToTable);
document.getElementById("delete2").addEventListener("click", DeleteTable2);
let body=document.getElementById("body");
function AddRowToTable(event) {

   let values = [];
    // Táblázat és tbody elemek lekérése
    let table = document.getElementById('myTable');
    let tbody = table.getElementsByTagName('tbody')[0];

    // Új sor létrehozása
    let newRow = tbody.insertRow();

    // Cellák hozzáadása a sorhoz
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);
    

    // Cellák értékeinek beállítása
    cell1.innerHTML = `<input type="number" id="q${counter}" value="">`;
   // values.push(document.getElementById(`q${counter}`).value);
    cell2.innerHTML =  `<input type="number" id="fc${counter}" value="">`;
   // values.push(document.getElementById(`fc${counter}`).value);
    cell3.innerHTML =  `<input type="number" id="vc${counter}" value="">`;
   // values.push(document.getElementById(`vc${counter}`).value);
    cell4.innerHTML =  `<input type="number" id="tc${counter}" value="">`;
    //values.push(document.getElementById(`tc${counter}`).value);
    cell5.innerHTML =  `<input type="number" id="mc${counter}" value="">`;
    //values.push(document.getElementById(`mc${counter}`).value);
    cell6.innerHTML =  `<input type="number" id="ac${counter}" value="">`;
    //values.push(document.getElementById(`ac${counter}`).value);
    cell7.innerHTML =  `<input type="number" id="afc${counter}" value="">`;
    //values.push(document.getElementById(`afc${counter}`).value);
    cell8.innerHTML =  `<input type="number" id="avc${counter}" value="">`;
   // values.push(document.getElementById(`avc${counter}`).value);
    counter+=1;
    //rows.push(values);
    //console.log(rows.length);
    //console.log(rows[counter-1].length);
    event.preventDefault();
  }

  function Calculate2(event){
    boolValues = []
    for(let i = 0; i < counter; i++){
        let a=[];
        for(let j = 0; j < 8; j++){
            a.push(false);
        }
       boolValues.push(a);
    }
    let ready=false;
        for(let i = 0; i<counter; i++){
            let values=[];
            values[0]=(document.getElementById(`q${i}`).value);
            values[1]=(document.getElementById(`fc${i}`).value);
            values[2]=(document.getElementById(`vc${i}`).value);
            values[3]=(document.getElementById(`tc${i}`).value);
            values[4]=(document.getElementById(`mc${i}`).value);
            values[5]=(document.getElementById(`ac${i}`).value);
            values[6]=(document.getElementById(`afc${i}`).value);
            values[7]=(document.getElementById(`avc${i}`).value);
            rows.push(values);
           
           
            
        }
        while(!ready){
        for(let i=0; i<counter; i++){
            if(i === 0){
                boolValues[i][0]=true;
                if(rows[i][3]!==''){
                    rows[i][1] = rows[i][3];
                    boolValues[i][1]=true;
                }
               
                else if(rows.length>1 && rows[i+1][6]!==''){
                    rows[i][1] = parseFloat(rows[i][0]) * parseFloat(rows[i+1][6]);
                    boolValues[i][1]=true;
                }

                else if (rows.length>1 && rows[i+1][3]!=='' && rows[i+1][4]!==''){
                    rows[i][1] = parseFloat(rows[i+1][3])-parseFloat(rows[i+1][4]);
                    boolValues[i][1]=true;
                }
                

                rows[0][2] = '0';
                if( rows[i][1]!==''){
                    rows[i][3] = rows[i][1];
                    boolValues[i][3]=true;
                }
                else if(rows[i+1][3]!=='' &&  rows[i+1][4]!==''){
                    rows[i][3] = parseFloat(rows[i+1][3]) - parseFloat(rows[i+1][4]);
                    boolValues[i][3]=true;
                }
                rows[0][4] = '0';
                rows[0][5] = '0';
                rows[0][6] = '0';
                rows[0][7] = '0';
                boolValues[i][2]=true;
                boolValues[i][4]=true;
                boolValues[i][5]=true;
                boolValues[i][6]=true;
                boolValues[i][7]=true;
                
            }
           
            else{
               
                boolValues[i][0]=true;
                rows[i][1] = rows[0][1];
                boolValues[i][1]=true;

                if(rows[i][3]!==''){
                    rows[i][2]=parseFloat(rows[i][3])-parseFloat(rows[i][1])
                    boolValues[i][2]=true;
                }
                else if(rows[i][7]!==''){
                    rows[i][2]=parseFloat(rows[i][0])*parseFloat(rows[i][7])
                    boolValues[i][2]=true;
                }


                if(rows[i][2]!==''){
                    rows[i][3]=parseFloat(rows[i][1])+parseFloat(rows[i][2]);
                    boolValues[i][3]=true;
                }
                else if(rows[i][4]!==''){
                    rows[i][3]=parseFloat(rows[i-1][3]) + (parseFloat(rows[i][4])*(parseFloat(rows[i][0])-parseFloat(rows[i-1][0])));
                    boolValues[i][3]=true;
                }
                else if(rows[i][5]!==''){
                    rows[i][3]=parseFloat(rows[i][5]) * parseFloat(rows[i][0])
                    boolValues[i][3]=true;
                }
                else if(i+1<counter && rows[i+1][4]!=="" && rows[i+1][3]!==""){
                    rows[i][3]=parseFloat(rows[i+1][3]) - (parseFloat(rows[i+1][4])*(parseFloat(rows[i+1][0])-parseFloat(rows[i][0])));
                    boolValues[i][3]=true;
                }


                if(rows[i][3]!==''){
                    rows[i][4]=(parseFloat(rows[i][3])-parseFloat(rows[i-1][3])) / (parseFloat(rows[i][0])-parseFloat(rows[i-1][0]));
                    boolValues[i][4]=true;
                }
                if(rows[i][3]!==''){
                    rows[i][5]=parseFloat(rows[i][3]) / parseFloat(rows[i][0]);
                    boolValues[i][5]=true;
                }
                if(rows[i][1]!==''){
                    rows[i][6]=parseFloat(rows[i][1]) / parseFloat(rows[i][0]);
                    boolValues[i][6]=true;
                }
                if(rows[i][2]!==''){
                    rows[i][7]=parseFloat(rows[i][2]) / parseFloat(rows[i][0])
                    boolValues[i][7]=true;
                }
               
                
            }
            
        }
        let l=true;
        for(let i = 0; i<counter; i++){
            for(let j = 0; j<8; j++){
                if(boolValues[i][j]===false){
                   l=false;
                }
            }
            
        }
        if(l)
            ready=true;
       
            
    }
        

            for(let i=0; i<counter; i++){
                document.getElementById(`q${i}`).value=parseFloat(rows[i][0]);
                document.getElementById(`fc${i}`).value=parseFloat(rows[i][1]);
                document.getElementById(`vc${i}`).value=parseFloat(rows[i][2]);
                document.getElementById(`tc${i}`).value=parseFloat(rows[i][3]);
                document.getElementById(`mc${i}`).value=parseFloat(rows[i][4]);
                document.getElementById(`ac${i}`).value=parseFloat(rows[i][5]);
                document.getElementById(`afc${i}`).value=parseFloat(rows[i][6]);
                document.getElementById(`avc${i}`).value=parseFloat(rows[i][7]);
            }
        
            event.preventDefault();
    }

  function DeleteTable2(event){
     counter = 0;
     rows = [];
     body.innerHTML="";
     event.preventDefault();
  }


  