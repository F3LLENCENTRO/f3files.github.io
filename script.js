const exploreButton = document.getElementById("exploreButton");

exploreButton.addEventListener("click", () => {

    document.getElementById("documentaries").scrollIntoView({
        behavior: "smooth"
    });

});