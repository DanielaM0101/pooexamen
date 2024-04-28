
import { Spaceship } from "./spaceship";
import { Planet } from "./planet";
import { Event } from "./event";
import { Direction, navigate, simulateTravel } from "./navigation"; 
import { getUserInput, showMessage } from "./userInterface";

namespace SpaceSimulator {
    export function start(): void {
        const spaceship: Spaceship = { health: 100, cargoCapacity: 200, speed: 50 };
        const planet: Planet = new Planet({ name: "Tierra", resourceType: 0, dangerLevel: 3 });
        const event: Event = new Event({ name: "Lluvia de meteoros", description: "Una lluvia de meteoritos daña la nave", affectHealth: -20, affectCargo: 0, affectSpeed: -10 });
         
        showMessage("Bienvenido al Simulador Espacial!");

        let direction: Direction | null = null;
        while (direction === null) {
            const input = getUserInput("Ingrese la dirección para navegar (norte, sur, este, oeste)): ");
            direction = validateDirection(input);
        }

        navigate(direction);

        simulateTravel();

        showMessage(planet.getInfo());
        showMessage(event.getInfo());

        showMessage("Simulación completa.");
    }

    function validateDirection(input: string): Direction {
        const normalizedInput = input.toLowerCase();
        if (normalizedInput === "north" || normalizedInput === "south" || normalizedInput === "east" || normalizedInput === "west") {
            return normalizedInput as Direction;
        } else {
            showMessage("Dirección no válida. Usando la dirección predeterminada: norte.");
            return "north"; 
        }
    }
    
}


SpaceSimulator.start();

