
enum ResourceType {
    Agua,
    Oxígeno,
    Minerales,
}

interface PlanetProps {
    name: string;
    resourceType: ResourceType;
    dangerLevel: number;
}

export class Planet {
    constructor(public props: PlanetProps) { }

    getInfo(): string {
        return `Planet: ${this.props.name}, Resource: ${ResourceType[this.props.resourceType]}, Danger: ${this.props.dangerLevel}`;
    }
}
