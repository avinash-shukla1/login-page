var btn  = document.querySelector(".btn");
var cut = document.getElementById("cut");

btn.addEventListener('click',function(){
document.getElementById('wrapper').style.opacity ='1';
});
cut.addEventListener('click',function(){
    document.getElementById("wrapper").style.opacity ="0";
    });