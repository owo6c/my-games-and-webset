// Fixed JavaScript code for the game addressing the spawnObstacle timing issue and obstacle removal memory leak.

let obstacles = [];
let obstacleSpawnInterval = 2000; // Time in milliseconds

function spawnObstacle() {
    const obstacle = createObstacle(); // Assume createObstacle() creates a new obstacle
    obstacles.push(obstacle);
    setTimeout(removeObstacle, 5000, obstacle); // Removes the obstacle after 5 seconds
}

function removeObstacle(obstacle) {
    // Efficiently remove the obstacle from the array and DOM
    obstacles = obstacles.filter(obs => obs !== obstacle);
    document.body.removeChild(obstacle.element); // Assume obstacle.element refers to DOM element
}

function startGame() {
    setInterval(spawnObstacle, obstacleSpawnInterval);
}

startGame();