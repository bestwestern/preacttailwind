var z = 23;
self.addEventListener(
  "message",
  function (e) {
    self.postMessage(e.data + "fdjsvdfvkl" + z);
  },
  false
);
