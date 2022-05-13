const sidebar = document.querySelector('header .menu ul');
const mobileMenu = document.querySelector('.menu-icon');
const aboutContent = document.querySelector('#about_content');
const modal = document.querySelector('#popup');

function showModal() {
  modal.style.display = 'block';
}

const workPost = [
  {
    title: 'Multi-Post Stories 1',
    image:
      'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg',
    content:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.n computer programming, quotes contain text or other data. For example...',
    techology: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://chrissiku.github.io/Portfolio-mobile/',
    source: 'https://github.com/Chrissiku/Portfolio-mobile',
  },

  {
    title: 'Multi-Post Stories 2',
    image:
      'https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/01/web_dev_pillar_page.jpg',
    content:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.n computer programming, quotes contain text or other data. For example...',
    techology: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://chrissiku.github.io/Portfolio-mobile/',
    source: 'https://github.com/Chrissiku/Portfolio-mobile',
  },

  {
    title: 'Multi-Post Stories 3',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    content:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.n computer programming, quotes contain text or other data. For example...',
    techology: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://chrissiku.github.io/Portfolio-mobile/',
    source: 'https://github.com/Chrissiku/Portfolio-mobile',
  },

  {
    title: 'Multi-Post Stories 4',
    image: 'http://www.parzlogic.com/wp-content/uploads/2017/10/web-dev.jpg',
    content:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.n computer programming, quotes contain text or other data. For example...',
    techology: ['css', 'html', 'bootstrap', 'Ruby'],
    live: 'https://chrissiku.github.io/Portfolio-mobile/',
    source: 'https://github.com/Chrissiku/Portfolio-mobile',
  },
];

// Display secton content dynamicaly
for (let i = 0; i < workPost.length; i += 1) {
  const fetch = aboutContent.innerHTML;
  if (i % 2 !== 0) {
    aboutContent.innerHTML = `<div class="card">
      <div class="card-image">
        <img src="${workPost[i].image}" alt="Work image" />
      </div>
      <div class="card-detail">
        <h3>${workPost[i].title}</h3>
        <p>${workPost[i].content}</p>
        <div class="card-link">
          <ul>
          ${workPost[i].techology.map((j) => `<li>${j}</li>`).join('')}
          </ul>
        </div>
        <button type="button" id="btn-${i}" class="btn" data-open="popup">
          <span>See Project</span>
        </button>
      </div>
    </div>
  ${fetch}`;
  } else {
    aboutContent.innerHTML = `<div class="card pair">
  <div class="card-image">
    <img src="${workPost[i].image}" alt="Work image" />
  </div>
  <div class="card-detail">
    <h3>${workPost[i].title}</h3>
    <p>${workPost[i].content}</p>
    <div class="card-link">    
    <ul>
    ${workPost[i].techology.map((j) => `<li><a>${j}</a></li>`).join('')}
    </ul>
    </div>
    <button type="button" id="btn-${i}" class="btn" data-open="popup">
      <span>See Project</span>
    </button>
  </div>
</div>${fetch}`;
  }
}

// Show and hide Menu

function hideMenu() {
  sidebar.addEventListener('click', () => {
    sidebar.style.display = 'none';
    mobileMenu.firstElementChild.classList.replace('fa-times', 'fa-bars');
  });
}
mobileMenu.addEventListener('click', () => {
  if (mobileMenu.firstElementChild.classList.contains('fa-bars')) {
    sidebar.style.display = 'block';
    mobileMenu.firstElementChild.classList.replace('fa-bars', 'fa-times');
    hideMenu();
  } else {
    sidebar.style.display = 'none';
    mobileMenu.firstElementChild.classList.replace('fa-times', 'fa-bars');
  }
});

function hideModal() {
  modal.style.display = 'none';
}

// Display specific post to the popup

// Render dynamic section content in the popup_window

for (let a = 0; a < workPost.length; a += 1) {
  const showModalBtn = document.querySelectorAll(`[id=btn-${a}]`);

  showModalBtn.forEach((btnShow) => {
    btnShow.addEventListener('click', () => {
      showModal();
      modal.innerHTML = `
      <div class="modal">
              <div class="modal-head">
                <h1 id="post-title">${workPost[a].title}</h1>
                <button type="button" class="close_btn">
                  <i class="fa fa-times"></i>
                </button>
              </div>
              <div class="modal-content">
                <img
                  id="post-image"
                  src="${workPost[a].image}"
                  alt="work image"
                />
                <div class="cont1">
                  <p id="post-text">${workPost[a].content}</p>
                  <ul id="post-techno">
                    ${workPost[a].techology
    .map((k) => `<li><a href="">${k}</a></li>`)
    .join('')}
                  </ul>
                  <div class="modal-btn">
                    <button type="button" class="btn">
                      <a href="${
  workPost[a].live
}">See Live</a>&nbsp;&nbsp;<i class="fa-solid fa-power-off"></i>
                    </button>
                    <button type="button" class="btn">
                    <a href="${
  workPost[a].source
}">See Source</a>&nbsp;&nbsp;<i class="fa-brands fa-github"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
      `;
      const hideModalBtn = document.querySelector('.close_btn');
      hideModalBtn.addEventListener('click', () => {
        hideModal();
      });
    });
  });
}
// Form Validation

const form = document.querySelector('#user_form');
const Alert = document.querySelector('.alert');
const email = document.querySelector('#email');
const Mybtn = document.querySelector('#submit');

function validateEmailAddress() {
  const regex = /[A-Z]/;
  const emailContent = email.value;
  if (regex.test(emailContent)) {
    Alert.style.display = 'block';
    Mybtn.disabled = true;
    Alert.innerHTML = 'Your email address should not contain uppercase letters (lowercase only !)';
  } else {
    Alert.style.display = 'none';
    Alert.innerHTML = '';
    Mybtn.disabled = false;
  }
}

email.addEventListener('input', () => {
  validateEmailAddress();
});

form.addEventListener('submit', () => {
  validateEmailAddress();
});

// preserve data in the browser
// -------------------------------
const userName = document.querySelector("#user_name");
const message = document.querySelector("#msg");
// email variable is already declared on form validation part


function fill_LocalStorage() {
  form.addEventListener("input", () => {
    // Create a localStore for typed informatin
    const userInput = {
      user_name: userName.value,
      email: email.value,
      your_message: message.value,
    };
    // Store users typed informations in my localStorage (userInput)
    localStorage.setItem("userInput", JSON.stringify(userInput));
  });
}
function getLocalStorage() {
  const local_userData = JSON.parse(localStorage.getItem("userInput"));

  //  pre-filled user input with localStorage's information.
  userName.value = local_userData.user_name;
  email.value = local_userData.email;
  message.value = local_userData.your_message;
}
fill_LocalStorage();
getLocalStorage();
