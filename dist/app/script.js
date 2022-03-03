setTimeout(function() {
    document.getElementById("loading").classList.add("animated");
    document.getElementById("loading").classList.add("fadeOut");
    setTimeout(function() {
        document.getElementById("loading").classList.remove("animated");
        document.getElementById("loading").classList.remove("fadeOut");
        document.getElementById("loading").style.display = "none";
    }, 1800);
}, 1800);

document.addEventListener("aos:in", ({ detail }) => {
    console.log("animated in", detail);
});

document.addEventListener("aos:out", ({ detail }) => {
    console.log("animated out", detail);
});