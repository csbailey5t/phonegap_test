cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ezartech.ezar/www/ezar.js",
        "id": "com.ezartech.ezar.ezar",
        "pluginId": "com.ezartech.ezar",
        "clobbers": [
            "ezar"
        ]
    },
    {
        "file": "plugins/com.ezartech.ezar/www/camera.js",
        "id": "com.ezartech.ezar.camera",
        "pluginId": "com.ezartech.ezar",
        "clobbers": [
            "camera"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.ezartech.ezar": "0.1.0"
}
// BOTTOM OF METADATA
});