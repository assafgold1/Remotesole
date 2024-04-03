const chalk = require('chalk'); // Install chalk for colorization
const socket = io();

document.addEventListener('DOMContentLoaded', function() {
    // socket.emit('new-connection', {name: 'remotecontrol'});
    document.getElementById('hackem').addEventListener('click', function() {
        console.log("hi")
        var victim = document.getElementById('victim').value;
        //  add logs with chalk and color to the message
        console.log(chalk.green.bold(victim + " has hacked you!"));
        //  send command to victim
        socket.emit('command', {recipient: victim, command: "hack"});
        var command = document.getElementById('hacker').value;

        socket.emit('command', {recipient: victim, command: command});
    });
});