var toggle=0;
window.onload=function(){
    toggle=0;
    document.getElementById("xyz").style.position="fixed";
    document.getElementById("xyz").style.right="-50%";
};
function show(){
   document.getElementById("content").style.color="rgba(0,0,0,0.5)";
   if(parseInt(document.getElementById("xyz").style.right)<=-2){
      document.getElementById("xyz").style.right=parseInt(document.getElementById("xyz").style.right)+1+"%";
      setTimeout(show,5);
   }
}
function hide () {
	document.getElementById("content").style.color="black";
   if(parseInt(document.getElementById("xyz").style.right)>=-50){
      document.getElementById("xyz").style.right=parseInt(document.getElementById("xyz").style.right)-1+"%";
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