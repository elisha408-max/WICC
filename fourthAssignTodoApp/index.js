let inputOne = document.getElementById("formControl1");
// console.log(inputOne.value)
const inputTwo = document.getElementById("formControl2");
const inputThree = document.querySelector(".form-group textarea");
// console.log(inputThree)


const form = document.getElementById("lecture-add");

function postData(event) {
  event.preventDefault();

  const reqData = {
    completed: false,
    name: inputOne.value,
    priority: inputTwo.value,
    description: inputThree.value,
  };
  console.log(reqData);
  // console.log(typeof inputOne.value);

  // console.log(inputTwo.value);
  // console.log(typeof inputThree.value);
  axios({
    method: "post",
    url: "https://infodev-server.herokuapp.com/api/todos",
    data: reqData,
  })
    .then((res) => {
      // console.log(res);
      const h6 = document.createElement("h6");
      h6.classList.add("title");
      h6.innerText = inputOne.value;
      console.log(h6);
      const span = document.createElement("span");
      span.className = "ml-2 badge badge-info";
      span.innerText = inputTwo.value;
      console.log(inputTwo.value)
      h6.appendChild(span);
      const p = document.createElement("p");
      p.classList.add("description");

      p.innerText = inputThree.value;

      const div = document.createElement("div");
      div.appendChild(h6);
      div.appendChild(p);
      // console.log(div);
      const button1 = document.createElement("button");
      button1.className = "btn btn-success";
      const icon1 = document.createElement("i");
      icon1.className = "fas fa-check";
      button1.appendChild(icon1);
      const button2 = document.createElement("button");
      button2.className = "btn btn-warning";
      button2.setAttribute("id", "warning");
      // console.log(button2);
      const icon2 = document.createElement("i");
      icon2.className = "fas fa-pencil";
      button2.appendChild(icon2);
      const button3 = document.createElement("button");
      button3.className = "btn btn-danger";
      button3.setAttribute("id", "delete");
      const icon3 = document.createElement("i");
      icon3.className = "far fa-trash-alt";
      button3.appendChild(icon3);
      const div1 = document.createElement("div");
      div1.append(button1, button2, button3);
      console.log(div);
      console.log(div1);
      const li = document.createElement("li");

      li.append(div, div1);
      console.log(li);

      list.appendChild(li);
      console.log(list);
    })
    .catch((err) => {
      console.log("Error occurred");
    });
}

form.addEventListener("submit", postData);

// Get Method

const list = document.querySelector("#lecture-list ul");

