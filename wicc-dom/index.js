const lectureList = [
  { title: "Introduction to WEB" },
  { title: "Introduction to HTML and CSS" },
  { title: "Git and its best practices" },
];

const lists = document.querySelector("#lecture-list ul");

function showLists() {
  lectureList.forEach((item) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = item.title;
    p.classList.add("title");
    const button = document.createElement("button");
    button.innerText = "Remove";
    button.classList.add("remove");
    li.appendChild(p);
    li.appendChild(button);
    lists.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  showLists();

  const addForm = document.getElementById("lecture-add");
  addForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputValue = document.querySelector("input[type='text']");

    // const li = document.createElement("li");
    // const p = document.createElement("p");
    // p.innerText = inputValue.value;
    if (inputValue.value) {
      lectureList.push({
        title: inputValue.value,
      });
      lists.innerHTML = "";
      showLists();
      inputValue.value = "";
    }
  });
});

//  const addForm = document.getElementById('lecture-add');
//  addForm.addEventListener('submit',function(event){
//    event.preventDefault();
//     const inputValue = document.querySelector("input[type='text']");

//     const li= document.createElement('li');
//     const p= document.createElement('p');
//     p.innerText = inputValue.value;
//     if(inputValue.value){
//       p.classList.add("title");
//       const button= document.createElement('button');
//       button.innerText ='Remove';
//       button.classList.add("remove");
//       li.appendChild(p);
//       li.appendChild(button);

//       const lists = document.querySelector('#lecture-list ul')
//       lists.appendChild(li);
//       inputValue.value = '';
//     }

//  })
// //  const buttons = document.querySelectorAll('#lecture-list ul li button');
// //  const lists = document.querySelector('#lecture-list ul');

// //  buttons.forEach((button)=>{
// //    button.addEventListener('click',function (event){
// //      const li = event.target.parentElement;
// //      lists.removeChild(li);

// //    })
// //  })

const list = document.querySelector("#lecture-list ul");
list.addEventListener("click", function (e) {
  if (event.target.className === "remove") {
    const li = event.target.parentElement;
    list.removeChild(li);
  }
});
// const header = document.querySelector('#header').style.backgroundColor = 'red';

// let myPromise = new Promise((resolve,reject)=>{
//   // resolve();
//   // reject();
// })

// myPromise.then((res)=>{
//   console.log('successful');
// }).catch((err)=>{
//   console.log('error')
// })

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");

const p = document.querySelector("#lecture-list ul li p");
const inputValue = document.querySelector("input[type='text']");

fetchPromise
  .then((response) => {
    return response.json();
  
  })
  .then((people) => {
    people.forEach((item) => {
      // console.log(item)
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = item.name;

      p.classList.add("title");
      const button = document.createElement("button");
      button.innerText = "Remove";
      button.classList.add("remove");
      li.appendChild(p);
      li.appendChild(button);
      lists.appendChild(li);
      console.log(item.name);
      lectureList.push({
        title: item.name,
      });
      lists.innerHTML = "";
      showLists();
      inputValue.value = "";
    });
  console.log(lectureList)
  });
