var shower = document.getElementById("main");
var colorcodeshower = document.getElementById("colorCodeShower");
var next = document.getElementById("get-next");

next.addEventListener("click",()=>{
    


    
    randomnum = Math.floor(Math.random()*16777215)
    randomcode = "#"+(randomnum).toString(16);
    shower.style.backgroundColor = randomcode;
    colorcodeshower.value=randomcode;
  

});


document.addEventListener("keydown",(e)=>{

if(e.keyCode==13){

    randomnum = Math.floor(Math.random()*16777215);

    randomcode = "#"+(randomnum).toString(16);

    shower.style.backgroundColor = randomcode;

    colorcodeshower.value=randomcode;

}
})


function copy(){
    var text = document.getElementById("colorCodeShower");

    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices


    document.execCommand("copy");

 
   
}