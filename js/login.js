$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  if (userName == "Seraphine" && pwd == "KiyoIsNice") {
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "html/birthday-counter/index.html";
    }, 2000);
  } else {
    alert("Wrong Password");
  }
});
