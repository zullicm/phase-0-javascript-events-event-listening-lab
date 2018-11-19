//const sinon = require('sinon');

describe("index.js", () => {
  it("returns ", () => {
    //sinon.spy(document, 'addEventListener')
    //addingEventListener()
    //expect(document.addEventListener.calledOnce).to.be.true
    expect(addingEventListener()).to.eq("clicked")
  })
})
