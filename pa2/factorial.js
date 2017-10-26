function factCheck(){
	var n = document.getElementById("factorialInput").value;
	if(n<0){
		alert("That was a negative number. Please try again!");
	} else {
		var out = fact(n);
		var span = document.getElementById("factorialResult");
		span.innerHTML = out;
		if(out<100){span.style.color = "blue"; span.style.fontSize = "20px";}
		else if(out>=100&&out<1000){span.style.color = "red"; span.style.fontSize = "30px";}
		else if(out>=1000&&out<10000){span.style.color = "cyan"; span.style.fontSize = "40px";}
		else if(out>=10000&&out<100000){span.style.color = "purple"; span.style.fontSize = "50px";}
		else if(out>=100000&&out<1000000){span.style.color = "orange"; span.style.fontSize = "60px";}
		else if(out>=1000000&&out<10000000){span.style.color = "brown"; span.style.fontSize = "70px";}
		else{span.style.color = "yellow"; span.style.fontSize = "80px";}
	}
}

function fact(n){
	if(n<=0){
		return 1;
	}
	return n*fact(n-1);
}