const sinon = require('sinon');

describe("index.html", () => {
  it("includes div", () => {
    expect(document.querySelector('body').innerHTML).to.include('<main id="main">')
  })
})

describe("index.js", () => {
  it("returns ", () => {
    const input = document.getElementById('input');
    sinon.spy(input, 'addEventListener')

    addingEventListener()
    expect(input.addEventListener.called).to.be.true
  })
})
