var inputval = document.getElementById("inputVal");
var subval = document.getElementById("subVal");
var historyDiv=document.getElementById("historyDiv");







function getValue(val)
{
console.log(val);
if(inputval.value == '0')
    {
        inputval.value = val;
    }
    else
    {
        inputval.value += val;
    }

}




// DEL
function removelastDigit()
{
    if(inputval.value.length == 1)
        {
            inputval.value = inputval.value.slice(0, -1);
            inputval.value = "0";
        }
        else
        {
            inputval.value = inputval.value.slice(0, -1);
        }
    
}


//AC
function clearall()
{

    inputval.value = "0";
    subval.value = "";

}


// ANS = Calculation   eval=solving,result  + - etc
function solve()
{
    var equation = inputval.value;
    console.log(equation);
    var ans = eval(equation);

    inputval.value = ans;
    subval.value = equation + "=";

    showHistory(equation, ans);


}


// Show historyDiv
//  function showHistory()
//  {
//     var equation = subval.value;
//     var ans = inputval.value ;
//     historyDiv.innerHTML += ` 
//     <div class="his">
//     <p>${equ}=</p>
//     <p>${ans}</p>
//     </div>`
//  }




 function showHistory(equ,ans){
    historyDiv.innerHTML += `<div class="his"> 
    <p>${equ}=</p>
    <p>${ans}</p>
    </div>`;
 }



 
//clear all
 function clearhistory(){


    var historyLen=document.querySelectorAll('#historyDiv .his').length;
    console.log(historyLen)
    if(historyLen > 0)
        {
            var choice=confirm("Are uh sure uh want to delete historyDiv?");
            if(choice)
                historyDiv.innerHTML = "";

        }
 }
