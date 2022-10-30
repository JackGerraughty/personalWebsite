const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'Reliability', 'Node.js', 'Full Stack',
    'npm', 'MySQL', 'Data Structures',
];

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;

