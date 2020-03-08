//传统轮询
function poll0(url, callback, interval = 1000) {
    setInterval(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callback(xhr.responseText);
                } else {
                    //...error
                }
            }
        }
        xhr.send();
    }, interval);
}
//用fetch简化
function poll1(url, callback, interval = 1000) {
    setInterval(() => {
        fetch(url).then(res => {
            callback(res)
        }).catch(err => {
            //...
        });
    }, interval);
}
//server
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/api', function (req, res) {
    res.end(msg);  //假装有msg
});
app.listen(3000);

//长轮询
function longPoll0(url, callback, timeout = 2000) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    //设置超时时间
    xhr.timeout = timeout;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                //...error
            }
            //无论成功失败都发送下一次请求
            longPoll0(url, callback, timeout);
        }
    }
    xhr.ontimeout = function () {
        longPoll0(url, callback, timeout);
    }
    xhr.send();
}
//用fetch
function longPoll1(url, callback) {
    fetch(url).then(res => {
        callback(res);
    }).catch(err => {
        //...处理error
        //重新请求
        longPoll1(url, callback);
    });
}

//websocket实现
//client
function connect(url, data, callback) {
    const socket = new WebSocket(url);
    socket.onopen = function () {
        console.log('connected');
        if (data) {
            socket.send(data);
        }
    };
    socket.onmessage = function (event) {
        callback(event.data);
    };
    socket.onerror = function () {
        //...
        connect(url, data, callback);   //重连
    };
    socket.onclose = function () {
        //...
    }
}
//server
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(3000);
const WebsocketServer = require('ws').Server;
const wss = new WebsocketServer({ port: 9999 });
wss.on('connection', function (websocket) {
    console.log('connected');
    //监听
    websocket.on('message', function(msg) {
        const res = solve(JSON.parse(msg));   //假装有solve
        websocket.send(res);
    });
    websocket.on('close', function() {
        //...
    });
    //避免长时间不通消息连接不稳定
    setInterval(() => {
        websocket.send('keep connection');
    }, 60000);
});
