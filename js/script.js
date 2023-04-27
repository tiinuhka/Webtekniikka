//type your name -button clicked
document.getElementById("submit-name").onclick=function(){

    //get the typed first-name and save it in variable "name"
    let name = document.getElementById("first-name").value;
    //print first-name the "player-name"
    document.getElementById("player-name").innerHTML = "Tervetuloa sivuilleni, " + name + "!";

return false;

}