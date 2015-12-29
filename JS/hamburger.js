var hamToggle=0;
function toggleMiddle(){
	if(hamToggle==0){
		easeOut();
		hamToggle=1;
	}else{
		easeIn();
		hamToggle=0;
	}
}

function easeOut(){
	var midId=document.getElementById('mid');
	var upId=document.getElementById('up');
	var lowId=document.getElementById('low');
	midId.classList.remove('easeIn');
	lowId.classList.remove('posRev');
	upId.classList.remove('negRev');	
	midId.classList.add('easeout');
	lowId.classList.add('pos');
	upId.classList.add('neg');
}

function easeIn(){
	var midId=document.getElementById('mid');
	var upId=document.getElementById('up');
	var lowId=document.getElementById('low');
	midId.classList.add('easeIn');
	lowId.classList.add('posRev');
	upId.classList.add('negRev');	
}
