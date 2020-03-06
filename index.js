// const {remote } = require('electron');
const electron = require("electron");
const remote = electron.remote;

const syncBtn = document.getElementById('syncBtn');
const draggableIcon = document.getElementById('grippy');
const main = remote.require('./main.js');
var i = 0;
syncBtn.addEventListener('click', function(){
    main.openWindow();
});

// syncBtn.addEventListener('click', function(){
// });



// remote.app