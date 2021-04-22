const searchInput = document.querySelector("#search-input");


searchInput.addEventListener("keydown", function(event) {

    if(event.code === 'Enter') {
        search();
    }
});

function search() {
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + input + "i&rlz=1C5CHFA_enNZ948NZ948&oq=hui&aqs=chrome..69i57.476j0j1&sourceid=chrome&ie=UTF-8"
}



