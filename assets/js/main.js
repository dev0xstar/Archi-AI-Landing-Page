const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

mobileMenuIcon.addEventListener('click', () => {
    sidebar.classList.add('open'); // Show the sidebar
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open'); // Hide the sidebar
});


// let currentIndex = 0;
// const slides = document.querySelectorAll('.box');
// const dots = document.querySelectorAll('.dot');
// const isMobile = window.innerWidth <= 767; // Check if the screen is mobile size

// function updateSlider() {
//     const slideWidth = isMobile ? 100 : 50; // 100% for mobile, 50% for desktop
//     const offset = -currentIndex * slideWidth;

//     document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

//     dots.forEach((dot, index) => {
//         if (index === currentIndex) {
//             dot.classList.add('active');
//         } else {
//             dot.classList.remove('active');
//         }
//     });
// }



// function moveToNext() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateSlider();
// }

// function moveToPrev() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     updateSlider();
// }

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentIndex = index;
//         updateSlider();
//     });
// });

// // Auto slide every 3 seconds
// setInterval(moveToNext, 3000);

// updateSlider();
