const Registry = require("winreg")

// 创建注册表对象
const regKey = new Registry({
    hive: Registry.HKCU, // open registry hive HKEY_CURRENT_USER
    key: "\\Software\\FinalWire\\AIDA64\\SensorValues" // aida64注册表的路径
})

// 读取aida64检测数据
async function readAida64SensorValues() {
    let res = await new Promise(function(resolve, reject) {
        regKey.values(function(err, items) {
            let arr = {}
            if (err) {
                reject(err)
            } else {
                for (var i = 0; i < items.length; i++) {
                    let nameAtt = items[i].name.split(".")
                    if (nameAtt[0] == "Label") {
                        arr[nameAtt[1]] = { lable: items[i].value }
                    }
                }
                for (var i = 0; i < items.length; i++) {
                    let nameAtt = items[i].name.split(".")
                    arr[nameAtt[1]].value = items[i].value
                }
            }
            resolve(arr)
        })
    })
    return res
}

module.exports = readAida64SensorValues()
