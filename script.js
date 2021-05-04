showList();
let addbtn = document.querySelector("#add");
addbtn.addEventListener("click", function () {
  let input = document.querySelector("#input");
  let text = localStorage.getItem("div");
  if (text == null) {
    textobj = [];
  } else {
    textobj = JSON.parse(text);
  }
  textobj.push(input.value);
  localStorage.setItem("div", JSON.stringify(textobj));
  input.value = "";
  //console.log(textobj);
  showList();
});

function showList() {
  let text = localStorage.getItem("div");
  if (text == null) {
    textobj = [];
  } else {
    textobj = JSON.parse(text);
  }
  let html = "";
  textobj.forEach(function (element, index) {
    html += `
        <big>${index + 1}. ${element}</big>
        <button id="${index}" class="delete" onclick= "deleteList(this.id)">X</button>
        <br />`;
  });
  let listElm = document.querySelector("div");
  if (textobj.length != 0) {
    listElm.innerHTML = html;
  } else {
    listElm.innerHTML = `Nothing to show! use "Add" button to add lists.`;
  }
}

function deleteList(index) {
  let text = localStorage.getItem("div");
  if (text == null) {
    textobj = [];
  } else {
    textobj = JSON.parse(text);
  }
  textobj.splice(index, 1);
  localStorage.setItem("div", JSON.stringify(textobj));
  showList();
}

//var inputList = this.innerHTML; //input er vitorer likha nilam

//var listTag = document.createElement("big"); //tag create
//var listText = document.createTextNode(inputList); //text create in tag
//listTag.appendChild(listText); //text & tag ek korlam

//var mydiv = document.querySelector("div");
//mydiv.appendChild(listTag); //tag ta div e rakhlam
//console.log(mydiv);
