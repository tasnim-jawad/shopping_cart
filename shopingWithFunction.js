
let phoneSubtotal = 0;
let caseSubtotal = 0;


function productCartNumber(isIncrease , price ,quantityId ,totalPerProductID){
    let productInput = document.getElementById(quantityId);
    let productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
        productInput.value = productNewCount;
    }else if(isIncrease == false && productNewCount > 0){
        productNewCount = productCount - 1;
        productInput.value = productNewCount;
    }
    
    let productTotal = productNewCount * price;
    document.getElementById(totalPerProductID).innerText =  productTotal;
    if(totalPerProductID === 'caseTotalNumber'){
        caseSubtotal = productTotal;
        subTotal(phoneSubtotal ,caseSubtotal)
    }else if(totalPerProductID === 'phoneTotalNumber'){
        phoneSubtotal = productTotal;
        subTotal(phoneSubtotal ,caseSubtotal)
    }
    
}
document.getElementById('phone_increase').addEventListener('click',function(){
    productCartNumber(true ,12000 ,'phone_count', 'phoneTotalNumber');
});

document.getElementById('phone_dicrease').addEventListener('click',function(){
    productCartNumber(false ,12000 ,'phone_count', 'phoneTotalNumber');
})

document.getElementById('case_increase').addEventListener('click',function(){
    productCartNumber(true ,200 ,'case_count', 'caseTotalNumber')
});

document.getElementById('case_dicrease').addEventListener('click',function(){
    productCartNumber(false, 200,'case_count' ,'caseTotalNumber')
})


function subTotal(phoneSubtotal , caseSubtotal) {
    let subTotal = phoneSubtotal  + caseSubtotal ;
    let taxTotal = (subTotal /100)*15;
    let payableTotal = subTotal + taxTotal
    console.log(phoneSubtotal,caseSubtotal,payableTotal);
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("taxTotal").innerText = taxTotal;
    document.getElementById("payableTotal").innerText = payableTotal;
}


