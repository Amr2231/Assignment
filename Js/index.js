const textarea = 100;
$(".openNav").click(function(){
  $("#Menu").animate({ width:'250px'},50)
  .animate({ left:'0'},0 , function() {
    $('#content').animate({ marginLeft :'250px'},400)   
    $('#openNav').animate({ marginLeft :'250px'},400)   
});

})
$('.closebtn').click(function(){
  $("#Menu").animate({ width:'0px'},50)
  .animate({ left:'-20%'},0, function() {
    $('#content').animate({ marginLeft :'0px'},400)  
    $('#openNav').animate({ marginLeft :'0px'},400)   

})
})
//  end openNavBar
$('.toggle').click(function(){
  $('.text-1').not($(this).next()).slideUp(500);
  // يستبعد العنصر الذي يأتي بعد.
  $(this).next().slideToggle(500);
  // بيعيد تكرار هذا العنصر
})



// let q = new Date()
// console.log(q.getTime()/1000);


// function to counttime 
function Count(Down) {
  let date = new Date(Down);
  // constructor function
  // And put your date to count it
  
  date = (date.getTime()/1000);
  // millesecoonds


  // to define the time 
  let Time = new Date();
  Time = (Time.getTime()/1000);
  // constructor function
  // and current time
  CalculateTime = (date- Time);
  
 let days = Math.floor( CalculateTime / (24*60*60));
 let hours = Math.floor((CalculateTime - (days * (24*60*60))) / 3600);
 let mins = Math.floor((CalculateTime - (days * (24*60*60)) - (hours * 3600 )) / 60);
 let secs = Math.floor((CalculateTime - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
  $(".days").text(`${days} D`);
  $(".hours").text(`${hours} h`);
  $(".minutes").text(`${ mins } m`);
  $('.seconds').text(`${ secs} s`)
  // To calculate day , hours , mins and secs and put in html 
  setInterval(function(){
    Count(Down);
   });
  //  method calls a function at specified intervals (in milliseconds).
  //  To execute the function
}
window.onload = function() {
  Count("20 october 2024 10:56:00");
}



$('textarea').keyup(function() {
  const length = $(this).val().length;
  const Amount = textarea-length;
  if(Amount<=0)
            {
                 $("#character").text("your available character finished");
                //  Getter
            }
        else{
        $("#character").text(Amount);
                //  Getter
        }
})