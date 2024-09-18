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
let fruitWhere = [];
let kontenerStat = [];
for(let i=0; i<6; i++){
    stat.push("not clicked");
    kontenerStat.push("not clicked");
    fruitWhere.push("nowhere");
}
//Képek számlálója a konténerekben
let count = [0, 0, 0];
let gameOver = false;
let kontenerFrom = 0;

//Kattintások kezelése
document.addEventListener('click', (event) => {
    if(gameOver){
        return;
    }
    if(event.target.id!==null){
    //Kattintások kezelése 
    let id = event.target.id;
    let index;
    if(id.includes('bot')){
        index = parseInt(id.replace('bot', ''))-1;
        if(stat[index]==="not clicked"){
            stat[index]="clicked";
            for(let i=0; i<6; i++){
                if(i!==index){
                    stat[i] = stat[i] !== "can not used" ? stat[i]="not clicked" : stat[i];
                }
            }
        }
    }
    else if(parseInt(event.target.id)){
        index = parseInt(event.target.id)-1;
        for(let i=0; i<6; i++){
            if(stat[i]==="clicked"&& count[index]<2){
                event.target.innerHTML += `<img src="${pictures1[i]}" alt="${i}" id="img${i}"> ` ;
                count[index]++;
                stat[i]="can not used";
                fruitWhere[i]=event.target.id;
                document.getElementById(divIds[i]).style.filter = 'grayscale(100%)';
            }
            else if(kontenerStat[i]==="clicked" && count[index]<2){
                document.getElementById(`img${i}`).remove();
                event.target.innerHTML += `<img src="${pictures1[i]}" alt="${i}" id="img${i}"> ` ;
                count[index]++;
                count[fruitWhere[i]-1]--;
                fruitWhere[i]=event.target.id;
                
            }
        }
    }     
        
        //Kattintások kezelése a konténerekben, átpakoláshoz
        for(let i=0; i<6; i++){
            if(event.target.alt==i){
                kontenerStat[i]="clicked"
                for(let j=0; j<6; j++){stat[j]="not clicked"}
            }
            else{
                kontenerStat[i]="not clicked"
            }
            
        }
        
    }
        //Kiválasztott képek kerete
        for (let i = 0; i < stat.length; i++) {
            if(stat[i]==="clicked"){
                document.getElementById(divIds[i]).style.border = `5px dashed #0f0`;
            }
            else{
                document.getElementById(divIds[i]).style.border = `5px solid transparent`;
            }
            if(kontenerStat[i]==="clicked"){
                document.getElementById(`img${i}`).style.border = `5px dashed #0f0`;
            }
            else if(document.getElementById(`img${i}`)!==null){
                document.getElementById(`img${i}`).style.border = `5px solid transparent`;
            }

        
    }
    //Konténerek ellenőrzése, ha mindben 2 kép van, akkor megjelenik a csillag
    if(count.every((element) => element === 2)){
        //document.body.innerHTML = "" ;
        const overlay =document.createElement('div');
        overlay.classList.add('overlay');
        const star = document.createElement('img')
        star.src = "./images/star.svg";   
        overlay.appendChild(star);
        document.body.appendChild(overlay);
        gameOver = true;
    }
    
    
});


