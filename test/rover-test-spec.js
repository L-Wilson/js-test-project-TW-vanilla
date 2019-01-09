'use strict'

const chai = require('chai')
const expect = chai.expect

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
})


// describe('moveForward', function(){
//   it('should move rover one space forward based on commands', function(){
//     expect(moveForward(position, direction))
//   })
// })

