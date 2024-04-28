"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;

var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Water"] = 0] = "Water";
    ResourceType[ResourceType["Oxygen"] = 1] = "Oxygen";
    ResourceType[ResourceType["Minerals"] = 2] = "Minerals";
})(ResourceType || (ResourceType = {}));
var Planet = /** @class */ (function () {
    function Planet(props) {
        this.props = props;
    }
    Planet.prototype.getInfo = function () {
        return "Planet: ".concat(this.props.name, ", Resource: ").concat(ResourceType[this.props.resourceType], ", Danger: ").concat(this.props.dangerLevel);
    };
    return Planet;
}());
exports.Planet = Planet;
