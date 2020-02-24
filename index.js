// const {remote } = require('electron');
const electron = require("electron");
const remote = electron.remote;

const syncBtn = document.getElementById('syncBtn');

syncBtn.addEventListener('click', function(){
    const main = remote.require('./main.js');

    main.openWindow('index');

})
