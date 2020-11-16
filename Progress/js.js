const subject=document.getElementById("subject");
const priority=document.getElementById("priority");
const ddate=document.getElementById("duedate");
const status=document.getElementById("status");
const percentage=document.getElementById("pcompleted");
const submit=document.getElementById("submit");
const table=document.getElementById("table");
const remove=document.getElementsByClassName("remove");

submit.addEventListener("click", submitt);

for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removed, false);
}

function removed() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

function submitt(){
  if ((subject.value) &&(ddate.value)&& (percentage.value)){
  const row = document.createElement("tr");
  table.appendChild(row);

  const subtype = document.createElement("td");
  
  row.appendChild(subtype).className = "item";
  


  const subsub = document.createElement("td");
  subsub.innerText=subject.value;
  row.appendChild(subsub).className = "item";


  const addPriority = document.createElement("td");
  let colors=priority.value;
  
  
  if(colors==="High"){
      
    
    addPriority.innerHTML=colors;
    row.appendChild(addPriority).className = "item text-center border rounded-pill bg-danger";
  }
  else if (colors==="Medium"){
    addPriority.innerHTML =colors;
    row.appendChild(addPriority).className = "item text-center border rounded-pill bg-warning";
    
  }
  else if (colors==="Low"){
    addPriority.innerHTML=colors;
    row.appendChild(addPriority).className = "item text-center border rounded-pill bg-success";
  }
  

    
  const subddate = document.createElement("td");
  subddate.innerText=ddate.value;
  row.appendChild(subddate).className = "item";




  const substatus = document.createElement("td");
  substatus.innerText=status.value;
  row.appendChild(substatus).className = "item";
  
  if (status.value==="Complete"){
     subtype.innerHTML="Great";
}
else if(status.value==="In Progress"){

  subtype.innerHTML="Still not";
}
else if(status.value=="New"){
  subtype.innerHTML="Bad";
}




  const subpercent = document.createElement("td");
  let procent=percentage.value
  const progber = document.createElement("div");
  
    if( procent==="100%"){
      
      progber.innerHTML=procent;
        
      row.appendChild(subpercent);
      subpercent.appendChild(progber).className="progress-bar progress-bar-striped active1 bg-success col-12";
    }
    else if( procent==="75%"){
      progber.innerHTML=procent
      row.appendChild(subpercent);
      subpercent.appendChild(progber).className="progress-bar progress-bar-striped active2 bg-primary col-8";
    }
    else if( procent==="50%"){
      progber.innerHTML=procent   
       row.appendChild(subpercent);
      subpercent.appendChild(progber).className="progress-bar progress-bar-striped active bg-info col-6";
    }
    else if( procent==="25%"){
      progber.innerHTML=procent
       row.appendChild(subpercent);
      subpercent.appendChild(progber).className="progress-bar progress-bar-striped active bg-warning col-4";

    }
    else if( procent==="0%"){
      progber.innerHTML= procent  
      row.appendChild(subpercent);
    subpercent.appendChild(progber).className="progress-bar progress-bar-striped active bg-white text-dark";
    }
  
   



  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  today = mm + '-' + dd + '-' + yyyy;
  const subctime = document.createElement("td");
  subctime.innerText=today;
  row.appendChild(subctime).className = "item";


  const subremove = document.createElement("td");
  subremove.innerText="Delete";

  row.appendChild(subremove).className = "item remove removeblock btn btn-danger";


  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removed, false);
}
}
}