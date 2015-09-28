/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

alert("wait");
var ANDROID = "android";
var IOS = "ios";
var PLATFORM = IOS;
var SEARCHTIME = 5;


//var l = document.getElementById("logger");
var log = function(obj){
    console.log(obj);
}


// var ser = {
//     hasClass: function(obj, class){
//         if(obj.className) {
//             return obj.className.indexOf(class) != -1;
//         }
//         return false;
//     },
//     find: function(obj, selector){
//         return obj.querySelector(selector);
//     }
// };


var app = {
    initialize: function() {
        app.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        document.getElementById("appContainer").addEventListener("click", app.onClick, false);
    },
    onDeviceReady: function() {
        console.log("device start");
        app.initialize();
        console.log("device end");
    },
    onResume: function() {

    },
    onPause: function() {

    },
    onClick: function(e) {
        if(e.target.className.indexOf("scan") != -1){
            console.log("scan start");
            ble.isEnabled(function(b){
                ble.scan([], 5, app.onDiscoverDevice, app.onError);
            }, function(){
                if(PLATFORM == ANDROID){
                    ble.enable(function(){
                        ble.scan([], 5, app.onDiscoverDevice, app.onError);
                    }, app.onError);
                } else {
                    alert("Enable Bluetooth plz");
                }
            });
        }
    },
    onDiscoverDevice: function(obj) {
        console.log(obj);
        alert("discover");
    },
    onError: function(err){
        alert("error");
        console.log(err);
    },
    replaceSection: function(sectionId, content) {
        document.getElementById(sectionId).innerHTML(content);
    }

};

//initialize app on device ready
document.addEventListener("deviceready", app.onDeviceReady, false);
document.addEventListener("resume", app.onResume, false);
document.addEventListener("pause", app.onPause, false);
