"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var Event = /** @class */ (function () {
    function Event(props) {
        this.props = props;
    }
    Event.prototype.getInfo = function () {
        return "Event: ".concat(this.props.name, ", Description: ").concat(this.props.description);
    };
    return Event;
}());
exports.Event = Event;
