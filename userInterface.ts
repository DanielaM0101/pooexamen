
export function getUserInput(promptMessage: string): string {
    return prompt(promptMessage) || "";
}


export function showMessage(message: string): void {
    console.log(message);
}
