addEventListener('load', () => {
   
})
//TÍPUSOK
class element
{
    constructor(time, type, shape, rotation, mirrored)
    {
        this.time = time;
        this.type = type;
        this.shape = shape;
        this.rotation = rotation;
        this.mirrored = mirrored;
    }
}
//TÍPUSOK TÖMBJE
const elements = [
    new element(2,'water',[1,1,1,0,0,0,0,0,0],0,false),
    new element(2,'town',[1,1,1,0,0,0,0,0,0],0,false),
    new element(1,'forest',[1,1,0,0,1,1,0,0,0],0,false),
    new element(2,'farm',[1,1,1,0,0,1,0,0,0],0,false),
    new element(2,'forest',[1,1,1,0,0,1,0,0,0],0,false),
    new element(2,'town',[1,1,1,0,1,0,0,0,0],0,false),
    new element(2,'farm',[1,1,1,0,1,0,0,0,0],0,false),
    new element(1,'town',[1,1,0,1,0,0,0,0,0],0,false),
    new element(1,'town',[1,1,1,1,1,0,0,0,0],0,false),
    new element(1,'farm',[1,1,0,0,1,1,0,0,0],0,false),
    new element(1,'farm',[0,1,0,1,1,1,0,1,0],0,false),
    new element(2,'water',[1,1,1,1,0,0,1,0,0],0,false),
    new element(2,'water',[1,0,0,1,1,1,1,0,0],0,false),
    new element(2,'forest',[1,1,0,0,1,1,0,0,1],0,false),
    new element(2,'forest',[1,1,0,0,1,1,0,0,0],0,false),
    new element(2,'water',[1,1,0,1,1,0,0,0,0],0,false)
]
//KÜLDETÉSEK
class mission{
    constructor(név, leírás){
        this.név=név;
        this.leírás=leírás;
    }
}
//KÜLDETÉSEK TÖMBJE
const missions = [

    new mission("Az erdő széle","A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz."),
    new mission("Álmos-völgy","Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz."),
    new mission("Krumpliöntözés","A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz."),
    new mission("Határvidék","Minden teli sorért vagy oszlopért 6-6 pontot kapsz."),
    new mission("Fasor","A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért."),
    new mission("Gazdag város", "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz."),
    new mission("Öntözőcsatorna","Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte."),
    new mission("Mágusok völgye","A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz."),
    new mission("Üres telek","A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz."),
    new mission("Sorház","A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz."),
    new mission("Páratlan silók","Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz."),
    new mission("Gazdag vidék","Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.")
]

//PÁLYA KIRAJZOLÁS
let boardImages= [];
for(let i = 0; i<121;i++){
    if(i==12 || i==41 || i ==58 || i==97 || i==104){
        boardImages[i]="Hegyvidék";
    }
    else{
        boardImages[i]="SimaTerület";
    }
}
    
//ALAP ADATOK
let összIdo=0;
let összPont=0;
let tavaszPont=0;
let nyarPont=0;
let oszPont=0;
let telPont=0;
const table = document.getElementById('myTable');
const cells = table.getElementsByTagName('td');


     

//MEGKEVERNI A TÍPUSOKAT
function mix(array){
    const randomelements = [];
    let counter=0;
    while (array.length > 0) {
      // Véletlenszerű index kiválasztása az eredeti tömbből
      const randomIndex = Math.floor(Math.random() * array.length);
    
      // Az elem kiválasztása és hozzáadása az új tömbhöz
      randomelements.push(array[randomIndex]);
    
      // Kiválasztott elem eltávolítása az eredeti tömbből
      if(counter!=0){
        array.splice(randomIndex, 1);
      }
      counter++;
     
    }
    return randomelements;
   
}


//RANDOM 4 KÜLDETÉS
function randomMissions(array){
    const randommissions=[];
    let i = 0;
    while(i<4){
        const randomIndex = Math.floor(Math.random() * array.length);
    
        // Az elem kiválasztása és hozzáadása az új tömbhöz
        randommissions.push(array[randomIndex]);
      
        // Kiválasztott elem eltávolítása az eredeti tömbből
        array.splice(randomIndex, 1);
        i++;
    }
    return randommissions;
}

