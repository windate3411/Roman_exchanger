var should = chai.should()
describe('function roman', function () {
  it('should add two number and return result', function () {
    var result = solution('CLII')
    result.should.be.equal(152)
  })
})

describe('number_to_roman', function () {
  it('should add two number and return result', function () {
    var result = number_to_roman(1280)
    result.should.be.equal('MCCLXXX')
  })
  it('should add two number and return result', function () {
    var result = number_to_roman(12)
    result.should.be.equal('XII')
  })
})