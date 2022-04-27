  // update function 
  
function update() {
  Name = document.getElementById("Text").value;
  Item = document.getElementById("Item").value;
  Price = document.getElementById("Price").value;
  Remain = document.getElementById("Remain").value;
  if (localStorage.getItem("database") == null) {
    info = [];
    //  database.push([Name,Item,Price,Remain]);
    localStorage.setItem("database", JSON.stringify(info));
  } else {
    infostr = localStorage.getItem("database");
    info = JSON.parse(infostr);
  }
  console.log("update succefull");

  //populate table
  str =" ";

  info.forEach((element,index )=> {
    div=element[2]-element[3]
    str+=`
    <tr>
    <td>${index+1}</td>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td>${element[2]}</td>
    <td>${element[3]}</td>
    <td>${div}</td>
    <td>
      <input type="button" id="del" value="delete" onclick="del(${index})"></input>
    </td>
  </tr>
    `;
  });
  document.getElementById("entry").innerHTML=str;
}
submit.addEventListener("click", getupdate);
update();


// .................for getupdate 

function getupdate() {
  console.log("getupdate succefull");
  Name = document.getElementById("Text").value;
  Item = document.getElementById("Item").value;
  Price = document.getElementById("Price").value;
  Remain = document.getElementById("Remain").value;
  if (localStorage.getItem("database") == null) {
    info = [];
    info.push([Name, Item,Price,Remain]);
    localStorage.setItem("database", JSON.stringify(info));
  } else {
    infostr = localStorage.getItem("database");
    info = JSON.parse(infostr);
    info.push([Name, Item,Price,Remain]);
    localStorage.setItem("database", JSON.stringify(info));
  }
  update();
}

// for to clear storage 

reset.addEventListener("click", () => {
  ans = confirm("Do U want clear all entries storage ? ");
  if (ans == true) {
    console.log("clear the storage");
    localStorage.clear();
    update();
  }
});

// for to delete the individual Item

function del(itemidx) {
  console.log("deleting item", itemidx);
  infostr = localStorage.getItem("database");
  info = JSON.parse(infostr);
  info.splice(itemidx, 1);
  localStorage.setItem("database", JSON.stringify(info));
  update();
}