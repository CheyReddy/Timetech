function login() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if (username === 'CheyReddy' && password === '123') {
        //window.location.href = "HTML\timetech\Main_Page\index.html";
    } else {
        alert('Invalid username or password. Please try again.');
        document.getElementById("drop").innerHTML = 'Invalid username or password';
    }
}

function saved(){
    alert('Details Saved Successfully.')
}
function submit(){
    alert('Submitted Successfully.')
}

function order(){
    alert("Purchased Successfully.");
}

