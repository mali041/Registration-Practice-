function Submit () {
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let date = document.getElementById("date").value;
    let gender;
    if (document.getElementById('male').checked) {
        gender = document.getElementById("male").value;
    }
    else if (document.getElementById('female').checked) {
        gender = document.getElementById("female").value;
    }
    let pNumber = document.getElementById("pnumber").value;
    let address = document.getElementById("address").value;
    
    document.getElementById("fullName").innerHTML = fName + " " + lName;
    document.getElementById("rEmail").innerHTML = email;
    document.getElementById("rPassword").innerHTML = password;
    document.getElementById("rDate").innerHTML = date;
    document.getElementById("rGender").innerHTML = gender;
    document.getElementById("rPNumber").innerHTML = pNumber;
    document.getElementById("rAddress").innerHTML = address;
    console.log(fName.length);
}