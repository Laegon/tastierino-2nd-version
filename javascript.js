var total_caracteres = 6;
var total_cliques = 0;
var password="111111";

function makeButtons(){	
let temp_= "";
let teclas = [1,2,3,4,5,6,7,8,9,0];
for (var i = 0; i<teclas.length-1; i++) {
temp_+= '<button type="button" value="' + teclas[i] + '" onclick="clickNumber(this.value)">' + teclas[i] + '</button>';
 document.getElementById("keys").innerHTML = temp_;
};

temp_ = '<button class="grey" type="button" onclick="clickClear()">DEL</button>';
document.getElementById("keys").innerHTML += temp_;
  
temp_ = '<button type="button" value="' + teclas[9] + '" onclick="clickNumber(this.value)">' + teclas[9] + '</button>';
document.getElementById("keys").innerHTML += temp_;

temp_ = '<button class="grey" type="button" onclick="clickOk()">OK</button>';
document.getElementById("keys").innerHTML += temp_;

}

makeButtons();

	function clickNumber(str){
		if (total_caracteres>total_cliques){
			document.getElementById("newpassword").value += str;
			total_cliques ++;


		}
	}

function clickClear(){
document.getElementById("newpassword").value = "";
total_cliques = 0;

}

function clickOk(){
if(total_cliques == total_caracteres){
password = document.getElementById("newpassword").value;
console.log(password);

document.getElementById("newpassword").value = "";
total_cliques=0;
} else{
	console.log("wrong password");
	alert("Wrong Password");
}
}

