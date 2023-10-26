'use strict';
const score0e=document.querySelector('#score--0');
const score1e=document.getElementById('score--1');
const c0=document.getElementById('current--0');
const c1=document.getElementById('current--1');
score0e.textContent=0;
score1e.textContent=0;
const dice=document.querySelector('.dice');
dice.classList.add('hidden');

let active=0;
let playing =true;
const scores=[0,0];

const roll=document.querySelector('.btn--roll');
const newb=document.querySelector('.btn--new');
const hold=document.querySelector('.btn--hold');

let currscore=0;
roll.addEventListener('click',function(){
    if(playing){
    //generate a random dice roll,display dice,if 1 switch to another player
    const dicenum=Math.trunc(Math.random()*6)+1;
    //display dice
    dice.classList.remove('hidden');
    dice.src=`dice-${dicenum}.png`

    if(dicenum!=1){
        currscore+=dicenum;
        document.getElementById(`current--${active}`).textContent=currscore;
    }
    else{
        document.querySelector(`.player--${active}`).classList.remove('player--active');
        document.getElementById(`current--${active}`).textContent=0;
        active=active==0?1:0;
        currscore=0;
        document.querySelector(`.player--${active}`).classList.add('player--active');
    }
}
})

hold.addEventListener('click',function(){
    if(playing){
    scores[active]+=currscore;
    document.getElementById(`score--${active}`).textContent=scores[active];
    if(scores[active]<20){
        document.querySelector(`.player--${active}`).classList.remove('player--active');
        document.getElementById(`current--${active}`).textContent=0;
        active=active==0?1:0;
        currscore=0;
        document.querySelector(`.player--${active}`).classList.add('player--active');
    }
    else{
        playing=false;
        dice.classList.add('hidden');
        document.querySelector(`.player--${active}`).classList.add('player--winner');
        document.querySelector(`.player--${active}`).classList.remove('player--active');
    }
}
})

newb.addEventListener('click',function(){
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    c0.textContent=0;
    c1.textContent=0;
    score0e.textContent=0;
    score1e.textContent=0;
    playing=true;
    dice.classList.add('hidden');
})