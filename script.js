/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 


/* Scroll to top button */
window.addEventListener('scroll', function () {
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


/* Pop UP */
// Shows popup in 3s after load 
window.addEventListener('load', function () {
  setTimeout(
    function open(event) {
      document.querySelector(".popup").style.display = "block";
    }, 
    2000
  )
});

// Click function to remove the popup
document.querySelector("#close").addEventListener
("click", function(){
  document.querySelector(".popup").style.display = "none";
});
