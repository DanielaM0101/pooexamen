
interface EventProps {
    name: string;
    description: string;
    affectHealth: number;
    affectCargo: number;
    affectSpeed: number;
}

export class Event {
    constructor(public props: EventProps) {}

    getInfo(): string {
        return `Evento: ${this.props.name}, Descripción: ${this.props.description}`;
    }
}
