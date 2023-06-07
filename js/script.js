window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("navigation-bar").style.padding = "30px 10px";
    document.getElementById("website-logo").style.fontSize = "25px";
  } else {
    document.getElementsByClassName("navigation-bar").style.padding = "80px 10px";
    document.getElementById("website-logo").style.fontSize = "35px";
  }
}

// Some test functions for some test buttons
function testButton() {
    if (status == 1) {
        document.getElementById("message").innerHTML = "Sike."
        status = 0;
    } else {
        document.getElementById("message").innerHTML = "This page contains all current published projects by ShySpaceSheep.\nPlease pay attention to the tags to distinguish finished from ongoing."
        status = 1;
    }
}
