addEventListener('load',  () => {
    
});
//Gyümölcs halom képek
const imageUrls = [
    './images/apple_group.png',
    './images/banana_group.png',
    './images/cherry_group.png',
    './images/lemon_group.png',
    './images/melon_group.png',
    './images/orange_group.png',
    './images/peach_group.png',
    './images/pineapple_group.png',
    './images/plum_group.png',
    './images/strawberry_group.png'
];
//Egyes gyümölcsök képei
const imageUrlsOne = [
    './images/apple_1.png',
    './images/banana_1.png',
    './images/cherry_1.png',
    './images/lemon_1.png',
    './images/melon_1.png',
    './images/orange_1.png',
    './images/peach_1.png',
    './images/pineapple_1.png',
    './images/plum_1.png',
    './images/strawberry_1.png'
];
//Képek megjelenítése
const divIds = ['bot1', 'bot2', 'bot3', 'bot4', 'bot5', 'bot6'];

//Random számok generálása
function generateRandomNumbers() {
    let numbers = [];
    while (numbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
            
        }
    }
    return numbers;
}
//Random gyümölcsök tömbje
let randomNumber = generateRandomNumbers();
let picturesGroup = []
let pictures1 = []

//Képek betöltése a tömbbe
function pushPictures() {

    for (let i = 0; i < randomNumber.length; i++) {
        picturesGroup.push(imageUrls[randomNumber[i]]);
        pictures1.push(imageUrlsOne[randomNumber[i]]);
    }
}
pushPictures();

//Képek megjelenítése a div-ekben
for (let i = 0; i < divIds.length; i++) {
    document.getElementById(divIds[i]).style.backgroundImage = `url("${picturesGroup[i]}")`;
    document.getElementById(divIds[i]).style.backgroundSize = `contain`;
    document.getElementById(divIds[i]).style.backgroundRepeat = `no-repeat`;
    document.getElementById(divIds[i]).style.backgroundPosition = `center`;
}

//Kattintások státusza
let stat =[];
for(let i=0; i<6; i++){
    stat.push("not clicked");
}
//Képek számlálója a konténerekben
let count = [0, 0, 0];

//Kattintások kezelése
document.addEventListener('click', (event) => {
    if(event.target.id!==null){
    //Kattintások kezelése a halmokon 
       switch(event.target.id){
           case 'bot1':
              if(stat[0]==="not clicked"){
                stat[0]="clicked";
                for(let i=0; i<6; i++){
                    if(i!==0){
                        stat[i] = stat[i] !== "can not used" ? stat[i]="not clicked" : stat[i];
                    }
                }
              }
               break;
           case 'bot2':
            if(stat[1]==="not clicked"){
                stat[1]="clicked";
                for(let i=0; i<6; i++){
                    if(i!==1){
                        stat[i] = stat[i] !== "can not used" ? stat[i]="not clicked" : stat[i];
                    }
                }
              }
               break;
           case 'bot3':
            if(stat[2]==="not clicked"){
                stat[2]="clicked";
                for(let i=0; i<6; i++){
                    if(i!==2){
                        stat[i] = stat[i] !== "can not used" ? stat[i]="not clicked" : stat[i];
                    }
                }
              }
               break;
           case 'bot4':
            if(stat[3]==="not clicked"){
                stat[3]="clicked";
                for(let i=0; i<6; i++){
                    if(i!==3){
                        stat[i] = stat[i] !== "can not used" ? stat[i]="not clicked" : stat[i];
                    }
                }
              }
              
               break;
           case 'bot5':
            if(stat[4]==="not clicked"){
                stat[4]="clicked";
                for(let i=0; i<6; i++){
                    if(i!==4){
                        stat[i] = stat[i] !== "can not used" ? stat[i]="not clicked" : stat[i];
                    }
                }
              }
               break;
           case 'bot6':
            if(stat[5]==="not clicked"){
                stat[5]="clicked";
                for(let i=0; i<6; i++){
                    if(i!==5){
                        stat[i] = stat[i] !== "can not used" ? stat[i]="not clicked" : stat[i];
                    }
                }
               
              }
               break;   
       }
    }
    //Kattintások kezelése a konténerekben
        switch(event.target.id){
            case '1':
                for(let i=0; i<6; i++){
                    if(stat[i]==="clicked"&& count[0]<2){
                        document.getElementById("1").innerHTML += `<img src="${pictures1[i]}" alt=""> ` ;
                        count[0]++;
                        stat[i]="can not used";
                        document.getElementById(divIds[i]).style.filter = 'grayscale(100%)';
                    }
                }
                break;
            case '2':
                for(let i=0; i<6; i++){
                    if(stat[i]==="clicked"&& count[1]<2){
                        document.getElementById("2").innerHTML += `<img src="${pictures1[i]}" alt=""> ` ;
                        count[1]++;
                        stat[i]="can not used";
                        document.getElementById(divIds[i]).style.filter = 'grayscale(100%)';
                    }

                }
                break;
            case '3':
                for(let i=0; i<6; i++){
                    if(stat[i]==="clicked"&& count[2]<2){
                        document.getElementById("3").innerHTML += `<img src="${pictures1[i]}" alt=""> ` ;
                        count[2]++;
                        stat[i]="can not used";
                        document.getElementById(divIds[i]).style.filter = 'grayscale(100%)';
                    }

                }
                break;
        }
        //Kiválasztott képek kerete
        for (let i = 0; i < stat.length; i++) {
            if(stat[i]==="clicked"){
                document.getElementById(divIds[i]).style.border = `5px dashed #0f0`;
            }
            else{
                document.getElementById(divIds[i]).style.border = `none`;
            }
        
    }
    //Konténerek ellenőrzése, ha mindben 2 kép van, akkor megjelenik a csillag
    if(count.every((element) => element === 2)){
        document.body.innerHTML = "" ;
        const overlay =document.createElement('div');
        overlay.classList.add('overlay');
        const star = document.createElement('img')
        star.src = "./images/star.svg";   
        overlay.appendChild(star);
        document.body.appendChild(overlay);
        
    }
    
});


