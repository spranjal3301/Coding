import { games } from "./store";

//- This File save Data to DB from some Interval 

export function startLogger() {
    setInterval(() => {
        console.log(games);
    }, 4000)
}