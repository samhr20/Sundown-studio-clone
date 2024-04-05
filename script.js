// smooth scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper'),
    smooth: true
});


// image box
let projectsBox = document.querySelector(".projects-box");
let projects = document.querySelectorAll(".Projects");
let imageBox = document.querySelector(".image-box");


function mobilewidth(){
    return window.innerWidth <= 600
}

if(!mobilewidth()){

    projectsBox.addEventListener("mouseenter", () => {
        imageBox.style.display = "block"
    });
    
    projectsBox.addEventListener("mouseleave", () => {
        imageBox.style.display = "none"
    });
    
    
    projects.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let image = e.getAttribute("data-image");
            imageBox.style.backgroundImage = `url(${image})`
        })
    });

}



// banner

let bannerDesign = document.getElementById("bannerDesign");
let bannerProjects = document.getElementById("bannerProjects");
let bannerExecution = document.getElementById("bannerExecution");
let bannerPara = document.getElementById("bannerPara");
let bannerImage = document.getElementById("bannerImage");



document.querySelectorAll('.banner').forEach(banner => {
    banner.addEventListener('click', handleBannerClick);
});

function handleBannerClick(event) {

    document.querySelectorAll(".banner").forEach(banner => {
        banner.style.color = "#504A45";
    });

    event.target.style.color = "white";

    if (event.target.id === "bannerDesign") {
        bannerPara.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
        bannerImage.style.backgroundImage = `url("https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg")`;
    } else if (event.target.id === "bannerProjects") {
        bannerPara.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
        bannerImage.style.backgroundImage = `url("https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp")`;
    } else if (event.target.id === "bannerExecution") {
        bannerPara.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
        bannerImage.style.backgroundImage = `url("https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg")`;
    }
}




// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//   loader


let loader = document.getElementById("loader");



setTimeout(()=>{
    loader.style.top = "-100%";
},4000)


// menu button
let menu = document.querySelector("nav h3");
let menuPopup = document.querySelector(".menu-popup");
let closebtn = document.querySelector(".menu-close-btn");
let overlay = document.querySelector(".overlay-2");

let temp = 0 ;

menu.addEventListener('click' , ()=>{
    if(temp === 0){
        menuPopup.style.top = "0";
        overlay.style.display = 'block'; 
        temp = 1;
        window.addEventListener('scroll', closeMenuOnScroll);
    } 
});
 
closebtn.addEventListener('click' , ()=>{
    if(temp === 1 ){
        menuPopup.style.top ="-100%";
        overlay.style.display = 'none';
        temp = 0 ;

        window.removeEventListener('scroll', closeMenuOnScroll);
    }
});


function closeMenuOnScroll() {
    menuPopup.style.top = "-100%";
    overlay.style.display = 'none';
    temp = 0;

    window.removeEventListener('scroll', closeMenuOnScroll);
}