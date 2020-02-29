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
        width: 100,
				height: 100,
        x: width - 100,
        y: height / 2,
				resizable: true,
				frame: false,
				transparent: true,
				movable: false,
				alwaysOnTop: true,
				webPreferences: {
					nodeIntegration: true
				}
  })


  win.loadURL(`file://${__dirname}/index.html`)
  // win.webContents.openDevTools();


  win.on('closed', () => {
    win = null
  });
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

// create second window
exports.openWindow = (filename) => {
  let display = screen.getPrimaryDisplay();
	let width = display.bounds.width;
	let height = display.bounds.height;


    // win.webContents.openDevTools();
    let count = BrowserWindow.getAllWindows()
    .filter(b => {
      return b.isVisible()
    })
    .length

    if (count <= 1) {
      win1 = new BrowserWindow(
        {
          width: width,
          height: height,
          x: 0,
          y: 0,
          resizable: true,
          frame: true,
          transparent: false,
          movable: true,
          alwaysOnTop: false,
          webPreferences: {
            nodeIntegration: true,
            webviewTag: true
          }
      });
      win1.setMenu(null);
      win1.loadURL('http://repo.foodini.net.pl/desktop/');
    } else if (count === 2) {
      win1.hide();
    } else {
      win1.show();
    }

    win1.on('closed', () => {
      win1 = null
    });
    console.log(count);

}