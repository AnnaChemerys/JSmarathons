const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');
burger.addEventListener('click', () => {
    navigation.classList.add('navigation_active');
});

navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation_active');
});

try{
    const mute = document.querySelector('.mute__checkbox');
    const audio = new Audio('audio/waterTower.mp3');

    const checkMute = () => {
        if (mute.checked) {
            audio.play().catch(() => {
                mute.checked = false;
            });
        } else {
            audio.pause();
        }
    };

    if (mute) {
        setTimeout(checkMute, 2000);
    }

    mute.addEventListener('change', checkMute);
} catch {
    console.log('No music on this page');
}

try {
    const sliderThumbs = new Swiper('.slider-thumbs', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: true,
        loopedSlides: 4,
    });

    sliderThumbs.on('click', (swiper) => {
        swiper.slideTo(swiper.clickedIndex)
    })

    const sliderMain = new Swiper('.slider-main', {
        loop: true,
        spaceBetween: 10,
        loopedSlides: 4,
    });

    sliderThumbs.controller.control = sliderMain;
    sliderMain.controller.control = sliderThumbs;

    const videos = document.querySelectorAll('video');
    sliderMain.on('slideChange', () => {
        for (let i = 0; i < videos.length; i += 1) {
            videos[i].pause();
        }
    });

    const pagination = document.querySelector('.pagination');
    const paginationButton = document.querySelector('.pagination__arrow');

    paginationButton.addEventListener('click', () => {
        pagination.classList.toggle('pagination_active')
    })

} catch {
    console.log('This page doesn\'t have slider')
}

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".example");

function toggleModal() {
modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
            }
        }

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick); 


const btn = document.querySelector(".button-stars");
const post = document.querySelector(".post-form");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit-stars-form");

btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = () => {
        widget.style.display = "block";
        post.style.display = "none";
    }
    return false;
}