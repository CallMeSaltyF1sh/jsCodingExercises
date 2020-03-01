const Modal = (function() {
    let modal = null;
    return function() {
        if(!modal) {
            modal = document.createElement('div');
            modal.id = 'modal';
            modal.innerHTML = 'test';
            modal.style.display = 'none';
            document.body.appendChild(modal);
        }
        return modal;
    }
})();

document.getElementById('open').addEventListener('click', function() {
    const modal = Modal();
    modal.style.display = 'block';
});
document.getElementById('close').addEventListener('click', function() {
    const modal = Modal();
    modal.style.display = 'none';
});