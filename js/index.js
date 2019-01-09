
var rover = { 
  direction: 'N',
  x: 0,
  y: 0
};

function turnLeft(rover){
  console.log("turnLeft was called!");
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

module.exports.turnLeft = turnLeft;