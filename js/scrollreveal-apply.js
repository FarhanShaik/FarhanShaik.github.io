ScrollReveal({
     reset: true,
     delay: 500,
     distance: '60px',
     origin: 'bottom' 
    });
ScrollReveal().reveal('.f-hero');

$("#welcomeNextButton").on("click", function(){
    document.getElementById("summaryHero").scrollIntoView();

});

$("#summaryNextButton").on("click", function(){
    document.getElementById("findMeHero").scrollIntoView();

});

$("#summaryBackButton").on("click", function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;

});

$("#findMeBackButton").on("click", function(){
    document.getElementById("summaryHero").scrollIntoView();

});

$("#findMeTopButton").on("click", function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;

});
