let num1 ="";
let num2 ="";

let operating =false;
let operand = "";

document.querySelectorAll(".button").forEach(item =>{
    item.addEventListener("click",function(){
        GetInput(this.innerText);
        
    });
})

function GetInput(input){

    if(operating){
        num2 += input;
        UpdateResultScreen(num2);
    }
    else{
        num1 += input;
        UpdateResultScreen(num1);
    }

}

function UpdateResultScreen(value){
    document.querySelector("#result").innerText = value;
}

document.querySelector(".equals_button").addEventListener("click",function(){
    Calculate();
});

document.querySelectorAll(".operand").forEach(item =>{
    item.addEventListener("click",function(){
        if (operand === ""){
            operand = this.innerText;
            operating=true;
        }
        else{
            if(num2===""){
                operand=this.innerText;
                operating=true;
            }
            else{
                Calculate();
                operand=this.innerText;
            }
            
            
        }
    })
})
function Calculate(){
    let num1F = parseFloat(num1);
    let num2F = parseFloat(num2);
    console.log(num1F);
    console.log(num2F);
    let result = 0;
    if(operand==="+"){
        result = num1F+num2F;
    }
    else if( operand==="-"){
        result = num1F-num2F;
    }
    else if( operand==="*"){
        result = num1F*num2F;
    }
    else if( operand==="/"){
        if(num2F===0){
            UpdateResultScreen("Cant divide by 0");
            return;
        }
        result = num1F/num2F;
        
    }
    UpdateResultScreen(result.toString());
    num1= result.toString();
    num2="";
    operating=true;
    operand="";
}

