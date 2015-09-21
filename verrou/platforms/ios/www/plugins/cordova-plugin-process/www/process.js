cordova.define("cordova-plugin-process.process", function(require, exports, module) { window.process = function(callback){
  alert("call cordova process defined");
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

});
