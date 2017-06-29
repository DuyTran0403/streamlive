const playVideo = require('./playVideo');

function openCamera(){
    navigator.mediaDevices.getUserMedia({audio:true, video:false})
        .then(stream => playVideo(stream, 'localStream'))
        .catch(err => console.log(err));
}
module.exports = openCamera;