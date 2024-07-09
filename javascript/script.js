let string="";
let input=document.getElementById("input");
let buttons=document.querySelectorAll(".button");
let arr= Array.from(buttons);
const specialChar = ['+','*','/','%','='];

arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML === '='){
            let lastchar = string[string.length-1];
            if(lastchar=='+' || lastchar=='-' || lastchar=='/' || lastchar=='*'){
                string = string.substring(0, string.length-1);
                string= eval(string.replace("%","/100"));
                input.value=string;
            }
            else if(string === '-' || string === ""){
                input.value= '0';
            }
            else{
            string= eval(string.replace("%","/100"));
            input.value=string;
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(string === "" && specialChar.includes(e.target.innerHTML))return;
        else{
            string +=e.target.innerHTML;
            input.value = string;
        }
    })
})