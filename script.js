var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));


function foo(data1){
for(var i=0;i<data1.length;i++){
   row.innerHTML+=`<div class="col-md-4">
 <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  
  <div class="card-body">
  <h5 class="card-title">${data1[i].name} </h5>
  <img src="${data1[i].flag}" class="card-img-top" alt="...">
  <h4 class="card-title">${data1[i].capital}</h4>
  <h4 class="card-title">${data1[i].region}</h4>
  <h4 class="card-title">${data1[i].subregion}</h4>
  <button type="button" class="btn btn-outline-secondary">Click for Weather</button>
  </div>
</div>
  
   </div>`;
document.body.append(container); 
}

}


