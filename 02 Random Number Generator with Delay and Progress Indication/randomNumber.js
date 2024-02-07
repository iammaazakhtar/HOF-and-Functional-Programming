const delay = 3; // number of seconds to delay before generating random number

console.log(`Generating a random number after a delay of ${delay} seconds...`);

let remainingTime = delay;
const intervalId = setInterval(() => {
    console.log(`Time remaining: ${remainingTime} seconds...`);
    remainingTime--;

    if (remainingTime === 0) {
        clearInterval(intervalId);
        const randomNumber = Math.floor(Math.random() * 100) + 1; // generate a random number between 1 and 100
        console.log(`Random number generated: ${randomNumber}`);
    }
}, 1000); // run every 1 second




