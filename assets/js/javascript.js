var total_characters = 10;
var total_clicks = 0;
var password = 0;

function calculateResult(n){
		if (n < 2) {
		  return n;
		}
		return calculateResult(n - 1) + calculateResult(n - 2);
}

function rotate() {
	for (var i = 1; i < 11; i++) {
        (function (x) {
            setInterval(function () {
                document.getElementById("handle").style.WebkitAnimationName = "rotation";
            }, 200 * i);
        })(i);
    }
  }

function openSafe(){
	rotate();
}

function makeButtons(){	
	let temp_= "";
	let teclas = [1,2,3,4,5,6,7,8,9,0];
	for (var i = 0; i<teclas.length-1; i++) {
	temp_+= '<button type="button" value="' + teclas[i] + '" onclick="clickNumber(this.value)">' + teclas[i] + '</button>';
	document.getElementById("keys").innerHTML = temp_;
	};

	temp_ = '<button class="del" type="button" onclick="clickClear()">DEL</button>';
	document.getElementById("keys").innerHTML += temp_;
	
	temp_ = '<button type="button" value="' + teclas[9] + '" onclick="clickNumber(this.value)">' + teclas[9] + '</button>';
	document.getElementById("keys").innerHTML += temp_;

	temp_ = '<button class="confirm" type="button" onclick="clickOk()">OK</button>';
	document.getElementById("keys").innerHTML += temp_;

}

makeButtons();

	function clickNumber(str){
		if (total_characters>total_clicks){
			document.getElementById("newpassword").value += str;
			total_clicks ++;
		}
	}

function clickClear(){
	document.getElementById("newpassword").value = "";
	total_clicks = 0;
}

function clickOk(){
	password = document.getElementById("newpassword").value;
	document.getElementById("newpassword").value = "";
	total_clicks=0;
	if(calculateResult(24) === parseInt(password)){
		openSafe();
		alert("Correct");
	}
	else{
		alert("Wrong password");
	}
}

