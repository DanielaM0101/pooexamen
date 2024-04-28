
export type Direction = "north" | "south" | "east" | "west";

export function navigate(direction: Direction): void {
    console.log(`Navegando ${direction}`);
}

export function simulateTravel(): void {
    console.log("Simulando viajes...");
}
