const electron = require ("electron")
const {app, BrowserWindow} = electron

app.on("ready", () => {
    let win = new BrowserWindow({width:200,height:165, frame: false})
    let url = require("url").format({
        protocol: "file",
        slashes: true,
        pathname: require("path").join(__dirname,"index.html")
    })
    win.loadURL(url)
    //win.webContents.openDevTools()
    win.setMenu(null)
})
exports.outText = () =>{
    document.write("test")
}
