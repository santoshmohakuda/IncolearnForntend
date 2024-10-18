
/*-----------------for mobile view button gor header------------------*/
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navItemEls = document.querySelectorAll('.nav__item');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navItemEls.forEach(navItemEl => {
  navItemEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
  });
});

/*-----------------for testimonial------------------*/
var swiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination-click',
    clickable: true,
  },

  breakpoints: {

    150: {
      slidesPerView: 1,
    },

    250: {
      slidesPerView: 1,
    },

    350: {
      slidesPerView: 1,
    },

    500: {
      slidesPerView: 1,
    },

    780: {
      slidesPerView: 1,
    },
    1300: {
      slidesPerView: 1,
    },
    1630: {
      slidesPerView: 1,
    }
  }

});


/*----------------code for achv-section---------------*/
function increaseCount(id, end) {
  let count = 0;
  const element = document.getElementById(id);
  if (!element) return; // If element is not found, exit the function
  const interval = setInterval(() => {
    count++;
    element.textContent = count.toLocaleString();
    if (count === end) clearInterval(interval);
  }, 20);
}

// Update counts on page load
window.onload = function () {
  increaseCount('studentsCount', 1000);
  increaseCount('graduatesCount', 658);
  increaseCount('placedCount', 347);
  increaseCount('facultiesCount', 50);
};







/*---------------------accordion-functionality--------------------------*/


// JavaScript to handle the accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});



/*--------------Code for faq section----------------*/

const questionContainers = document.querySelectorAll('.question-container');

questionContainers.forEach(questionContainer => {
  questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle('active');
  });
});


/*-----------------------------------*/

function openBlogPage(element) {
  const blogId = element.getAttribute('data-blog-id');
  window.location.href = `nested-blog.html?id=${blogId}`;
}

/*--------------------mission-vision-values---------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const tabImage = document.getElementById("tab-image");
  const imagePaths = {
    "mission-tab": "./public/images/expert-1.jpg",
    "vision-tab": "./public/images/expert-2.jpg",
    "values-tab": "./public/images/expert-3.jpg"
  };

  $('#myTab a').on('shown.bs.tab', function (e) {
    const tabId = e.target.id;
    tabImage.src = imagePaths[tabId];
  });
});

/*------------------Code-for-b--------------------------*/


/*-----------------for modal enqiry-----------*/

document.addEventListener('DOMContentLoaded', (event) => {
  const enquiryForRadios = document.querySelectorAll('input[name="enquiryFor"]');
  const companyMembersField = document.getElementById('companyMembers');

  enquiryForRadios.forEach(radio => {
    radio.addEventListener('change', function () {
      if (this.value === 'company') {
        companyMembersField.style.display = 'block';
      } else {
        companyMembersField.style.display = 'none';
      }
    });
  });
});


/*---------------------------------------*/
/*-------------------------privacy-policy-tab-------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('.custom-nav-link');
  const contents = document.querySelectorAll('.tab-content > div');

  tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
      event.preventDefault();

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(content => {
        if (content.id === tab.getAttribute('href').substring(1)) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
});

/*----------------more-dropdown-toggle----------------*/

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdown.addEventListener('click', function (event) {
      event.stopPropagation();
      dropdownMenu.classList.toggle('show');
  });

  document.addEventListener('click', function (event) {
      if (!dropdown.contains(event.target)) {
          dropdownMenu.classList.remove('show');
      }
  });
});