//ADATOK A HTML-BŐL
let captionTable=document.getElementById(caption1);
let startElements=mix(elements);
let randommissions=randomMissions(missions)
let missionPoint= [];
missionPoint[0]=0;
missionPoint[1]=0;
missionPoint[2]=0;
missionPoint[3]=0;

let osszPont=document.getElementById(OsszPont);
let row1=document.getElementById(sor1);
let row2=document.getElementById(sor2);
let row3=document.getElementById(sor3);
let row4=document.getElementById(missionRow1);
let row5=document.getElementById(missionRow2);

let missionPoint1=document.getElementById(mission1);
let missionPoint2=document.getElementById(mission2);
let missionPoint3=document.getElementById(mission3);
let missionPoint4=document.getElementById(mission4);


let cella=[];
cella[0]=sor1.querySelector('td:nth-child(1)')
cella[1]=sor1.querySelector('td:nth-child(2)')
cella[2]=sor1.querySelector('td:nth-child(3)')
cella[3]=sor2.querySelector('td:nth-child(1)')
cella[4]=sor2.querySelector('td:nth-child(2)')
cella[5]=sor2.querySelector('td:nth-child(3)')
cella[6]=sor3.querySelector('td:nth-child(1)')
cella[7]=sor3.querySelector('td:nth-child(2)')
cella[8]=sor3.querySelector('td:nth-child(3)')

let cella2=[];
cella2[0]=missionRow1.querySelector('td:nth-child(1)')
cella2[1]=missionRow1.querySelector('td:nth-child(2)')
cella2[2]=missionRow2.querySelector('td:nth-child(1)')
cella2[3]=missionRow2.querySelector('td:nth-child(2)')


let ready=startElements[0];
let counter=0;
let ido=0;
let evszakIdo=document.getElementById(hatralevoIdo);
let jelenlegiEvszak=document.getElementById(JelenlegiEvszak);
let tavaszDoboz=document.getElementById(tavasz);
let nyarDoboz=document.getElementById(nyar);
let oszDoboz=document.getElementById(osz);
let telDoboz=document.getElementById(tel);
let aPoint=document.getElementById(A);
let bPoint=document.getElementById(B);
let cPoint=document.getElementById(C);
let dPoint=document.getElementById(D);




//ALAKZAT KIRAJZOLÁSA
function drawElements(array){
   
    for(let i = 0; i<9; i++){
        x=array; //startElements
        if(x.shape[i]==1){
            if(x.type=='forest'){
            cella[i].innerHTML='<img src="./../Képek/Erdő.png" width="100%" alt="">'
            }
            if(x.type=='farm'){
            cella[i].innerHTML='<img src="./../Képek/Farm.png" width="100%" alt="">'
            }
            if(x.type=='water'){
                cella[i].innerHTML='<img src="./../Képek/Víz.png" width="100%" alt="">'
            }
            if(x.type=='town'){
                cella[i].innerHTML='<img src="./../Képek/Ház.png" width="100%" alt="">'
            }
            
        }
        else{
            cella[i].innerHTML="";
        }
        //y=x.shape[i];
}
caption1.innerHTML=`${array.time} 🕒`;

}
drawElements(ready);


