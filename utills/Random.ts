export default function (max : number, min : number) {
    return Math.floor(Math.random() * (max - min)) + min
}