function getData() {
  response.data.forEach((item) => {
    console.log(item);
    const h6 = document.createElement("h6");
    h6.classList.add("title");
    h6.innerText = item.name;
    const span = document.createElement("span");
    span.className = "ml-2 badge badge-info";
    span.innerText = item.priority;
    // console.log(span)
    h6.appendChild(span);
    const p = document.createElement("p");
    p.classList.add("description");

    p.innerText = item.description;

    const div = document.createElement("div");
    div.appendChild(h6);
    div.appendChild(p);
    // console.log(div);
    const button1 = document.createElement("button");
    button1.className = "btn btn-success";
    const icon1 = document.createElement("i");
    icon1.className = "fas fa-check";
    button1.appendChild(icon1);
    const button2 = document.createElement("button");
    button2.className = "btn btn-warning";
    button2.setAttribute("id", "warning");
    // console.log(button2);
    const icon2 = document.createElement("i");
    icon2.className = "fas fa-pencil";
    button2.appendChild(icon2);
    const button3 = document.createElement("button");
    button3.className = "btn btn-danger";
    button3.setAttribute("id", "delete");
    const icon3 = document.createElement("i");
    icon3.className = "far fa-trash-alt";
    button3.appendChild(icon3);
    const div1 = document.createElement("div");
    div1.append(button1, button2, button3);
    const li = document.createElement("li");
    li.id = item._id;
    li.append(div, div1);
    list.appendChild(li);
    console.log(list);
   
    console.log(item.priority)

  });
}
function showList() {
  axios({
    method: "get",
    url: "https://infodev-server.herokuapp.com/api/todos",
  })
    .then((response) => {
      // console.log(response.data);
      response.data.forEach((item) => {
        // console.log(item._id);
        const h6 = document.createElement("h6");
        h6.classList.add("title");
        h6.innerText = item.name;
        const span = document.createElement("span");
        span.className = "ml-2 badge badge-info";
        span.innerText = item.priority;
        h6.appendChild(span);
        const p = document.createElement("p");
        p.classList.add("description");

        p.innerText = item.description;

        const div = document.createElement("div");
        div.appendChild(h6);
        div.appendChild(p);
        // console.log(div);
        const button1 = document.createElement("button");
        button1.className = "btn btn-success";
        const icon1 = document.createElement("i");
        icon1.className = "fas fa-check";
        button1.appendChild(icon1);
        const button2 = document.createElement("button");
        button2.className = "btn btn-warning";
        button2.setAttribute("id", "warning");
        // console.log(button2);
        const icon2 = document.createElement("i");
        icon2.className = "fas fa-pencil";
        button2.appendChild(icon2);
        const button3 = document.createElement("button");
        button3.className = "btn btn-danger";
        button3.setAttribute("id", "delete");
        const icon3 = document.createElement("i");
        icon3.className = "far fa-trash-alt";
        button3.appendChild(icon3);
        const div1 = document.createElement("div");
        div1.append(button1, button2, button3);
        const li = document.createElement("li");
        li.id = item._id;
        li.append(div, div1);
        list.appendChild(li);
        console.log(list);
      });
    })
    .catch((err) => {
      console.log("Error occured while fetching the data from API");
    });
}

showList();

// Put method
// const putData={
//   completed: false,
//   name: inputOne.value,
//   priority: inputTwo.value,
//   description: inputThree.value,
// }
// axios({method:'put',url:'https://infodev-server.herokuapp.com/api/todos',
// data:putData}).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log('Error Occured')
// })

//

// Delete Data

function deleteData(id) {
  axios({
    method: "delete",
    url: `https://infodev-server.herokuapp.com/api/todos/${id}`,
  })
    .then((res) => {
      console.log("Deleted successfully");
    })
    .catch((err) => {
      console.log("Error occured");
    });
}

list.addEventListener("click", changeData);

function changeData(e) {
  //  console.log(e.target)
  if (e.target.className === "btn btn-danger") {
    console.log("Deleted successfuly");

    var deleteList = e.target.parentElement.parentElement;
  } else if (e.target.className === "far fa-trash-alt") {
    var deleteList = e.target.parentElement.parentElement.parentElement;
  }

  // console.log(deleteList);
  deleteData(deleteList.id);
  list.removeChild(deleteList);
}

// -----------------------------------------------------------------------------------------------------------

// Put Method

function putData(id) {
  const updateData = {
    completed: false,
    name: "Hello Elsa",
    priority: inputTwo.value,
    description: "Updated successfully",
  };
  console.log(inputTwo.value);

  axios({
    method: "put",
    url: `https://infodev-server.herokuapp.com/api/todos/${id}`,
    data: updateData,
  })
    .then((res) => {
      console.log("Updated successfully");
      console.log(res);
      console.log(res.data._id);
      console.log(res.data._id);
      const inputValue = document.querySelector("input[type='text']");
      inputValue.text = res.data.name;
    })
    .catch((err) => {
      console.log("Error occured");
    });
}

list.addEventListener("click", putChangeData);

function putChangeData(e) {
  //  console.log(e.target)
  if (e.target.className === "btn btn-warning") {
    console.log("Updated successfuly");

    var deleteList = e.target.parentElement.parentElement;
  } else if (e.target.className === "fas fa-pencil") {
    var deleteList = e.target.parentElement.parentElement.parentElement;
  }

  console.log(deleteList);
  putData(deleteList.id);
}
