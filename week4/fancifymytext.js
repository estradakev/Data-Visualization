function myFnt(){
    document.getElementById("myTxt").style.fontSize = "2em";
}

function myAlrt(){
    alert("There has been a change");
    document.getElementById("fancy").style.color = "blue";
    document.getElementById("fancy").style.textDecoration = "underline";
}

function setBack(){
    alert("The text was changed back");
    document.getElementById("fancy").style.color = "black";
    document.getElementById("fancy").style.textDecoration = "none";


}

function upperCase(){
    var str = document.getElementById("myTxt").value;
    var parts = str.split(".");
    // document.getElementById("myTxt").style.textTransform = "uppercase";
    str = parts.join("-moo");
    console.log(str);
    alert(str);
}