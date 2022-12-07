let name = document.querySelector("#search");
let regex = /[\!\@\#\$\%\&\(\)\^\*\`]/g; // регулярка !@#$%^&*()

name.oninput = function () {
  this.value = this.value.replace(regex, "");
};
