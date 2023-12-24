function replaceName() {
    let name = prompt("Massukan nama anda", "");
    document.getElementById("name").innerHTML = name;
    }
    
    replaceName();
    
    let navbar = document.getElementById("navbar");
    let icon = document.getElementById("hamburger-menu");
    
    //je
    
    
    function validateForm() {
        const name = document.forms["message-form"]["full-name"].value;
        const birthDate = document.forms["message-form"]["birth-date"].value;
        const gender = document.forms["message-form"]["gender"].value;
        const messages = document.forms["message-form"]["messages"].value;
    
        if (name == "" || birthDate == "" || gender == "" || messages == "") {
            alert("Tidak boleh ada yang kosong");
            return false;
        }
    
        setSenderUI(name, birthDate, gender, messages);
        return false;
    }
    
    function setSenderUI(name, birthDate, gender, messages) {
        document.getElementById("sender-full-name").innerHTML = name;
        document.getElementById("sender-birth-date").innnerHTML = birthDate;
        document.getElementById("sender-gender").innerHTML = gender;
        document.getElementById("sender-messages").innerHTML = messages;
    }