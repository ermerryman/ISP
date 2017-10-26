function emailCheck(){
	var n = document.getElementById("validatorInput").value;
	if(n.length==0){
		alert("Please enter an e-mail address");
	} else {
		email(n);
	}
}

function email(n){
	var reg = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{3}$/;
	var pos = n.search(reg);
	if (pos == 0) {document.getElementById("validatorResult").innerHTML="Valid";}
	else {
		/*var err = "";
		var pos = 0;
		var per,excl;
		for(var i=0; i<n.length; i++){
			err += n[i];
			console.log(err);
			pos = err.search(reg);
			console.log(pos);
		}*/
		document.getElementById("validatorResult").innerHTML="";
		alert("That is NOT a valid e-mail address");
	}
}

function validateInput(){
	var last = document.getElementById("validatorInput2").value.slice(-1);
	var reg = /^[A-Za-z0-9@.]$/;
	if(document.getElementById("validatorInput2").value.length!=0)
	{
		if(reg.test(last)){
			//Fits
		}
		else {
			alert("That is NOT a valid character");
			var form = document.getElementById("validatorInput2");
			form.value = form.value.substring(0,form.value.length-1);
		}
	}
	var over = document.getElementById("validatorInput2").value.search(/^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{3}$/);
	if(over == 0){
		document.getElementById("validatorResult2").innerHTML="Valid";
	}
	else {
		document.getElementById("validatorResult2").innerHTML="";
	}
}