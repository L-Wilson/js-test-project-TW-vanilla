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

  it('should move rover one space north when facing north', function(){
    var rover = {
      x: 0,
      y: 0,
      direction: 'N'
    } 
    moveForward(rover)
    expect(rover.y).to.deep.equal(1)
  })

  it('should move rover one space south when facing south', function() {
    var rover = {
      x: 0,
      y: 5,
      direction: 'S'
    } 
    moveForward(rover)
    expect(rover.y).to.deep.equal(-1)
  })
})




