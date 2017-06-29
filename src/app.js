const openCamera = require('./openCamera');
const $ = require('jquery');
//openCamera();
const Peer = require('simple-peer');
const p = new Peer({initiator: location.hash === '#1', trickle: false});
p.on('signal', token => {
    $('#txtMySignal').val(JSON.stringify(token))
});
$('#btnConnect').click(() => {
    const friendSignal = JSON.parse($('#txtFriendSignal').val());
    p.signal(friendSignal);
});
console.log('say hello');