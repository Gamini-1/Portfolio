// toggle navbar on mobile devices
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showButton");
    const div = document.getElementById("myDiv");

    button.addEventListener("click", function () {
        div.classList.toggle("hidden");
    });
});


// logo button
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");
    const elements = document.getElementsByClassName("myelement");
    let isHidden = false;
    

    button.addEventListener("click", function () {
        // Iterate through each element and toggle the class
        for (const element of elements) {
            element.classList.toggle("hidden");
          
        }
        isHidden = !isHidden;
        button.textContent = isHidden ? "view less" : "view more";
 
    });


});

// social button

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("postButton");
    const elements = document.getElementsByClassName("socialelement");
    let isHidden = false;
    

    button.addEventListener("click", function () {
        // Iterate through each element and toggle the class
        for (const element of elements) {
            element.classList.toggle("hidden");
          
        }
        isHidden = !isHidden;
        button.textContent = isHidden ? "view less" : "view more";
 
    });


});

// einvites
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('imageCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }
});


// mockup
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('imageCarousel2');
    const prevBtn = document.getElementById('prevBtn2');
    const nextBtn = document.getElementById('nextBtn2');
    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }
});




