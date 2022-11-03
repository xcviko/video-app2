function send(data) {
  if (data.url.indexOf(".css") !== -1) return;

  var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  xmlhttp.withCredentials = true;
  xmlhttp.open("POST", window.___APP_CONFIG___.backUrl + "/logs/error");
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  data.queryparams = window.location.search;
  xmlhttp.send(JSON.stringify(data));
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
  try {
    var message = error.message;
    var stack = error.stack;
    send({ msg, url, message, stack });
  } catch (e) {
    send({ msg, url });
  }
};
