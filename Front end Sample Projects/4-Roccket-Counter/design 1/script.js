let startBox=document.querySelector('.start-box');
let inputCounter=document.querySelector('#inputCounter');
let startCounter=document.querySelector('#startCounter');
let errorMessage=document.querySelector('#error-message');

// let progressbars=document.querySelector('#progressbars');
 let progressbars=document.querySelector('.container');
 let progressStatusSuccess=document.querySelector('.success');
 let progressStatusLoading=document.querySelector('.loading');
 let counterNumber=document.querySelector('#progressbarDetail>span')



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
        let timerId=setInterval(() => {
            if(secound<=1){
                clearInterval(timerId);
                startBox.style.display='block';
                inputCounter.value='';
                progressStatusSuccess.style.display='block';   
                progressStatusLoading.style.display='none';
            }
            secound-=1;
            counterNumber.textContent=secound
        }, 1000);
        progressStatusLoading.style.display='block';
        progressStatusSuccess.style.display='none';   



    errorMessage.classList.remove('active');
    // progressbars.classList.add('activeProgressbars');
    progressbars.style.display='block';
    startBox.style.display='none';
    }
})