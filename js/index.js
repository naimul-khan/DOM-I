const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navigation = document.querySelectorAll('nav a'); 
console.log(navigation);

const navLinksArray = Array.from(navigation);
console.log(navLinksArray); 

navLinksArray[0].innerText = "Services";
navLinksArray[1].innerText = "Product";
navLinksArray[2].innerText = "Vision";
navLinksArray[3].innerText = "Features";
navLinksArray[4].innerText = "About";
navLinksArray[5].innerText = "Contact";

const jumboTron = document.querySelector(".cta-text"); 
jumboTron.querySelector('h1').innerText = "DOM\nIS\nAWESOME";
jumboTron.querySelector('button').textContent = "Get Started";

const jumboImage = document.querySelector('#cta-img'); 
jumboImage.src = "/img/header-img.png";
console.log(jumboImage);

const mainContent = document.querySelector('.main-content');
const topContent  = mainContent.firstElementChild; 

const featuresContent = topContent.firstElementChild;
featuresContent.querySelector('h4').textContent = 'Features';
featuresContent.querySelector('p').textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const aboutContent = featuresContent.nextElementSibling; 
aboutContent.querySelector('h4').textContent = 'About';
aboutContent.querySelector('p').innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const midImg = topContent.nextElementSibling; 
midImg.src = '/img/mid-page-accent.jpg';

const bottomContent = midImg.nextElementSibling; 

const servicesContent = bottomContent.firstElementChild; 
servicesContent.querySelector('h4').textContent = "Services";
servicesContent.querySelector('p').textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const productContent = servicesContent.nextElementSibling; 
productContent.querySelector('h4').textContent = "Product";
productContent.querySelector('p').textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const visionContent = productContent.nextElementSibling; 
visionContent.querySelector('h4').textContent = "Vision";
visionContent.querySelector('p').textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const contact = document.querySelector('.contact'); 
contact.querySelector('h4').innerText = "Contact"; 

const contactAddress = contact.querySelector('p');
contactAddress.textContent = "123 Way 456 Street, \n Somewhere, USA";

const contactPhone = contactAddress.nextSibling;
contactPhone.textContent = "1 (888) 888-8888";

const contactEmail = contactPhone.nextSibling; 
contactEmail.textContent = 'sales@greatidea.io';

const footer = document.querySelector('footer'); 
footer.querySelector('p').innerText = 'Copyright Great Idea! 2018';