//KÜLDETÉSEK KIRAJZOLÁSA
function drawMissions(array){
    for(let i=0; i<4; i++){
        switch (array[i].név){
            case "Az erdő széle":
                    cella2[i].innerHTML='<img src="./../Képek/Azerdőszéle.png" width="100%" alt="">'

                    break;
            case "Álmos-völgy":
                    cella2[i].innerHTML='<img src="./../Képek/Álmosvölgy.png" width="100%" alt="">'
                    break;
            case "Krumpliöntözés":
                    cella2[i].innerHTML='<img src="./../Képek/Krumpliöntözés.png" width="100%" alt="">'
                    break;
            case "Határvidék":
                    cella2[i].innerHTML='<img src="./../Képek/Határvidék.png" width="100%" alt="">'
                    break;
            case "Fasor":
                    cella2[i].innerHTML='<img src="./../Képek/Fasor.png" width="100%" alt="">'
                    break;
            case "Gazdag város":
                    cella2[i].innerHTML='<img src="./../Képek/Gazdagváros.png" width="100%" alt="">'
                    break;
            case "Öntözőcsatorna":
                    cella2[i].innerHTML='<img src="./../Képek/Öntözőcsatorna.png" width="100%" alt="">'
                    break;
            case "Mágusok völgye":
                    cella2[i].innerHTML='<img src="./../Képek/Mágusokvölgye.png" width="100%" alt="">'
                    break;
            case "Üres telek":
                    cella2[i].innerHTML='<img src="./../Képek/Ürestelek.png" width="100%" alt="">'
                    break;
            case "Sorház":
                    cella2[i].innerHTML='<img src="./../Képek/Sorház.png" width="100%" alt="">'
                    break;
            case "Páratlan silók":
                    cella2[i].innerHTML='<img src="./../Képek/Páratlansilók.png" width="100%" alt="">'
                    break;
            case "Gazdag vidék":
                    cella2[i].innerHTML='<img src="./../Képek/Gazdagvidék.png" width="100%" alt="">'
                    break;
        }
    }
   
   
}

drawMissions(randommissions);


let working=true;
let computedStyle;
let backgroundImage;
console.log(ready.shape);

//EVENT MIKOR CELLA FÖLÉ VISZEM AZ EGERET
if(working){
table.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'TD') {
        let rowindex=event.target.parentNode.rowIndex;
        let cellindex=event.target.cellIndex;
        let l=true;
        
        if(cellindex==9 && (ready.shape[2]==1 || ready.shape[5]==1 || ready.shape[8]==1)){
            l=false;
        }
        if(rowindex==9 && (ready.shape[6]==1 || ready.shape[7]==1 || ready.shape[8]==1)){
            l=false;
        }
        if(cellindex==10 && (ready.shape[1]==1 || ready.shape[4]==1 || ready.shape[7]==1)){
            l=false;
        }
        if(rowindex==10 && (ready.shape[3]==1 || ready.shape[4]==1 || ready.shape[5]==1)){
            l=false;
        }


        if(l){
            for(let i = rowindex; i<rowindex+3; i++){
                for(let j = cellindex; j<cellindex+3; j++){
                    if((ready.shape[(i-rowindex)*3+(j-cellindex)]==1 && boardImages[i*11+j]!="SimaTerület")){
                        l=false;
                        break;
                    
                    }
                    if(!l){break;}
                    
                }
                if(!l){break;}
                
            }
        }

        if(!l){
            computedStyle=getComputedStyle(event.target);
            backgroundImage = computedStyle.getPropertyValue('background-image');
            event.target.style.backgroundImage = 'initial';
            event.target.style.backgroundColor='red'
        }
        else{
            

            computedStyle=getComputedStyle(event.target);
            backgroundImage = computedStyle.getPropertyValue('background-image');
            event.target.style.backgroundImage = 'initial';
            event.target.style.backgroundColor='lightgreen'

            }
        
        }
   } )};

//EVENT AMIKOR LEVISZEM AZ EGERET A CELLÉRÓL
if(working){
table.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'TD') {
        event.target.style.backgroundColor = '';
        event.target.style.backgroundImage=backgroundImage;


    }
})};

//SZOMSZÉDOS CELLÁK MEGHATÁROZÁSA
function getNeighbors(cell){
    const neighbors=[];
    const rowIndex=cell.parentNode.rowIndex;
    const cellIndex=cell.cellIndex;
    for (let i = rowIndex ; i < rowIndex + 3; i++) {
        for (let j = cellIndex; j < cellIndex + 3; j++) {

            const neighbor = table.rows[i].cells[j];  
            neighbors.push(neighbor);
            if(j+1==11){break;}
             
        }
        if(i+1==11){break;}
       
    }
    return neighbors;
}


