let toggled = false;

function changeTheme() {
    console.log('baka');
    if(toggled) {
        document.documentElement.style.setProperty('--background', 'black');
        document.documentElement.style.setProperty('--secondary', 'white');
        toggled = false;
    }
    else {
        document.documentElement.style.setProperty('--background', 'white');
        document.documentElement.style.setProperty('--secondary', 'black');
        toggled = true;
    }
}