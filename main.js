const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const screen = electron.screen;
// Enable live reload for Electron too
// require('electron-reload')(__dirname, {
//     // Note that the path to electron may vary according to the main file
//     electron: require(`${__dirname}/node_modules/electron`)
// });
let win;
let win1;

function createWindow() {
  let display = screen.getPrimaryDisplay();
	let width = display.bounds.width;
	let height = display.bounds.height;
  win = new BrowserWindow({
        width: 120,
				height: 100,
        x: width - 120,
        y: height / 2,
				resizable: false,
				frame: false,
				transparent: true,
        movable: true,
        useContentSize: true,
        alwaysOnTop: true,
        icon: __dirname + '/assets/logo.png',
				webPreferences: {
					nodeIntegration: true
				}
  })


  win.loadURL(`file://${__dirname}/index.html`)
  // win.webContents.openDevTools();

  win.setAlwaysOnTop(true, "screen-savier", 12);
  win.setVisibleOnAllWorkspaces(true);
  win.moveTop();
  // mainWindow.setFullScreenable(false);
  // win.on('closed', () => {
  //   win = null;
  // });
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});


// app.dock.hide();

// create second window
exports.openWindow = () => {
  let display = screen.getPrimaryDisplay();
	let width = display.bounds.width;
	let height = display.bounds.height;


    let count = BrowserWindow.getAllWindows()
    .filter(b => {
      return b.isVisible()
    })
    .length

    if (count <= 1) {
      win1 = new BrowserWindow(
        {
          fullscreen: true,
          width: width,
          height: height,
          x: 0,
          y: 0,
          resizable: false,
          frame: false,
          transparent: false,
          movable: false,
          alwaysOnTop: false,
          useContentSize: true,
          icon: __dirname + '/assets/logo.png',
          webPreferences: {
            nodeIntegration: true
          }
      });
      win1.setMenu(null);
      win1.loadURL('http://repo.foodini.net.pl/desktop/');
      win1.on('closed', () => {
        win1 = null;
      });
    }
    else if (count === 2) {
      if(win1.isMinimized()){
        win1.restore();
      }else{
        win1.minimize();
      }
    //   win1.minimize();
    //   console.log(win1);
    //   // win1.restore();
    // } else {
    //   win1.restore();
    }
    win1.setAlwaysOnTop(true, 'screen-savier', 10);
    win1.setVisibleOnAllWorkspaces(true);
    win.moveTop();
    // win1.webContents.openDevTools();
    // console.log(count);


}