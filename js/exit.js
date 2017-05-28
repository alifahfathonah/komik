function exitFromApp(buttonIndex) {
    if (buttonIndex==2){
     navigator.app.exitApp();
    }
 }
 
 // Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // alert("deviceready");
    document.getElementById('exitApp').addEventListener('click', function() {
        navigator.app.exitApp();
    });
}