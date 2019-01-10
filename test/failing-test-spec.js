'use strict'

const chai = require('chai')
const expect = chai.expect

describe('A failing test', function () {
  it('should fail', function () {
    expect(true).to.equal(false);
  })
})


// needs to have a position
// describe('receives the position of the rover in integers x,y and a string as the direction "N, E, S, W"', function() {
//   var rover;

//   before(function(){
//     rover = {
//       x: 0,
//       y: 0,
//       direction: 'N',
//       position: ''
//     }
//   })

//   it('should initialise start position', function() {
//     expect(rover.x).to.be
//   })
// })



describe('turnLeft', function(){
  var turnLeft = require("../js/index").turnLeft;

  it('should turn the rover from N to W', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'N'
    }
  
    turnLeft(rover)
    expect(rover.direction).to.equal('W')
  })

  it('should turn the rover from W to S', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'W'
    }
  
    turnLeft(rover)
    expect(rover.direction).to.equal('S')
  })

  it('should turn the rover from S to E', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'S'
    }
  
    turnLeft(rover)
    expect(rover.direction).to.equal('E')
  })

  it('should turn the rover from E to N', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'E'
    }
  
    turnLeft(rover)
    expect(rover.direction).to.equal('N')
  })
})

describe('turnRight', function(){
  var turnRight = require('../js/index').turnRight

  it('should turn rover from N to E', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'N'
    }
    turnRight(rover)
    expect(rover.direction).to.equal('E')
  })

  it('should turn rover from E to S', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'E'
    }
    turnRight(rover)
    expect(rover.direction).to.equal('S')
  })

  it('should turn rover from S to W', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'S'
    }
    turnRight(rover)
    expect(rover.direction).to.equal('W')
  })

  it('should turn rover from W to N', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'W'
    }
    turnRight(rover) 
    expect(rover.direction).to.equal('N') 
  })
})


describe('moveForward', function() {
  var moveForward = require('../js/index').moveForward 
  var platform

  before(function() {
    platform = '5 5'
  });

  it('should move rover one space north when facing north', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'N'
    } 
    
    moveForward(rover, platform)
    expect(rover.y).to.deep.equal(1)
  })

  it('should move rover one space south when facing south', function() {
    var rover = {
      x: 0,
      y: 5,
      direction: 'S'
    } 
    
    moveForward(rover, platform)
    expect(rover.y).to.deep.equal(4)
  })

  it('should move rover one space east when facing east', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'E'
    } 
   
    moveForward(rover, platform)
    expect(rover.x).to.deep.equal(1)
  })

  it('should move rover one space west when facing west', function() {
    var rover = {
      x: 3,
      y: 0,
      direction: 'W'
    } 
    
    moveForward(rover, platform)
    expect(rover.x).to.deep.equal(2)
  })

  it('should NOT move if at the western boundary of the platform', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'W'
    } 
   
    moveForward(rover, platform)
    expect(rover.x).to.deep.equal(0)
  })

  it('should NOT move if at the southern boundary of the platform', function() {
    var rover = {
      x: 0,
      y: 0,
      direction: 'W'
    } 
   
    moveForward(rover, platform)
    expect(rover.y).to.deep.equal(0)
  })

 it('should accept platform upper right coordinates', function() {
  var rover = {
    x: 0,
    y: 0,
    direction: 'W'
  } 
   
    moveForward(rover, platform)
    expect(platform).to.deep.equal('5 5')
 })

 it('should convert platform string to an array of strings', function() {
  var rover = {
    x: 0,
    y: 0,
    direction: 'E'
  } 
   
    moveForward(rover, platform)
    expect(platform.split(' ')).to.deep.equal(['5','5'])
 })

 it('should convert platform array to an array of integers', function() {
  var rover = {
    x: 0,
    y: 0,
    direction: 'E'
  } 
   var xArray = ['5','5']
    moveForward(rover, platform)
    expect(xArray.map(x => parseInt(x))).to.deep.equal([5,5])
 })

 
  it('should NOT move if at the eastern boundary of the platform', function(){
    var rover = {
      x: 5,
      y: 0,
      direction: 'E'
    } 
    
    moveForward(rover, platform)
    expect(rover.x).to.deep.equal(5)
  })
})