//EVENT AMIKOR RÁKATTINTOK EGY CELLÁRA
if(working){
    table.addEventListener('click', (event) => {
        let cells=[];
        if (event.target.tagName === 'TD') {

            let rowindex=event.target.parentNode.rowIndex;
            let cellindex=event.target.cellIndex;
            let l = true;

            if(cellindex==9 && (ready.shape[2]==1 || ready.shape[5]==1 || ready.shape[8]==1)){
                l=false;
            }
            if(rowindex==9 && (ready.shape[6]==1 || ready.shape[7]==1 || ready.shape[8]==1)){
                l=false;
            }
            if(cellindex==10 && (ready.shape[1]==1 || ready.shape[4]==1 || ready.shape[7]==1)){
                l=false;
            }
            if(rowindex==10 && (ready.shape[3]==1 || ready.shape[4]==1 || ready.shape[5]==1)){
                l=false;
            }
            
            
       
             if(l){ 
                for(let i = rowindex; i<rowindex+3; i++){
                    for(let j = cellindex; j<cellindex+3; j++){
                       
                       
                        if(ready.shape[(i-rowindex)*3+(j-cellindex)]==1 && boardImages[i*11+j]!="SimaTerület"){
                            l=false;
                            break;
                           
                        }
                        if(!l){break;}
                        
                    }
                    if(!l){break;}
                    
                }
            }

                
                if(l){

                const neighbors=getNeighbors(event.target);
                let k = 0;
                for( const neighbor of neighbors){
                    if(ready.shape[k]==1){
                        switch(ready.type){
                            case "water":
                                neighbor.style.backgroundImage='url("./../Képek/Víz.png")';
                                if(ready.shape[0]==0){}
                                else{backgroundImage='url("./../Képek/Víz.png")';}
                                break;
                            case "farm":
                                neighbor.style.backgroundImage='url("./../Képek/Farm.png")';
                                if(ready.shape[0]==0){}
                                else{backgroundImage='url("./../Képek/Farm.png")';}
                                break;
                            case "forest":
                                neighbor.style.backgroundImage='url("./../Képek/Erdő.png")';
                                if(ready.shape[0]==0){}
                                else{backgroundImage='url("./../Képek/Erdő.png")';}
                                break;
                            case "town":
                                neighbor.style.backgroundImage='url("./../Képek/Ház.png")';
                                if(ready.shape[0]==0){}
                                else{backgroundImage='url("./../Képek/Ház.png")';}
                                break;
                        }
                        
                    }
                    k++;
                    
                }
               
                for(let i = rowindex; i<rowindex+3; i++){
                    for(let j = cellindex; j<cellindex+3; j++){
                       if(ready.shape[(i-rowindex)*3+(j-cellindex)]==1){
                        switch(ready.type){
                            case "water":
                                boardImages[i*11+j]="Víz";
                                break;
                            case "farm":
                                boardImages[i*11+j]="Farm";
                                break;
                            case "forest":
                                boardImages[i*11+j]="Erdő";
                                break;
                            case "town":
                                boardImages[i*11+j]="Ház";
                                break;
                        }
                        
                       }
                       
                    }
                }
            
                }
                if(l){
                    
                    
                    
                    let evszak=Math.floor(ido/7); 
                    let point=0;
                    
                    for(let i = 0; i<4; i++){
                        let calculate=false;
                        switch(i){
                            case 0:
                                if(evszak==0 || evszak==3){
                                    calculate=true;
                                }
                                break;
                                case 1:
                                if(evszak==0 || evszak==1){
                                    calculate=true;
                                }
                                break;
                                case 2:
                                if(evszak==1 || evszak==2){
                                    calculate=true;
                                }
                                break;
                                case 3:
                                if(evszak==2 || evszak==3){
                                    calculate=true;
                                }
                                break;
                                
                        }
                       
                       
                        if(calculate){
                            switch(randommissions[i].név){
                                case "Az erdő széle":
                                    point+=azErdoSzele(boardImages);
                                    missionPoint[i]=azErdoSzele(boardImages);
                                        break;
                                case "Álmos-völgy":
                                    point+=almosVolgy(boardImages);
                                    missionPoint[i]=almosVolgy(boardImages);
                                        break;
                                case "Krumpliöntözés":
                                    point+=krumpliOntozes(boardImages);
                                    missionPoint[i]=krumpliOntozes(boardImages);
                                        break;
                                case "Határvidék":
                                    point+=hatarVidek(boardImages);
                                    missionPoint[i]=hatarVidek(boardImages);
                                        break;
                                case "Fasor":
                                    point+=faSor(boardImages);
                                    missionPoint[i]=faSor(boardImages);
                                        break;
                                case "Gazdag város":
                                    point+=gazdagVaros(boardImages);
                                    missionPoint[i]=gazdagVaros(boardImages);
                                        break;
                                case "Öntözőcsatorna":
                                    point+=ontozoCsatorna(boardImages);
                                    missionPoint[i]=ontozoCsatorna(boardImages);
                                        break;
                                case "Mágusok völgye":
                                    point+=magusokVolgye(boardImages);
                                    missionPoint[i]=magusokVolgye(boardImages);
                                        break;
                                case "Üres telek":
                                    point+=uresTelek(boardImages);
                                    missionPoint[i]=uresTelek(boardImages);
                                        break;
                                case "Sorház":
                                    point+=sorHaz(boardImages);
                                    missionPoint[i]=sorHaz(boardImages);
                                        break;
                                case "Páratlan silók":
                                    point+=paratlanSilok(boardImages);
                                    missionPoint[i]=paratlanSilok(boardImages);
                                        break;
                                case "Gazdag vidék":
                                    point+=gazdagVidek(boardImages);
                                    missionPoint[i]=gazdagVidek(boardImages);
                                        break;
                                }
                        }
                    }
                    
                    
                    switch(evszak){
                        case 0:

                            tavaszPont=point;
                            tavasz.innerHTML=`Tavasz: <br> ${tavaszPont} pont`
                            A.innerHTML=`A (${missionPoint[0]} pont)`
                            B.innerHTML=`B (${missionPoint[1]} pont)`
                            break;
                        case 1:
                            nyarPont=point;
                            nyar.innerHTML=`Nyár: <br> ${nyarPont} pont`
                            C.innerHTML=`C (${missionPoint[2]} pont)`
                            B.innerHTML=`B (${missionPoint[1]} pont)`
                           
                            break;
                        case 2:
                            oszPont=point;
                            osz.innerHTML=`Ősz: <br> ${oszPont} pont`
                            C.innerHTML=`C (${missionPoint[2]} pont)`
                            D.innerHTML=`D (${missionPoint[3]} pont)`
                           
                            break;
                        case 3:
                            telPont=point;
                            tel.innerHTML=`Tél: <br> ${telPont} pont`
                            A.innerHTML=`A (${missionPoint[0]} pont)`
                            D.innerHTML=`D (${missionPoint[3]} pont)`
                            
                            break;
                    }

                    összPont=tavaszPont+nyarPont+oszPont+telPont+hegyBekerites(boardImages);
                    console.log(hegyBekerites(boardImages));
                    OsszPont.innerHTML=`Összpont: ${összPont} pont`;
                    
                    counter++;
                    ido+=ready.time;
                    if(ido<28){
                        hatralevoIdo.innerHTML=`Évszakból hátralevő idő: ${7-(ido%7)}/7`;
                        evszak=Math.floor(ido/7); 
                        switch(evszak){
                            case 0:
                                JelenlegiEvszak.innerHTML="Jelenlegi Évszak: Tavasz (A/B)"
                                break;
                            case 1:
                                JelenlegiEvszak.innerHTML="Jelenlegi Évszak: Nyár (B/C)"
                                A.classList.remove("aktiv");
                                C.classList.add("aktiv");
                                break;
                            case 2:
                                JelenlegiEvszak.innerHTML="Jelenlegi Évszak: Ősz (C/D)"
                                D.classList.add("aktiv");
                                B.classList.remove("aktiv");
                                break;
                            case 3:
                                JelenlegiEvszak.innerHTML="Jelenlegi Évszak: Tél (D/A)"
                                A.classList.add("aktiv");
                                C.classList.remove("aktiv");
                                break;
                        }
                        
                       
                            ready=startElements[counter];
                            drawElements(ready);
                            console.log(startElements);
                    }
                    else{
                        hatralevoIdo.innerHTML=`Vége a játéknak`;
                    }
                   
                } 
                }                     
        }   
    )};





