const search = (e) => {
  fetch("//api.github.com/search/repositories?q=preact")
    .then((r) => r.json())
    .then((json) => {
      const results = (json && json.items) || [];
      self.postMessage({ results });
    });
  self.postMessage({ msg: +"fdjsvdfvkl" + z });
};
const expensive = ({ time }) => {
  let start = Date.now(),
    count = 0;
  while (Date.now() - start < time) count++;
  self.postMessage({ count });
};
const fcts = {
  expensive,
  search,
};
var z = 23;
self.onmessage = ({ data: { question } }) => {
  self.postMessage({
    answer: 42,
  });
};
