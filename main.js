const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");


nextBtn.addEventListener("click", showNextImage);

prevBtn.addEventListener("click", showPrevImage);

const images =
Array.from(document.getElementsByClassName("carosel"));
const totalImages = images.length;

let currentImageIndex = 0; // index of current image



function addTransitionEfifectToImages()
{
    images.forEach((img) => {
        img.style.tansition = "transform 0.8s ease";
    });
}

transform: translateX(50px);
transform: translateX(-30px);
transform : translateX(100%);
transform : translateX(-100%);

// reset to first image
function showNextImage()
{
    if (currentImageIndex == totalImages - 1)
    {
      resetCarousel();
      return;
    }


if (currentImageIndex === 0) addTransitionEffectToImages();
  images.forEach((img) => {
    img.style.transform = 'translate(${(currentImageIndex + 1) * -100}%)';
    });
  currentImageIndex++;
}

function resetCarousel()
{
    images.forEach((img) => {
      img.style.transition = "none";
      img.style.transform = 'translate(0)';
   });
   currentImageIndex = 0;

}  

function showPrevImage() {
    if (currentImageIndex == 0) return;
    images.forEach((img) => {
      img.style.transform = 'translateX(${(currentImageIndex - 1) * -100}%)';
   });
   currentImageIndex --;

 