//FORGATÁS MŰVELET
    function forgat(array){
        let segedarray=[];
        if(array[0]==1){
            segedarray[2]=1;
        }
        if(array[0]==0){
            segedarray[2]=0;
        }
        if(array[1]==1){
            segedarray[5]=1;
        }
        if(array[1]==0){
            segedarray[5]=0;
        }
        if(array[2]==1){
            segedarray[8]=1;
        }
        if(array[2]==0){
            segedarray[8]=0;
        }
        if(array[3]==1){
            segedarray[1]=1;
        }
        if(array[3]==0){
            segedarray[1]=0;
        }
        if(array[4]==1){
            segedarray[4]=1;
        }
        if(array[4]==0){
            segedarray[4]=0;
        }

        if(array[5]==1){
            segedarray[7]=1;
        }
        if(array[5]==0){
            segedarray[7]=0;
        }
        if(array[6]==1){
            segedarray[0]=1;
        }
        if(array[6]==0){
            segedarray[0]=0;
        }
        if(array[7]==1){
            segedarray[3]=1;
        }
        if(array[7]==0){
            segedarray[3]=0;
        }
        if(array[8]==1){
            segedarray[6]=1;
        }
        if(array[8]==0){
            segedarray[6]=0;
        }
        
        return segedarray;
       
    }



    Forgat.addEventListener('click',()=>{
        
        ready.shape=forgat(ready.shape);
        drawElements(ready);
       
    })

