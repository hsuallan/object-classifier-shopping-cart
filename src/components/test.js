class AutoIncreatment {
  constructor (length) {
    this.length = length
    this.now = 0
    this.alpha = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  }
  generate () {
    this.now > 9 ? (this.now = 0) : (this.now += 1)
    return new Date()
      .valueOf()
      .toString()
      .slice(13 - this.length + 1)
      .concat(this.alpha[this.now])
  }
}
export default AutoIncreatment
