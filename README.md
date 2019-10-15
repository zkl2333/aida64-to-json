[![NPM](https://nodei.co/npm/aida64-to-json.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/aida64-to-json/)

# aida64-to-json

当设置 aida64 将传感器数据写入注册表时，读取注册表中的传感器参数并格式化


## 设置aida64 ##

文件->设置->外部程序->允许将监测数据写入注册表

![aida64截图](https://github.com/zkl2333/aida64-to-json/blob/master/aida64.png)

## Installation

```shell
npm install aida64-to-json
```

## Example Usage

让我们从一个例子开始。

```javascript
const readAida64 = require("aida64-to-json")

readAida64().then(res => {
    console.log(res)
})
```

## Output

输出的示例

```json
{
    "SDATE": { "lable": "Date", "value": "2019-10-15" },
    "STIME": { "lable": "Time", "value": "20:48:18" },
    "SUPTIME": { "lable": "UpTime", "value": "02:47:58" },
    "SCPUCLK": { "lable": "CPU Clock", "value": "3867" },
    "SCPUUTI": { "lable": "CPU Utilization", "value": "14" },
    "SMEMUTI": { "lable": "Memory Utilization", "value": "70" },
    "SPROCESSES": { "lable": "Processes", "value": "268" },
    "SGPU1UTI": { "lable": "GPU Utilization", "value": "0" },
    "TMOBO": { "lable": "Motherboard", "value": "54" },
    "TCPU": { "lable": "CPU", "value": "91" },
    "TCPUDIO": { "lable": "CPU Diode", "value": "92" },
    "TGPU1DIO": { "lable": "GPU Diode", "value": "50" },
    "THDD1": { "lable": "HGST HTS725050A7E630", "value": "43" },
    "THDD2": { "lable": "INTEL SSDPEKKW256G8", "value": "46" },
    "THDD3": { "lable": "WDC WD10JPLX-00MBPT1", "value": "39" },
    "FCPU": { "lable": "CPU", "value": "2472" },
    "FCHA": { "lable": "Chassis", "value": "1147" },
    "FPSU": { "lable": "Power Supply", "value": "2410" },
    "DGPU1": { "lable": "GPU", "value": "0" }
}
```
