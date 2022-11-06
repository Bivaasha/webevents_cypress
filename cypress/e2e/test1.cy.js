before(() => {
  cy.viewport(1280, 720)
})

describe('textbox', () => {
  it('insert texts', () => {
    cy.visit('https://demoqa.com/')
    cy.contains('Elements').click()
    cy.contains('span[class="text"]' , 'Text Box').click()
    cy.get("input[placeholder='Full Name']").type('Bivasha Bashir Biva')
    cy.get("input[placeholder='name@example.com']").type('bivaruhy33@gmail.com')
    const curr= cy.get('#currentAddress')
    curr.type('Dhaka')
    const permanent= cy.get('#permanentAddress')
    permanent.type('Dhaka')
    cy.contains('Submit').should('be.visible')
    cy.contains('Submit').click()
    //cy.wait(3000)
  })
})

describe('checkbox', ()=> {
  it('checkbox', ()=>{
    cy.visit('https://demoqa.com/')
    cy.contains('Elements').click()
    cy.contains('Check Box').click()
    cy.get(`[aria-label="Toggle"]`).click()
    cy.contains('span[class="rct-text"]','Documents').click()
    //cy.wait(3000)
  })
})

describe('radiobutton', ()=> {
  it('radio button', ()=>{
    cy.visit('https://demoqa.com/')
    cy.contains('Elements').click()
    cy.contains('Radio Button').click()
    cy.get('#yesRadio').check({ force: true })
    cy.get('#yesRadio').should('be.checked')
    //cy.wait(5000)
  })
})

describe('button', () =>{
  it('click button', ()=>{
    cy.visit('https://demoqa.com/')
    cy.contains('Elements').click()
    cy.contains('Buttons').click()
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#doubleClickMessage').should('have.text', 'You have done a double click').and('be.visible')
    cy.get('#rightClickBtn').rightclick()
    cy.get('#doubleClickMessage').should('have.text', 'You have done a right click').and('be.visible')
   })
})

