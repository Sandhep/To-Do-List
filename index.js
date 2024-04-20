function addtask(){
var taskinput=document.getElementById("taskinput");
var textinput=taskinput.value;
if(textinput.trim()==="")
{
   alert("Please enter the valid task");
   return;
}
var tasklist=document.querySelector(".list-group");
var li=document.createElement("li");
li.className="list-group-item";
var checkbox=document.createElement("input");
checkbox.type="checkbox";
checkbox.class="form-check-input me-1";
li.appendChild(checkbox);
li.innerHTML=textinput+'<button onclick="removetask(this)" class="btn btn-danger remove" type="button" >REMOVE</button>';
tasklist.appendChild(li);
taskinput.value="";
}

function removetask(button){
 var li=button.parentNode;
 var ul=li.parentNode;
 ul.removeChild(li);

}