//TÜKRÖZÉS MŰVELET
    function tukroz(array){
        let segedarray=[];
        if(array[0]==1){
            segedarray[2]=1;
        }
        if(array[0]==0){
            segedarray[2]=0;
        }
        if(array[1]==1){
            segedarray[1]=1;
        }
        if(array[1]==0){
            segedarray[1]=0;
        }
        if(array[2]==1){
            segedarray[0]=1;
        }
        if(array[2]==0){
            segedarray[0]=0;
        }
        if(array[3]==1){
            segedarray[5]=1;
        }
        if(array[3]==0){
            segedarray[5]=0;
        }
        if(array[4]==1){
            segedarray[4]=1;
        }
        if(array[4]==0){
            segedarray[4]=0;
        }

        if(array[5]==1){
            segedarray[3]=1;
        }
        if(array[5]==0){
            segedarray[3]=0;
        }
        if(array[6]==1){
            segedarray[8]=1;
        }
        if(array[6]==0){
            segedarray[8]=0;
        }
        if(array[7]==1){
            segedarray[7]=1;
        }
        if(array[7]==0){
            segedarray[7]=0;
        }
        if(array[8]==1){
            segedarray[6]=1;
        }
        if(array[8]==0){
            segedarray[6]=0;
        }
        
        return segedarray;
    }

    Tukroz.addEventListener('click',()=>{
        
        ready.shape=tukroz(ready.shape);
        drawElements(ready);
       
    })
    
    

