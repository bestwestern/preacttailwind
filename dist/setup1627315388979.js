console.log("setup");
var worker = new Worker("webworker1627315388979.js");
worker.addEventListener(
  "message",
  function (e) {
    console.log("Worker said: ", e.data);
  },
  false
);
worker.postMessage("Hello World");
if ( false && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    console.log("load");
    navigator.serviceWorker.register("sw.js", { scope: "/" }).then(
      function (registration) {
        registration.onupdatefound = () => {
          console.log("updatefound"); //RELOAD!!
          alert("reload!");
          location.reload();
        };
        console.log("ServiceWorker registration", registration);
      },
      (err) => {
        console.error("ServiceWorker registration failed", err);
      }
    );
  });
}
