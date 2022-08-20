var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
let pone = document.getElementById("pone");
let ptwo = document.getElementById("ptwo");
let pthree = document.getElementById("pthree");
let pfour = document.getElementById("pfour");

let nodisplay = (pone.style.display = "none");
nodisplay = true;

one.addEventListener("click", () => {
  ptwo.style.display = "none";
  pthree.style.display = "none";
  pfour.style.display = "none";
  pone.style.display = "block";
});
two.addEventListener("click", () => {
  pone.style.display = "none";
  pthree.style.display = "none";
  pfour.style.display = "none";
  ptwo.style.display = "block";
});
three.addEventListener("click", () => {
  ptwo.style.display = "none";
  pthree.style.display = "block";
  pfour.style.display = "none";
  pone.style.display = "none";
});
four.addEventListener("click", () => {
  ptwo.style.display = "none";
  pthree.style.display = "none";
  pfour.style.display = "block";
  pone.style.display = "none";
});



one.addEventListener("click", () => {});

// one.addEventListener('click',()=>{
// let pthree= document.getElementById('pone').style.display='block';
// })
// one.addEventListener('click',()=>{
// let pfour= document.getElementById('pone').style.display='block';
// })
$(".go");
