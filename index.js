let card1El=document.getElementById('card1');
let card2El=document.getElementById('card2');
let card3El=document.getElementById('card3');
let card4El=document.getElementById('card4');
let card5El=document.getElementById('card5');


let iconEl1=document.getElementById('icon1');
let iconEl2=document.getElementById('icon2');
let iconEl3=document.getElementById('icon3');
let iconEl4=document.getElementById('icon4');
let iconEl5=document.getElementById('icon5');

let captionEl1=document.getElementById('caption1')
let captionEl2=document.getElementById('caption2')
let captionEl3=document.getElementById('caption3')
let captionEl4=document.getElementById('caption4')
let captionEl5=document.getElementById('caption5')



let mainEl=document.getElementById('main')
let btnEl1=document.getElementById('btn1')
let btnEl2=document.getElementById('btn2')

function iconNone(){
    mainEl.style.fontFamily='Roboto'
    iconEl1.style.display='none'
    card1El.style.backgroundColor='#c4b8b8'
    iconEl2.style.display='none'
    card2El.style.backgroundColor='#c4b8b8'
    iconEl3.style.display='none'
    card3El.style.backgroundColor='#c4b8b8'
    iconEl4.style.display='none'
    card4El.style.backgroundColor='#c4b8b8'
    iconEl5.style.display='none'
    card5El.style.backgroundColor='#c4b8b8'
    captionEl1.style.backgroundColor='white'
    captionEl2.style.backgroundColor='white'
    captionEl3.style.backgroundColor='white'
    captionEl4.style.backgroundColor='white'
    captionEl5.style.backgroundColor='white'
    
}
iconNone()

card1El.onclick=function(){
    iconNone()
    iconEl1.style.display='block'
    mainEl.style.fontFamily='Roboto'
    card1El.style.backgroundColor='blue'
    btnEl1.style.fontFamily='Roboto'
    btnEl2.style.fontFamily='Roboto'
    captionEl1.style.backgroundColor='skyblue'
    
}
card2El.onclick=function(){
    iconNone()
    iconEl2.style.display='block'
    mainEl.style.fontFamily="Nunito"
    card2El.style.backgroundColor='blue'
    btnEl1.style.fontFamily='Nunito'
    btnEl2.style.fontFamily='Nunito'
    captionEl2.style.backgroundColor='skyblue'
    
}
card3El.onclick=function(){
    iconNone()
    iconEl3.style.display='block'
    mainEl.style.fontFamily="Montserrat"
    card3El.style.backgroundColor='blue'
    btnEl1.style.fontFamily='Montserrat'
    btnEl2.style.fontFamily='Montserrat'
    captionEl3.style.backgroundColor='skyblue'
    
}
card4El.onclick=function(){
    iconNone()
    iconEl4.style.display='block'
    mainEl.style.fontFamily='Playfair Display'
    card4El.style.backgroundColor='blue'
    btnEl1.style.fontFamily='Playfair Display'
    btnEl2.style.fontFamily='Playfair Display'
    captionEl4.style.backgroundColor='skyblue'
    
}
card5El.onclick=function(){
    iconNone()
    iconEl5.style.display='block'
    mainEl.style.fontFamily='Roboto Mono'
    card5El.style.backgroundColor='blue'
    btnEl1.style.fontFamily='Roboto Mono'
    btnEl2.style.fontFamily='Roboto Mono'
    captionEl5.style.backgroundColor='skyblue'
    
}

