let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let page3 = document.getElementById("page3");
let featuresBlog1 = document.getElementById("featuresBlog1");
let featuresBlog2 = document.getElementById("featuresBlog2");
let featuresBlog3 = document.getElementById("featuresBlog3");

page1.addEventListener('click', function() {
    featuresBlog1.classList.add("openFeat");
    featuresBlog2.classList.add("closeFeat");
    featuresBlog3.classList.add("closeFeat");
    featuresBlog1.classList.remove("closeFeat");
    featuresBlog2.classList.remove("openFeat");
    featuresBlog3.classList.remove("openFeat");
    page1.style.borderBottom = "3px solid #D1757A";
    page2.style.borderBottom = "1px solid #a8a6a6";
    page3.style.borderBottom = "1px solid #a8a6a6";
});

page2.addEventListener('click', function() {
    featuresBlog2.classList.add("openFeat");
    featuresBlog3.classList.add("closeFeat");
    featuresBlog1.classList.add("closeFeat");
    featuresBlog1.classList.remove("openFeat");
    featuresBlog2.classList.remove("closeFeat");
    featuresBlog3.classList.remove("openFeat");
    page2.style.borderBottom = "3px solid #D1757A";
    page1.style.borderBottom = "1px solid #a8a6a6";
    page3.style.borderBottom = "1px solid #a8a6a6";
});

page3.addEventListener('click', function() {
    featuresBlog3.classList.add("openFeat");
    featuresBlog1.classList.add("closeFeat");
    featuresBlog2.classList.add("closeFeat");
    featuresBlog3.classList.remove("closeFeat");
    featuresBlog1.classList.remove("openFeat");
    featuresBlog2.classList.remove("openFeat");
    page3.style.borderBottom = "3px solid #D1757A";
    page2.style.borderBottom = "1px solid #a8a6a6";
    page1.style.borderBottom = "1px solid #a8a6a6";
});

