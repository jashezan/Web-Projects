const form = document.getElementById("form");
const input = document.getElementById("input");
const posts = document.getElementById("posts");
const msg = document.getElementById("msg");
let data = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

const formValidation = () => {
  if (input.value === "") {
    msg.innerText = "Post Can't be Blank";
    console.error("Failure");
  } else {
    msg.innerText = "";
    acceptData();
  }
};

const acceptData = () => {
  data["text"] = input.value;
  createPost()
};

const createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value= '';
};

const editPost = (obj)=>{
  input.value = obj.parentElement.previousElementSibling.innerHTML;
  obj.parentElement.parentElement.remove();
}

const deletePost = (obj)=>{
  obj.parentElement.parentElement.remove();
}
