window.onload = function() {
  alert("Welcome to Heart Health Crowdfunding!");
};

window.addEventListener('load', function() {
  var popupWindow = window.open("", "_blank", "width=400,height=300");
  popupWindow.document.write("<h1>Important Message!</h1>");
  popupWindow.document.write("<p>We care about your heart health. Stay informed!</p>");
});
