let wave= document.getElementsByClassName("item-link");
let content = document.getElementsByClassName("content");

console.log(wave);
console.log(content);

function changeContentNav(element){
  let x =0;
  for(let i=0;i<wave.length;i++){
    console.log(wave[i]);
    content[i].style.display ="none";
    wave[i].classList.remove("active");
    console.log(content[i]);
    if(wave[i] == element){
      x=i;
    }
  }
  // console.log(x);
  wave[x].classList.add("active");
  content[x].style.display ="block";

}


//  Drink meny
let links = document.getElementsByClassName("drink-link");
let menus = document.getElementsByClassName("drink-menu");

function ChangeTheDrinkMenu(linkClicked) {
  let x;
  for (let i = 0; i < links.length; i++) {
    menus[i].style.display = "none";
    links[i].classList.remove("active");
    if (links[i] === linkClicked) {
      x = i;
    }
  }
  linkClicked.classList.add("active");
  console.log(x);
  menus[x].style.display = "block";
}

// document.getElementById("addevent").addEventListener("click", function() {
  //   ChangeTheDrinkMenu(this);
  // });
  

// let q = document.querySelectorAll(".drink-link")
//   for (let i = 0; i < q.length; i++) {
//     q[i].addEventListener("click", function(e) {
//       if(e.target){
//         console.log("adssssssss");
//       }
//   });
// }


// let d = document.getElementById("addevent");
// d.onclick =function(){
//   let x;
//   for (let i = 0; i < links.length; i++) {
//     menus[i].style.display = "none";
//     links[i].classList.remove("active");
//     if (links[i] === linkClicked) {
//       x = i;
//     }
//   }
//   linkClicked.classList.add("active");
//   console.log(x);
//   menus[x].style.display = "block";
// }

//  ******************************************************
//  ********************************************************* 


// /* video in background  */
// // Get the video
// var video = document.getElementById("myVideo");


// // Pause and play the video, and change the button text
// function myFunction() {
  //   if (video.paused) {
    //     video.play();
    //     btn.innerHTML = "Pause";
    //   } else {
      //     video.pause();
      //     btn.innerHTML = "Play";
      //   }
      // }
      
// let playV = document.getElementsByClassName("fa-play");
// // let pl =document.getElementById('play');
// let pauseV = document.getElementsByClassName("fa-pause");
// let video = document.getElementsByClassName("cl");


// console.log(pl);
// window.onload(alert(video));





