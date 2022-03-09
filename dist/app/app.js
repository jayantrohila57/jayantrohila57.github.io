
setTimeout(function() {
        document.getElementById("loading").classList.add("animated"),
            document.getElementById("loading").classList.add("fadeOut"),
            setTimeout(function() {
                document.getElementById("loading").classList.remove("animated"),
                    document.getElementById("loading").classList.remove("fadeOut"),
                    (document.getElementById("loading").style.display = "none");
            }, 400);
    }, 800),
    "serviceWorker" in navigator &&
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js");
    }),
    document.addEventListener("aos:in", ({ detail: e }) => {
        console.log("animated in", e);
    }),
    document.addEventListener("aos:out", ({ detail: e }) => {
        console.log("animated out", e);
    });