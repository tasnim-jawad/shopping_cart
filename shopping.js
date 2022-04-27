document.getElementById('phone_increase').addEventListener('click',function(){
    let phoneInput = document.getElementById('phone_count');
    let phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount + 1;
        phoneInput.value = phoneNewCount;
    
    let phoneTotal = phoneNewCount * 2099;
        document.getElementById('phone_total').innerText = '=' + phoneTotal + '/-';
});

document.getElementById('phone_dicrease').addEventListener('click',function(){
    let phoneInput = document.getElementById('phone_count');
    let phoneCount = parseInt(phoneInput.value);
        if(phoneCount > 0){
        let phoneNewCount = phoneCount - 1;
        phoneInput.value = phoneNewCount;
        let phoneTotal = phoneNewCount * 20099;
        document.getElementById('phone_total').innerText = '=' + phoneTotal + '/-';
        }
})

document.getElementById('case_increase').addEventListener('click',function(){
    let caseInput = document.getElementById('case_count');
    let caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount + 1;
        caseInput.value = caseNewCount;

    let caseTotal = caseNewCount * 60;
        document.getElementById('case_total').innerText = '=' + caseTotal + '/-';
});

document.getElementById('case_dicrease').addEventListener('click',function(){
    let caseInput = document.getElementById('case_count');
    let caseCount = parseInt(caseInput.value);
        if(caseCount > 0){
        let caseNewCount = caseCount - 1;
        caseInput.value = caseNewCount;
        let caseTotal = caseNewCount * 60;
        document.getElementById('case_total').innerText = '=' + caseTotal + '/-';
        }
})