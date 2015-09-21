window.process = function(callback){
  cordova.exec(
    callback,
    function(err) {
        alert("error");
    },
    "Process",
    "process",
    ["params"]
  );
}
