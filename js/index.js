// Rover Object Goes Here
// ======================
var rover = { 
  x: 0,
  y: 0,
  direction: 'N'
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
  

// var platform = '5 5'

function moveForward (rover, platform) {
  let array = platform.split(' ')
  let maxCoords = array.map(x => parseInt(x))
  
  switch(rover.direction){
    case 'N':
      if(rover.y === maxCoords[1]) {
        break;
      }
      rover.y += 1
      break;
    case 'S':
      if(rover.y < 1) {
        console.log('Out of bounds!')
        break;
      }
      rover.y -= 1
      break;
    case 'E':
      if(rover.x === maxCoords[0]) {
        break;
      }
      rover.x += 1
      break;
    case 'W':
      if(rover.x < 1){
        console.log('Out of bounds!')
        break;
      }
      rover.x -= 1
      break;
    default:
      console.log('none of those!')
  }
}

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
  return 'done!';
}

function moveRover(commands, rover) {
  let commandsArray = commands.split('')
  console.log(commandsArray)

  for(let i=0; i < commandsArray.length; i++) {
    if(commandsArray[i] === 'L') {
      turnLeft(rover)
    } else if (commandsArray[i] === 'R') {
      turnRight(rover)
    } else if (commandsArray[i] === 'M') {
      moveForward(rover)
    } else {
      return 
    }
  }
}

module.exports.turnLeft = turnLeft;
module.exports.turnRight = turnRight;
module.exports.moveForward = moveForward;
module.exports.moveRover = moveRover;
