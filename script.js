//All related to dropdown menu

const buttonDrop = document.querySelector(".dropbtn");

buttonDrop.addEventListener("click", () =>
{
	document.querySelector(".drowpdown-items").classList.toggle("show");
});

window.addEventListener("click", (e) =>
{
	if (!e.target.classList.contains("dropbtn"))
	{
		const drowpdown = document.getElementsByClassName("drowpdown-items");
		for(let i = 0; i < drowpdown.length; i++)
			drowpdown[i].classList.remove("show");
	}
});


//All related to image carousel

let slideIndex = 1;
const dots = document.querySelectorAll(".dot");
showSlides(slideIndex);

document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));
dots.forEach(() => addEventListener("click", (e) => currentSlide(parseInt(e.target.dataset.number))));

function plusSlides(n)
{
	showSlides(slideIndex += n);
}

function currentSlide(n) 
{
	if (isNaN(n))
		return;
	slideIndex = n;
	showSlides(n);
}

function showSlides() 
{
	let i;
	let slides = document.getElementsByClassName("slide-img");
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 5000); // Change image every 2 seconds
}