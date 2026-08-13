/*=========================================
MEGNA GROUP
Luxury Portfolio
=========================================*/


//===========================

const loader=document.querySelector("#loader");

window.addEventListener("load",()=>{

setTimeout(()=>{
    loader.style.opacity="0";
    loader.style.visibility="hidden";
},500);

});


//===========================

const progress=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

let winScroll=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

progress.style.width=scrolled+"%";

});
const typing=document.getElementById("typing");

const words=[

"Graphic Designer",

"Meta Ads Expert",

"Shopify Designer",

"Creative Director"

];

let wordIndex=0;

let letterIndex=0;

let remove=false;

function type(){

let current=words[wordIndex];

if(!remove){

typing.textContent=current.substring(0,letterIndex++);

if(letterIndex>current.length){

remove=true;

setTimeout(type,1300);

return;

}

}

else{

typing.textContent=current.substring(0,letterIndex--);

if(letterIndex<0){

remove=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(type,100);

}

type();
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});
const lenis=new Lenis({

duration:1.4,

smoothWheel:true

});

function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}

requestAnimationFrame(raf);
gsap.from(".hero-left",{

y:120,

opacity:0,

duration:1.4,

ease:"power4.out"

});

gsap.from(".portrait-card",{

x:150,

opacity:0,

duration:1.8,

delay:.4,

ease:"expo.out"

});
gsap.utils.toArray("section").forEach(sec=>{

gsap.from(sec,{

opacity:0,

y:120,

duration:1,

scrollTrigger:{

trigger:sec,

start:"top 80%"

}

});

});
document.querySelectorAll(".hero-stats h3").forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;

let speed=target/100;

let update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

}

update();

});
const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-150;

const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});
// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("mobile-open");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("mobile-open");
        });
    });
}
