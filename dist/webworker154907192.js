self.addEventListener(
  "message",
  function (e) {
    self.postMessage(e.data + "fdjskl");
  },
  false
);
