const util = require('util');
const exec = util.promisify(require('child_process').exec);

// 读取aida64检测数据
async function readAida64SensorValues() {
    const { stdout, stderr } = await exec("chcp 65001 && REG QUERY HKEY_CURRENT_USER\\Software\\FinalWire\\AIDA64\\SensorValues")
    if (stderr) throw new Error(stderr)
    const lines = stdout.split('\r\n').filter((line) => line);
    const sensorValues = lines.reduce((acc, cur) => {
        const valueArr = cur.split(/\s{2,}/).filter((line) => line)
        if (valueArr.length === 3) {
            const [type, key] = valueArr[0].split('.')
            const value = valueArr[2]
            if (!acc[key]) acc[key] = {}
            acc[key][type.toLowerCase()] = value
        }
        return acc
    }, {})
    return sensorValues
}

module.exports = readAida64SensorValues
