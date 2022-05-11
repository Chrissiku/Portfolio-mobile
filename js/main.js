const sidebar = document.querySelector("header .menu ul");
const mobileMenu = document.querySelector(".menu-icon");
const aboutContent = document.querySelector("#about_content");

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

function hideMe() {
  sidebar.addEventListener("click", () => {
    sidebar.style.display = "none";
    mobileMenu.firstElementChild.classList.replace("fa-times", "fa-bars");
  });
}

mobileMenu.addEventListener("click", () => {
  if (mobileMenu.firstElementChild.classList.contains("fa-bars")) {
    sidebar.style.display = "block";
    mobileMenu.firstElementChild.classList.replace("fa-bars", "fa-times");
    hideMe();
  } else {
    sidebar.style.display = "none";
    mobileMenu.firstElementChild.classList.replace("fa-times", "fa-bars");
  }
});

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
            <li><a href="">css</a></li>
            <li><a href="">html</a></li>
            <li><a href="">bootstrap</a></li>
            <li><a href="">Ruby</a></li>
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
        <li><a href="">css</a></li>
        <li><a href="">html</a></li>
        <li><a href="">bootstrap</a></li>
        <li><a href="">Ruby</a></li>
      </ul>
    </div>
    <button type="button" id="btn${i}" class="btn">
      <span>See Project</span>
    </button>
  </div>
</div>` + fetch;
  }
}
