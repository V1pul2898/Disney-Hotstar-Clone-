//Slider
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slider');
    let index = 0;

    function cloneSlides() {
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            carousel.appendChild(clone);
        });
    }

    function showSlide() {
        index++;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(${-index * 100}%)`;

        if (index >= slides.length) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                carousel.style.transform = 'translateX(0)';
                index = 0;
            }, 500);
        }
    }

    cloneSlides();

    setInterval(showSlide, 3000); // Adjust the interval time as needed
});






//video cards
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const video = card.querySelector('video');
        
        card.addEventListener('mouseenter', () => {
            video.play();
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
           // video.currentTime = 0; // Optional: Reset the video to the start
        });
    });
});


// //card sliders
// let cardContainers =[...document.querySelectorAll('.card-container')];
// let preBtns =[...document.querySelectorAll('.pre-btn')];
// let nxtBtns =[...document.querySelectorAll('.nxt-btn')];

// cardContainers.forEach((items,i)=>{
//     let containerDimensions= item.getBoundingClientRect();
//     let containerWidth= containerDimensions.width;

//     nxtBtns[i].addEventListener('click',()=>{
//         item.scrollLeft += containerWidth -200;
//     });
//     preBtns[i].addEventListener('click',()=>{
//         item.scrollLeft += containerWidth +200;
//     });
// });









//Watchlist alert
function showFullscreenAlert() {
    // Create the overlay div
    const overlay = document.createElement('div');
    overlay.id = 'fullscreen-alert';
    overlay.innerHTML = `
        <div class="alert-content">
            <h2>Added Successfully!</h2>
            <p>The show has been added to your watchlist.</p>
            <button onclick="closeFullscreenAlert()">Close</button>
        </div>
    `;
    document.body.appendChild(overlay);

    // Show the alert with a fade-in effect
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
}

function closeFullscreenAlert() {
    const overlay = document.getElementById('fullscreen-alert');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.remove();
    }, 300);
}

