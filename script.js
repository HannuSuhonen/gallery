const DOT_SYMBOL = "•"
const images = Array.from(document.getElementsByTagName("img"));

let currentPageIndex = 0;

const highLightDot = function(currentPage){
    const dots = Array.from(document.querySelectorAll(".dot"));
    dots.forEach((element,index) => {
        if(index === currentPage){
            element.style.color = "black"
        }else{
            element.style.color = "gray";
        }
    });
}

const displayImage = function(currentPage){
    currentPageIndex = currentPage;
    highLightDot(currentPage);
    images.forEach((element,index) => {
        if(index === currentPage){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    });
}

const imgForwardBtn = document.querySelector(".img-forward");
imgForwardBtn.addEventListener("click", () => {
    stopSlideshow();
    if(currentPageIndex >= images.length - 1) return;
    currentPageIndex += 1;
    displayImage(currentPageIndex);
    startSlideshow();

})

const imgBackwardBtn = document.querySelector(".img-backward");
imgBackwardBtn.addEventListener("click", () => {
    stopSlideshow();
    if(currentPageIndex <= 0) return;
    currentPageIndex -= 1;
    displayImage(currentPageIndex);
    startSlideshow();
})

const createDots = function(){
    const frame = document.querySelector(".dots")
    images.forEach((element,index) => {
        const span = document.createElement("span");
        span.textContent = DOT_SYMBOL;
        span.classList.add("dot");
        frame.appendChild(span);
        span.onclick = () => {
            displayImage(index);
        };
    });
}

function startSlideshow() {
    setInterval(() => {
        currentPageIndex = (currentPageIndex + 1) % images.length;
        displayImage(currentPageIndex);
    }, 5000);
}

function stopSlideshow() {
    clearInterval(slideshowTimer);
}

createDots();
displayImage(currentPageIndex);
startSlideshow();