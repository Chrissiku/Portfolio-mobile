const sidebar = document.querySelector("header .menu ul");
const mobileMenu = document.querySelector(".menu-icon");
const aboutContent = document.querySelector("#about_content");
let work_content = [
  " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.",
  " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.",
  " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.",
  " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.",
];
let work_images = [
  "images/work_img.png",
  "images/work_img.png",
  "images/work_img.png",
  "images/work_img.png",
];

let work_skills = ["css", "html", "bootstrap", "Ruby"];

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

for (let i = 0; i < work_content.length; i++) {
  let fetch = document.querySelector("#about_content").innerHTML;
  if (i % 2 !== 0) {
    aboutContent.innerHTML =
      `<div class="card">
      <div class="card-image">
        <img src="${work_images[i]}" alt="Work image" />
      </div>
      <div class="card-detail">
        <h3>Multi-Post Stories ${i + 1}</h3>
        <p>${work_content[i]}</p>
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
    <img src="${work_images[i]}" alt="Work image" />
  </div>
  <div class="card-detail">
    <h3>Multi-Post Stories ${i + 1}</h3>
    <p>${work_content[i]}</p>
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
