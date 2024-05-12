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
showSlides(slideIndex);

document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));

function plusSlides(n)
{
	showSlides(slideIndex += n);
}

function showSlides(n)
{
	let i;
	const slides = document.getElementsByClassName("slide-img");
	const dots = document.getElementsByClassName("dot");
	if (n > slides.length)
		slideIndex = 1;
	if (n < 1)
		slideIndex = slides.length;
	for (i = 0; i < slides.length; i++)
		slides[i].style.display = "none";
	for (i = 0; i < dots.length; i++)
		dots[i].className = dots[i].className.replace(" active", "");
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}