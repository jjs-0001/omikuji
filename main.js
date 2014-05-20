window.onload = function(){
	var uranai = Math.random();
	var result;

	if(uranai > 0.75){
		result = "大吉";
	}else if(uranai > 0.50){
		result = "吉";
	}else if(uranai > 0.25){
		result = "小吉";
	}else{
		result = "凶";
	}
	document.getElementById("unsei").innerText = result;
}