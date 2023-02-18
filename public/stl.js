
function localfile() {
    ifelm = document.createElement("input");
    ifelm.type = "file";
    ifelm.accept=".stl,.txt"
    ifelm.onchange = function (input) {
        let reader = new FileReader();
        reader.onload = function () {
            loadfile(reader.result);
        }
        reader.readAsText(input.target.files[0]);
    };
    ifelm.click();
}
document.getElementById("loadBtn").onclick = localfile;
function loadfile(text) {
    //console.log(text);
    lines = text.replace(/\r/g,"").split("\n");
        console.log(lines)
    let data = [];
    for (let i=0;i<lines.length-3;i++) {
        ver0 = lines[i+0].split(" ");
        ver1 = lines[i+1].split(" ");
        ver2 = lines[i+2].split(" ");
        ver3 = lines[i+3].split(" ");
        if (ver0[0]=="outer"&&ver1[0]=="vertex"&&ver2[0]=="vertex"&&ver3[0]=="vertex") {
            data.push([[Number(ver1[1]),Number(ver1[2]),Number(ver1[3])],[Number(ver2[1]),Number(ver2[2]),Number(ver2[3])],[Number(ver3[1]),Number(ver3[2]),Number(ver3[3])],[255,255,255],[false]]);
            i+=4;
        }
    }
    console.log(data)
    tddraw.setObj(data);
    arrayout(data);
    nctoout(data);
    start()
}
function arrayout(data) {
    let text = "";
    text += "loadedobj = [\n"
    for (let poly of data) {
        text += ` [ [${poly[0].toString()}], [${poly[1].toString()}], [${poly[2].toString()}], [255,255,255] ],\n`
    }
    text += "];"
    document.getElementById("arrayOut").innerHTML = text;
}
function nctoout(data) {
    let text = "";
    for (let poly of data) {
        text += `${poly[0].toString()},${poly[1].toString()},${poly[2].toString()},255,255,255\n`
    }
    document.getElementById("nctoOut").innerHTML = text;
}

// 3D
var tddraw = new tdDRAW();
tddraw.setCamera([[10,10,10],[225,-32],[1920,1080]]);
tddraw.setCamera([[3,3,3],[225,-32],[1920,1080]]);
//tddraw.setObj();
var co = document.getElementById("imgOut");
var ctx = co.getContext('2d');
co.height=tddraw.display[1];co.width=tddraw.display[0];
ctx.globalCompositeOperation = 'copy';


// 計測
let eTime;
function start() {

    let sTime = Date.now();

    img = tddraw.getImg();

    ctx.putImageData(img,0,0);

    eTime = Date.now();
    console.log("画像表示終了",eTime-sTime,1000/(eTime-sTime));

}
start();