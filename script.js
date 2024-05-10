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