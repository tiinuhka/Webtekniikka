//type your name -button clicked
document.getElementById("submit-name").onclick=function(){

    //get the typed first-name and save it in variable "name"
    let name = document.getElementById("first-name").value;
    //print first-name the "player-name"
    //document.getElementById("visitor-name").innerHTML = "Tervetuloa sivuilleni, " + name + "!";

    //get the note and save it in variable "note"
    let note = document.getElementById("note").value;

    //get the date and time of the visit
    let date = new Date();


    //check if the checkbox is checked
    let ischecked = document.getElementById("important").checked;
    
    //set the divclass value unchecked by default
    let divclass = "unchecked";
    if (ischecked)
    {
    
        //set the divclass checked if checkbox is checked
        divclass = "checked";
    }

    //add the new visitor to the list
    //use backslash as an escape character to add quotes inside the string 
    let text = "<div class=\"" +  divclass + "\">";
    text += name + "." + " " + note + " " + date + "<br>";
    text += "</div>";
    document.getElementById("visitor-name").innerHTML += text;

    //the info is not being sent forward from this form
    return false;

}