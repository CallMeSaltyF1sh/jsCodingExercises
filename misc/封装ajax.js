//用promise封装GET请求
function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.setRequestHeader('accept', 'application/json');
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.response);
                }
            }
        };
        xhr.onerror = function() {
            reject(new Error(xhr.statusText));
        };
        xhr.send();
    });
}