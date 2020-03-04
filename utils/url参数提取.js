function resolve(query) {
    if(typeof query !== 'string') return;
    const result = {};

    url = url.slice(1);
    const arr = url.split('&');
    arr.forEach(item => {
        let items = item.split('=');
        result[items[0]] = items[1];
    });
    return result;
}