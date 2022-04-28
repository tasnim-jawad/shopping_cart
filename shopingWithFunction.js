function phoneCartNumber(isIncrease){
    let phoneInput = document.getElementById('phone_count');
    let phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
        phoneInput.value = phoneNewCount;
    }else if(isIncrease == false && phoneNewCount > 0){
        phoneNewCount = phoneCount - 1;
        phoneInput.value = phoneNewCount;
    }
    let phoneTotal = phoneNewCount * 1219;
        document.getElementById('phone_total').innerText = '=' + phoneTotal + '/-';

}

document.getElementById('phone_increase').addEventListener('click',function(){
    phoneCartNumber(true)
});

document.getElementById('phone_dicrease').addEventListener('click',function(){
    phoneCartNumber(false)
})

function caseCartNumber(isIncrease){
    let caseInput = document.getElementById('case_count');
    let caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
        caseInput.value = caseNewCount;
    }else if(isIncrease == false && caseNewCount > 0){
        caseNewCount = caseCount - 1;
        caseInput.value = caseNewCount;
    }
    let caseTotal = caseNewCount * 59;
        document.getElementById('case_total').innerText = '=' + caseTotal + '/-';

}

document.getElementById('case_increase').addEventListener('click',function(){
    caseCartNumber(true)
});

document.getElementById('case_dicrease').addEventListener('click',function(){
    caseCartNumber(false)
})