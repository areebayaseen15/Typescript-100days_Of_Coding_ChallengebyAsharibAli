//creating function and exporting into another javascript file

export function sum(...num : number[]) : number {
    return num.reduce((total , number) => total + number)
}

export function subtract(...num : number[]) : number {
    return num.reduce((total , number) => total - number)
}

export function multiply(...num : number[]) : number {
    return num.reduce((total , number) => total * number)
}