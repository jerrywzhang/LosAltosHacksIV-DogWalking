
// explore page
let users;
let displayedUser;

const snapchatLogin = () => {
    // redirect to the explore page
    window.location.replace("/explore");
};

const pickDisplayedUser = () => {

}

const reject = () => {
    // send something in jquery?
    //some way to fetch the next user to look at
}

const accept = () => {
    
}

const updateUser = () => {
    
}

const updateExplore = () => {
    document.getElementById("exploreInfo").innerHTML = "New user bio!";

    document.getElementById("exploreInfo").align = "center";
}


const googleLogin = () => {

// redirect to the explore page
    window.location.replace("/explore");
};


window.onload = () => {
    /*
    $.ajax({
        url: '/api/users/',
        method: 'POST',
        success: function(data) {
            let users = JSON.parse(data);
        }
    });
    */
};