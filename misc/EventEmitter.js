class EventEmitter {
    constructor() {
        this.handlers = {}
    }

    on(event, handler) {
        if(!this.handlers[event]) {
            this.handlers[event] = [];
        }
        this.handlers[event].push(handler);
    }

    emit(event, ...args) {
        if(this.handlers[event]) {
            this.handlers[event].forEach(fn => {
                fn(...args);
            });
        }
    }

    off(event, handler) {
        const handlers = this.handlers[event];
        const index = handlers.indexOf(handler);
        if(index !== -1) {
            handlers.splice(index, 1);
        }
    }

    once(event, handler) {
        const handlerOnce = (...args) => {
            handler(...args);
            this.off(event, handlerOnce);
        };
        this.on(event, handlerOnce);
    }
}