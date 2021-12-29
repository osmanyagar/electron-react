const {BrowserWindow,app} = require('electron');
const ReactDOM = require('react-dom');

function createWindow() {
    const win = new BrowserWindow({
        width:1200,
        height:800,
        backgroundColor:"white",
        webPreferences:{
            nodeIntegration:false,
            worldSafeExecuteJavascript:true,
            contextIsolation:true
        }
    })
    win.loadFile('index.html');
}

app.whenReady().then(createWindow)