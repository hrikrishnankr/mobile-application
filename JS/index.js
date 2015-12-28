toggle=0;
window.onload=function(){
    toggle=0;
    document.getElementById("xyz").style.position="fixed";
    document.getElementById("xyz").style.right="-400px";
};
      function show(){
         if(parseInt(document.getElementById("xyz").style.right)<=-5){
            document.getElementById("xyz").style.right=parseInt(document.getElementById("xyz").style.right)+5+"px";
            setTimeout(show,9);
         }
      }
      function hide () {
         if(parseInt(document.getElementById("xyz").style.right)>=-395){
            document.getElementById("xyz").style.right=parseInt(document.getElementById("xyz").style.right)-5+"px";
            setTimeout(hide,9);
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