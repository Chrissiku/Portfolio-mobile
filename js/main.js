const sidebar = document.querySelector("header .menu ul");
const mobileMenu = document.querySelector(".menu-icon");
const aboutContent = document.querySelector("#about_content");
const hideModalBtn = document.querySelector(".close_btn");
const modal = document.querySelector(".popup");

const showModalBtn = document.querySelector("#btn1");

let work_post = [
  {
    title: "Multi-Post Stories 1",
    image: "images/work_img.png",
    content:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    techology: ["css", "html", "bootstrap", "Ruby"],
  },

  {
    title: "Multi-Post Stories 2",
    image: "images/work_img.png",
    content:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    techology: ["css", "html", "bootstrap", "Ruby"],
  },

  {
    title: "Multi-Post Stories 3",
    image: "images/work_img.png",
    content:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    techology: ["css", "html", "bootstrap", "Ruby"],
  },

  {
    title: "Multi-Post Stories 4",
    image: "images/work_img.png",
    content:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    techology: ["css", "html", "bootstrap", "Ruby"],
  },
];

for (let i = 0; i < work_post.length; i++) {
  let fetch = document.querySelector("#about_content").innerHTML;
  if (i % 2 !== 0) {
    aboutContent.innerHTML =
      `<div class="card">
      <div class="card-image">
        <img src="${work_post[i].image}" alt="Work image" />
      </div>
      <div class="card-detail">
        <h3>${work_post[i].title}</h3>
        <p>${work_post[i].content}</p>
        <div class="card-link">
          <ul>
          ${work_post[i].techology.map((j) => `<li>${j}</li>`)}
          </ul>
        </div>
        <button type="button" id="btn${i}" class="btn">
          <span>See Project</span>
        </button>
      </div>
    </div>
  ` + fetch;
  } else {
    aboutContent.innerHTML =
      `<div class="card pair">
  <div class="card-image">
    <img src="${work_post[i].image}" alt="Work image" />
  </div>
  <div class="card-detail">
    <h3>${work_post[i].title}</h3>
    <p>${work_post[i].content}</p>
    <div class="card-link">    
    <ul>
    ${work_post[i].techology.map((j) => `<li>${j}</li>`)}
    </ul>
    </div>
    <button type="button" id="btn${i}" class="btn">
      <span>See Project</span>
    </button>
  </div>
</div>` + fetch;
  }
}

function hideMenu() {
  sidebar.addEventListener("click", () => {
    sidebar.style.display = "none";
    mobileMenu.firstElementChild.classList.replace("fa-times", "fa-bars");
  });
}

function hideModal() {
  if ((modal.style.display = "block")) {
    modal.style.display = "none";
  }
}

hideModalBtn.addEventListener("click", () => {
  hideModal();
});

function showModal() {
  if ((modal.style.display = "nome")) {
    modal.style.display = "block";
  }
}

showModalBtn.addEventListener("click", () => {
  showModal();
});

mobileMenu.addEventListener("click", () => {
  if (mobileMenu.firstElementChild.classList.contains("fa-bars")) {
    sidebar.style.display = "block";
    mobileMenu.firstElementChild.classList.replace("fa-bars", "fa-times");
    hideMenu();
  } else {
    sidebar.style.display = "none";
    mobileMenu.firstElementChild.classList.replace("fa-times", "fa-bars");
  }
});
