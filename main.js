"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var planet_1 = require("./planet");
var event_1 = require("./event");
var navigation_1 = require("./navigation"); 
var userInterface_1 = require("./userInterface");
var SpaceSimulator;
(function (SpaceSimulator) {
    function start() {
        var spaceship = { health: 100, cargoCapacity: 200, speed: 50 };
        var planet = new planet_1.Planet({ name: "Earth", resourceType: 0, dangerLevel: 3 });
        var event = new event_1.Event({ name: "Meteor Shower", description: "A meteor shower damages the ship.", affectHealth: -20, affectCargo: 0, affectSpeed: -10 });
        (0, userInterface_1.showMessage)("Welcome to the Space Simulator!");
        var direction = null;
        while (direction === null) {
            var input = (0, userInterface_1.getUserInput)("Enter direction to navigate (north, south, east, west): ");
            direction = validateDirection(input);
        }
        (0, navigation_1.navigate)(direction);
        (0, navigation_1.simulateTravel)();
        (0, userInterface_1.showMessage)(planet.getInfo());
        (0, userInterface_1.showMessage)(event.getInfo());
        (0, userInterface_1.showMessage)("Simulation complete.");
    }
    SpaceSimulator.start = start;
    function validateDirection(input) {
        var normalizedInput = input.toLowerCase();
        if (normalizedInput === "north" || normalizedInput === "south" || normalizedInput === "east" || normalizedInput === "west") {
            return normalizedInput;
        }
        else {
            (0, userInterface_1.showMessage)("Invalid direction. Please enter a valid direction.");
            return null;
        }
    }
})(SpaceSimulator || (SpaceSimulator = {}));

SpaceSimulator.start();
