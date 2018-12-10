var count;
var num;

function init(){
	count = document.getElementById("price");
	num = parseFloat(count.innerHTML);;
}



function addToCart() {
	num = num + 1;
	count.innerHTML = num;
	alert(num);
}