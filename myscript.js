function Buy() {
    confirm("Are you want to buy this?")
}


var slider_img = document.querySelector('.slider-img');
var images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

function validateForm() {
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username.length < 5) {
        alert('Username must be at least 5 characters');
        return false;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    
    window.location.href = "login.html";
    return false;
}

function notify