//KÜLDETÉSEK KISZÁMOLÁSA
function azErdoSzele(array){
    let point=0;
    for(let i = 0; i< 11; i++){
        for(let j = 0; j< 11; j++){
            if(i==0 || j==0 || i==10 || j==10){
               if(array[i*11+j]=="Erdő"){
                point++;
               } 
            }
        }
    }
    
    return point;
}
function almosVolgy(array){
    let point=0;
    for(let i = 0; i< 11; i++){
        let db=0;
        for(let j = 0; j< 11; j++){
            if(array[i*11+j]=="Erdő"){
                db++;
            }
        }
        if(db==3){
            point+=4;
        }
    }
    
    return point;
}
function krumpliOntozes(array){
    let point=0;
    for(let i = 0; i< 11; i++){
        for(let j = 0; j< 11; j++){
            if(array[i*11+j]=="Farm"){
                
                if(i-1!=-1){
                    if(array[(i-1)*11+j]=="Víz"){
                        point+=2;
                    }
                }
                if(j+1!=11){
                    if(array[i*11+(j+1)]=="Víz"){
                        point+=2;
                    }
                }
                if(j-1!=-1){
                    if(array[i*11+(j-1)]=="Víz"){
                        point+=2;
                    }
                }
                if(i+1!=11){
                    if(array[(i+1)*11+j]=="Víz"){
                        point+=2;
                    }
                }        
                
            }
        }
    }
   
    return point;
}

function hatarVidek(array){
    let point=0;
    for(let i = 0; i< 11; i++){
        let counter=0;
        for(let j = 0; j< 11; j++){
            if(array[i*11+j]!="SimaTerület"){
                counter++;
            }
        }
        if(counter==11){
            point+=6;
        }
    }
    for(let i = 0; i< 11; i++){
        let counter=0;
        for(let j = 0; j< 11; j++){
            if(array[i+(j*11)]!="SimaTerület"){
                counter++;
            }
        }
        if(counter==11){
            point+=6;
        }
    }
    
    return point;
}

function faSor(array){
    let point=0;
    let maxSor=[];
    let maximum;
    for(let i = 0; i< 11; i++){
        let max=0;
        let still=false;
        let counter=0;
        for(let j = 0; j< 11; j++){
            if(!still){
                if(array[i+(j*11)]=="Erdő"){
                    still=true;
                    counter++;
                }
            }
            else if(still){
                if(array[i+(j*11)]=="Erdő"){
                    counter++;
                }
                else{
                    if(counter>max){
                        max=counter;
                    }
                    counter=0;
                    still=false;
                }
            }
        }
        if(still){
            if(counter>max){
                max=counter;
            }
        }
        maxSor.push(max);
    }
    maximum=maxSor[0];
    for(let i=1; i<maxSor.length;i++){
        if(maxSor[i]>maximum){
            maximum=maxSor[i];
        }
    }
    point=maximum*2;
    
    return point;

}
function gazdagVaros(array){
    let point=0;
    for(let i = 0; i< 11; i++){
        for(let j = 0; j< 11; j++){
            if(array[i*11+j]=="Ház"){
                let counter=[];
                if(i-1!=-1){
                    if((!counter.includes(array[(i-1)*11+j]))&& array[(i-1)*11+j]!="SimaTerület"){
                        counter.push(array[(i-1)*11+j]);
                    }
                }
                if(j+1!=11){
                    if((!counter.includes(array[i*11+j+1])) && array[i*11+j+1]!="SimaTerület"){
                        counter.push(array[i*11+j+1]);
                    }
                }
                if(j-1!=-1){
                    if((!counter.includes(array[i*11+j-1])) && array[i*11+j-1]!="SimaTerület" ){
                        counter.push(array[i*11+j-1]);
                    }
                }
                if(i+1!=11){
                    if((!counter.includes(array[(i+1)*11+j])) && array[(i+1)*11+j]!="SimaTerület"){
                        counter.push(array[(i+1)*11+j]);
                    }
                }        
                if(counter.length>2){
                    point+=3;
                }
            }
        }
    }
    
    return point;

}

function ontozoCsatorna(array){
    let point = 0;
    for(let i = 0; i< 11; i++){
        let countFarm=0;
        let countViz=0;
        for(let j = 0; j< 11; j++){
            if(array[i+j*11]=="Víz"){
                countViz++;
            }
            if(array[i+j*11]=="Farm"){
                countFarm++;
            }
        }
        if(countFarm!=0 && countFarm==countViz){
            point+=4;
        }
    }
    
    return point;

}
function magusokVolgye(array){
    let point = 0;

    for(let i = 0; i< 11; i++){
        for(let j = 0; j< 11; j++){
            if(array[i*11+j]=="Víz"){
                if(i-1!=-1){
                    if(array[(i-1)*11+j]=="Hegyvidék"){
                        point+=3;
                    }
                }
                if(j+1!=11){
                    if(array[i*11+(j+1)]=="Hegyvidék"){
                        point+=3;
                    }
                }
                if(j-1!=-1){
                    if(array[i*11+(j-1)]=="Hegyvidék"){
                        point+=3;
                    }
                }
                if(i+1!=11){
                    if(array[(i+1)*11+j]=="Hegyvidék"){
                        point+=3;
                    }
                }        
            }
        }
    }
    
    return point;

}

