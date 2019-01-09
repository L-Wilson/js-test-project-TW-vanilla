// Rover Object Goes Here
// ======================
var rover = { 
  direction: 'N',
  x: 0,
  y: 0
};

// ======================
const xMax = 5;
const yMax = 5;
var directions = { 'N': 'North', 'E': 'East', 'S': 'South', 'W': 'West'};

// turns rover left based on its current direction
function turnLeft(rover){
  switch(rover.direction){
    case 'N': 
      rover.direction = 'W';
      break;
    case 'E': 
      rover.direction = 'N';
      break;
    case 'S': 
      rover.direction = 'E';
      break;
    case 'W': 
      rover.direction = 'S';
      break;
  }
}


function turnRight(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  }
}
  

// function moveForward(rover){
//   switch(rover.direction){
//     case 'N':
//       if(rover.y < 1) {
//         console.error('Illegal move!');
//          break;
//       }
//       rover.y -= 1;
//       break;
//     case 'E': 
//       if(rover.x == xMax) {
//         console.error('Illegal move!');
//         break;
//       }
//       rover.x +=1;
//       break;
//     case 'S':
//       if(rover.y == yMax) {
//         console.error('Illegal move!');
//         break;
//       }
//       rover.y += 1;
//       break;
//     case 'W': 
//       if(rover.x < 1) {
//         console.error('Illegal move!');
//         break;
//       }
//       rover.x -= 1;
//       break;
//   }
// }

// receives a string of commands and calls the appropriate function based on the command
function moveRover(commands) {
  for(let i=0; i < commands.length; i++){
    let command = commands[i]
    switch(command){
        case 'r': 
      turnRight(rover);
      break;
        case 'l': 
      turnLeft(rover);
      break;
      case 'm': 
        moveForward(rover);
      break;
      default:
        console.error('Illegal command: ' + command);
        break;
    }
  }
  //printStatus(rover);
  return 'done!';
}

module.exports.turnLeft = turnLeft;
module.exports.turnRight = turnRight;
