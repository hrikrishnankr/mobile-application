toggle=0;
window.onload=function(){
    toggle=0;
    document.getElementById("xyz").style.position="fixed";
    document.getElementById("xyz").style.right="-600px";
};
function show(){
   if(parseInt(document.getElementById("xyz").style.right)<=-6){
      document.getElementById("xyz").style.right=parseInt(document.getElementById("xyz").style.right)+5+"px";
      setTimeout(show,5);
   }
}
function hide () {
   if(parseInt(document.getElementById("xyz").style.right)>=-595){
      document.getElementById("xyz").style.right=parseInt(document.getElementById("xyz").style.right)-5+"px";
      setTimeout(hide,5);
   }
}
function menuToggle(){
   if(toggle==0){
      show();
      toggle=1;
   }
   else if(toggle==1){
      hide();
      toggle=0;   
   }
}