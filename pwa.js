if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./service-worker.js")
            .then(function (reg) {
                console.log("Service Worker registrado:", reg.scope);
            })
            .catch(function (err) {
                console.error("Error al registrar Service Worker:", err);
            });
    });
}