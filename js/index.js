
function openW(idn){
	document.getElementById("10").classList.add("blur-it");
	document.getElementById(idn).classList.add('open');
}	

function closeW(idn){

	document.getElementById("10").classList.remove('blur-it');
	document.getElementById(idn).classList.remove('open');

}