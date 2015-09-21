cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-process/www/process.js",
        "id": "cordova-plugin-process.process",
        "clobbers": [
            "cordova.process"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-process": "1.0.0-dev"
}
// BOTTOM OF METADATA
});