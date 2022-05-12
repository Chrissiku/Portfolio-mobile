const sidebar = document.querySelector('header .menu ul');
const mobileMenu = document.querySelector('.menu-icon');
const aboutContent = document.querySelector('#about_content');

const workPost = [
  {
    title: 'Multi-Post Stories',
    image: 'images/work_img.png',
    content:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techology: ['css', 'html', 'bootstrap', 'Ruby'],
  },

  {
    title: 'Multi-Post Stories 2',
    image: 'images/work_img.png',
    content:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techology: ['css', 'html', 'bootstrap', 'Ruby'],
  },

  {
    title: 'Multi-Post Stories 3',
    image: 'images/work_img.png',
    content:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techology: ['css', 'html', 'bootstrap', 'Ruby'],
  },

  {
    title: 'Multi-Post Stories 4',
    image: 'images/work_img.png',
    content:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techology: ['css', 'html', 'bootstrap', 'Ruby'],
  },
];

for (let i = 0; i < workPost.length; i += 1) {
  const fetch = document.querySelector('#about_content').innerHTML;
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

// Show and Hide Detail popup

const hideModalBtn = document.querySelector('.close_btn');
const modal = document.querySelector('.popup');

function hideModal() {
  modal.style.display = 'none';
}

hideModalBtn.addEventListener('click', () => {
  hideModal();
});

function showModal() {
  modal.style.display = 'block';
}

// Display specific post to the popup

for (let i = 0; i < workPost.length; i += 1) {
  const showModalBtn = document.querySelectorAll(`[id=btn-${i}]`);
  const postTitle = document.getElementById('post-title');
  postTitle.textContent = workPost[0].title;

  showModalBtn.forEach((btnShow) => {
    btnShow.addEventListener('click', () => {
      showModal();
    });
  });
}
