let temp = 0;
let arr = document.getElementsByClassName("home")[0].children;

function buttonRight() {
  for (i = 0; i < arr.length; i++) {
    arr[i].style.zIndex = 0;
  }
  if (temp == arr.length-1) {
    temp = 0;
  } else {
    temp++;
  }
  arr[temp].style.zIndex = 1;
  console.log(arr[temp].style.zIndex);
}

function buttonLeft() {
  for (i = 0; i < arr.length; i++) {
    arr[i].style.zIndex = 0;
  }
  if (temp == 0) {
    temp = arr.length-1;
  } else {
    temp--;
  }
  arr[temp].style.zIndex = 1;
}
