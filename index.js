let videoplay = document.querySelector("video#player");
let picture = document.querySelector('canvas#picture');
let take = document.querySelector('button#TakePhoto');
let save = document.querySelector("button#save");

picture.width = 500;
picture.height = 500;
take.onclick=function(){
    console.log("拍照")
    if(picture.getContext){
        picture.getContext('2d').drawImage(videoplay,0,0,picture.width,picture.height)
    }
}
save.onclick = function(){
    console.log("下载");
    downLoad(picture.toDataURL("image/jpeg"))

}
function downLoad(url){
    let a = document.createElement("a");
    a.download = 'photo';
    a.href=url;
    document.body.appendChild(a);
    a.click();
    a.remove();
}
function getMediaStream(stream){
    videoplay.srcObject = stream;
}

function handleError(err){
    console.log('getUserMedia error:',err);
}
//对采集的数据做一些限制

let constraints = {
    video:{
        width:300,
        height:300,
        frameRate:15,
    },
    audio:false
}

navigator.mediaDevices.getUserMedia(constraints)
                        .then(getMediaStream)
                        .catch(handleError)

