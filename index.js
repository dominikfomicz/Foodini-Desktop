// const {remote } = require('electron');
const electron = require("electron");
const remote = electron.remote;

const syncBtn = document.getElementById('syncBtn');
var i = 0;
syncBtn.addEventListener('click', function(){
    const main = remote.require('./main.js');
    // if (i < 1) {
    main.openWindow('index');
    //     i = 1;
    // }
})

// remote.app