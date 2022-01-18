const parallax1 = document.getElementById("parallax1");

window.addEventListener("scroll", function()
{
  let offset = window.pageYOffset;
  parallax1.style.backgroundPositionY =  70 + offset * 0.7 + "px";

})

