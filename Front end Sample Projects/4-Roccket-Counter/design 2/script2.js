let startBox=document.querySelector('.start-box');
let inputCounter=document.querySelector('#inputCounter');
let startCounter=document.querySelector('#startCounter');
let errorMessage=document.querySelector('#error-message');
let progressbars=document.querySelector('.wrap-circles');
let progressStatusSuccess=document.querySelector('.success');
let progressStatusLoading=document.querySelector('.loading');
let counterNumber=document.querySelector('.inner');
let circle=document.querySelector('#circle');


startCounter.addEventListener('click' , function(e){
    let secound=parseInt(inputCounter.value);
    if(isNaN(secound)){
        errorMessage.textContent='زمان را به درستی وارد کنید';
        errorMessage.classList.add('active');
        // progressbars.classList.remove('activeProgressbars');
        progressbars.style.display='none';
        return;
    }
    else{
        counterNumber.textContent=secound;
        let totalsecound=secound;
        let lastPercent;
        let timerId=setInterval(() => {
            if(lastPercent)
                circle.classList.remove(lastPercent)
            if(secound<=0){
                clearInterval(timerId);
                circle.classList.add('per-100');
                startBox.style.display='block';
                inputCounter.value='';
                progressStatusSuccess.style.display='block';   
                progressStatusLoading.style.display='none';
            }
            else{
                secound-=1;
            let currentPercentage=Math.floor(((totalsecound-secound)/totalsecound)*100);
            lastPercent=`per-${currentPercentage}`;
            circle.classList.add(`per-${currentPercentage}`);
            console.log(circle)
            
            counterNumber.textContent=secound
            }
        }, 1000);
        circle.classList.remove('per-100')
        progressStatusLoading.style.display='block';
        progressStatusSuccess.style.display='none';   



    errorMessage.classList.remove('active');
    // progressbars.classList.add('activeProgressbars');
    progressbars.style.display='block';
    startBox.style.display='none';
    }
})