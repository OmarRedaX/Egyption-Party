/// <reference types="../@types/jquery" />

let daysInfo = document.getElementById("daysInfo");
let hoursInfo = document.getElementById("hoursInfo");
let minutesInfo = document.getElementById("minutesInfo");
let secondsInfo = document.getElementById("secondsInfo");
let area = document.getElementById("area")
let mySpan = document.getElementById("mySpan")

//   Dec 31,2021 23:59:59

let dateOfEvent = new Date("Jul 20,2024 23:59:59");

let conter = setInterval(() => {
  let dateNow = new Date().getTime();

  let deffBdataEvent = dateOfEvent - dateNow;
  //get days
  let days = Math.floor(deffBdataEvent / (1000 * 60 * 60 * 24));
  //get hours
  let hours = Math.floor(
    (deffBdataEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  //get minutes
  let minutes = Math.floor((deffBdataEvent % (1000 * 60 * 60)) / (1000 * 60));
  //get seconds
  let seconds = Math.floor((deffBdataEvent % (1000 * 60)) / 1000);

  daysInfo.innerHTML = days < 10 ? `0${days} D` : `${days} D`;
  hoursInfo.innerHTML = hours < 10 ? `0${hours} h` : `${hours} h`;
  minutesInfo.innerHTML = minutes < 10 ? `0${minutes} m` : `${minutes} m`;
  secondsInfo.innerHTML = seconds < 10 ? `0${seconds} s` : `${seconds} s`;
  if (deffBdataEvent < 0) {
    clearInterval(conter.l);
  }
}, 1000);

area.addEventListener("keyup",()=>{
   mySpan.textContent = 100 - area.value.length;
   if(mySpan.textContent < 0){
    mySpan.innerHTML = `You exceeded the minimum`
   }
})





$(".close").on("click", function () {
  $(".asideOpen").animate({ width: "-30%" }, 3000, function () {
    // $(".asideOpen").removeClass("d-flex")
    $(".asideOpen").addClass("d-none");
    // $(".asideOpen").css("visibility","hidden")
  });
  $(".bars").animate({ left: "0" }, 1300);
});

$(".openAwesome").on("click", function () {
  $(".asideOpen").animate({ width: "10%" }, 2000, function () {});
  $(".bars").animate({ left: "10%" }, 2000, function () {
    $(".asideOpen").removeClass("d-none");
  });

  // $(".asideOpen").animate({width:"10%"},1000,function(){
  //     $(".bars").animate({left:"10%"},1000,function(){
  //         $(".asideOpen").removeClass("d-none")
  //     // $(".asideOpen").css("visibility","visible")

  //     })
  // })
});

// $(".openAwesome").on("click", function(){
//     $(".asideOpen").removeClass("d-none").animate({width: "10%"}, 2000, function(){
//         $(".bars").animate({left: "10%"}, 2000);
//     });
// });
//------------------------------------------------------
$(".singerOne").on("click", function () {
  $(".singerText").slideToggle(600);
});
$(".singerTwo").on("click", function () {
  $(".singerTwoText").slideToggle(600);
});
$(".singerThree").on("click", function () {
  $(".singerThreeText").slideToggle(600);
});
$(".singerFoure").on("click", function () {
  $(".singerFoureText").slideToggle(600);
});
$(function () {
  $(".singerTwoText").slideToggle(1);
  $(".singerThreeText").slideToggle(1);
  $(".singerFoureText").slideToggle(1);
});
