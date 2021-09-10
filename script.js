const DOM = {
  runFun() {
    let input, value, ul, li, a, test;

    input = document.querySelector("#myInput");
    value = input.value.toUpperCase();
    ul = document.querySelector("#myUl");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      test = a.textContent || a.innerText;

      if (test.toUpperCase().indexOf(value) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  },

  loadDate() {
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    document.querySelector(".date").innerHTML = nowYear;
  },
};
