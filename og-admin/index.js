var logOnCode = "x68D-XxcF-8X9e-9uYe-oPeT-9U6T";

function logOn() {

var el0 = document.getElementById("lgntxbx0");

var el1 = document.getElementById("status");

var el2 = document.getElementById("lgnbtn0");

var el0i = document.querySelector('.lgntxbx0i');

if ( el0i.value == logOnCode) {

console.log("(INFO) Logging in...");

window.location.assign("https://omegagames5.github.io/og-admin/x68D-XxcF-8X9e-9uYe-oPeT-9U6T.html");


	
}

else {

el1.innerHTML = "Wrong LogIn Code!";

el2.enabled = false;

console.log("(Error) Unable to verify login code!");

setTimeout(()=>{

el1.innerHTML = "";

el2.enabled = true;

}, 1850);
	
}

}

function GoToDownloadsList() {

window.location.assign("https://omegagames5.github.io/og-admin/x68D-XxcF-8X9e-9uYe-oPeT-9U6T/downloadList");
	
}

function OgKitAdminBeta() {

window.location.assign("https://omegagames5.github.io/og-admin/x68D-XxcF-8X9e-9uYe-oPeT-9U6T/downloadList/Omega_Games_Kit___Admin-Beta.exe");

}

function OgKitAdminBetaCode() {

window.location.assign("https://omegagames5.github.io/og-admin/x68D-XxcF-8X9e-9uYe-oPeT-9U6T/downloadList/activatecode.data");

}