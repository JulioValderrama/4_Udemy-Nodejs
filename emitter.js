// We create a class or function constractor to create Emitter Objects with a property that is an object with array(events) full of
// functions (listeners)
class Emitter {
    constructor() {
        this.events = {};
    }
    // We create a method that will add listeners to the array that belongs to the property (theEvent given)
    on(theEvent, listener) {
        this.events[theEvent] = this.events[theEvent] || [];
        this.events[theEvent].push(listener);
    }
    // WE create a method that will take the event and will loop through the array events to call all functions (listeners) inside
    emit(theEvent) {
        if (this.events[theEvent]) {
            this.events[theEvent].forEach(function (listener) {
                listener();
            });
        };
    }
};

module.exports = Emitter;



// // We create a class or function constractor to create Emitter Objects with a property that is an object with array(events) full of
// // functions (listeners)
// function Emitter() {
//     this.events = {};
// };

// // We create a method that will add listeners to the array that belongs to the property (theEvent given)
// Emitter.prototype.on = (theEvent, listener) => {
//     this.events[theEvent] = this.events[theEvent] || [];
//     this.events[theEvent].push(listener);
// };

// // WE create a method that will take the event and will loop through the array events to call all functions (listeners) inside
// Emitter.prototype.emit = (theEvent) => {
//     if (this.events[theEvent]) {
//         this.events[theEvent].forEach(function(listener) {
//             listener();
//         });
//     };
// };

