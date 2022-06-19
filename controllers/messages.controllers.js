const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Message to friends',
        friend: 'Elon Musk'
    });
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'img.jpg'))
    // res.send('Hello world!');
}

function postMessages(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessages,
}