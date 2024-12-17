/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
document.addEventListener("DOMContentLoaded", function () {
  var prevScrollpos = window.scrollY;

  window.addEventListener("scroll", function () {
      var currentScrollPos = window.scrollY;

      if (prevScrollpos > currentScrollPos) {
          // Scrolling up
          document.getElementById("navbar").classList.remove("hidden");
      } else {
          // Scrolling down
          document.getElementById("navbar").classList.add("hidden");
      }

      prevScrollpos = currentScrollPos;
  });
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