function uresTelek(array){
    let point=0;
    for(let i = 0; i< 11; i++){
        for(let j = 0; j< 11; j++){
            if(array[i*11+j]=="Ház"){
                if(i-1!=-1){
                    if(array[(i-1)*11+j]=="SimaTerület"){
                        point+=2;
                    }
                }
                if(j+1!=11){
                    if(array[i*11+(j+1)]=="SimaTerület"){
                        point+=2;
                    }
                }
                if(j-1!=-1){
                    if(array[i*11+(j-1)]=="SimaTerület"){
                        point+=2;
                    }
                }
                if(i+1!=11){
                    if(array[(i+1)*11+j]=="SimaTerület"){
                        point+=2;
                    }
                }        
            }
        }
    }
    
    return point;
}

function sorHaz(array){
    let point=0;
    let maxSor=[];
    let maximum;
    for(let i = 0; i< 11; i++){
        let max=0;
        let still=false;
        let counter=0;
        for(let j = 0; j< 11; j++){
            if(!still){
                if(array[i*11+j]=="Ház"){
                    still=true;
                    counter++;
                }
            }
            else if(still){
                if(array[i*11+j]=="Ház"){
                    counter++;
                }
                else{
                    if(counter>max){
                        max=counter;
                    }
                    counter=0;
                    still=false;
                }
            }
        }
        if(still){
            if(counter>max){
                max=counter;
            }
        }
        maxSor.push(max);
    }
    maximum=maxSor[0];
    for(let i=1; i<maxSor.length;i++){
        if(maxSor[i]>maximum){
            maximum=maxSor[i];
        }
    }
    for(let i=0; i<maxSor.length;i++){
        if(maxSor[i]==maximum){
            point+=maximum*2;
        }
    }

    
   
    return point;

}

function paratlanSilok(array){
    let point=0;
    for(let i = 0; i< 11; i+=2){
        let count=0;
        for(let j = 0; j< 11; j++){
            if(array[i+j*11]!="SimaTerület"){
                count++;
            }
        }
        if(count==11){
            point+=10;
        }
    }
    
    return point;
}

function gazdagVidek(array){
    let point=0;
    for(let i = 0; i< 11; i++){
        let counter=[];
        for(let j = 0; j< 11; j++){
            if((!counter.includes(array[i*11+j]))&& array[i*11+j]!="SimaTerület"){
                counter.push(array[i*11+j]);
            }
        }
        if(counter.length>4){
            point+=4;
        }
    }
    
    return point;
}

function hegyBekerites(array){
    let point=0;
    if(array[11]!="SimaTerület" && array[1]!="SimaTerület" && array[23]!="SimaTerület" && array[13]!="SimaTerület"){
        point+=1;
    }
    if(array[42]!="SimaTerület" && array[40]!="SimaTerület" && array[30]!="SimaTerület" && array[52]!="SimaTerület"){
        point+=1;
    }
    if(array[47]!="SimaTerület" && array[57]!="SimaTerület" && array[59]!="SimaTerület" && array[69]!="SimaTerület"){
        point+=1;
    }
    if(array[86]!="SimaTerület" && array[96]!="SimaTerület" && array[98]!="SimaTerület" && array[108]!="SimaTerület"){
        point+=1;
    }
    if(array[103]!="SimaTerület" && array[105]!="SimaTerület" && array[93]!="SimaTerület" && array[115]!="SimaTerület"){
        point+=1;
    }
    return point;
}






   

    

















    
