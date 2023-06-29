
function showSendMessageIcon() {
    if (message!=""){
        console.log("Not Null");
        var sendbutton = document.getElementById("sendmessageicon");
        var speakbutton = document.getElementById("speakmessageicon");
        sendbutton.style.display = "inline-block";
        speakmessageicon.style.display = "none";
        var message = document.getElementById("messagetextype").value;
    }
}
function hideSendMessageIcon() {
    var sendbutton = document.getElementById("sendmessageicon");
    sendbutton.style.display = "none";
    speakmessageicon.style.display = "inline-block";
    var message = document.getElementById("messagetextype").value;
}