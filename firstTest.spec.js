/// <reference types="cypress" />

describe('First test suite', ()=>{ //How to initiate a suite

    it('First test', ()=>{ //First test case

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //By Tag Name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //By class name
        cy.get('.input-full-width')

        //By attribute name
        cy.get('[fullwidth]')

        //By attribute and value
        cy.get('[placeholder="Email"]')

        //By entire class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //By two attributes
        cy.get('[placeholder="Email"][fullwidth]')

    })

    it('Second test', ()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //Theory
        //get() - find elements on the entire page by locators globally
        //find() - find child elements by locator -> never next to cy., it must be used with parents locators
        //contains() - find HTML text and by text and locator, find the first match

        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')

        //cypress chains and DOM
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()
    })

    it('Third test', ()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        //cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

        //Avoiding duplicated code
        //First Approach
        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

        //Second Approach
        cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm =>{
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', 'Password')
        })
    })

    it.only('Fourth test', ()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        cy.get('[for="exampleInputEmail1"]').then( label => {
            const labelText = label.text()
            expect(labelText).to.equal('Email address')
            cy.wrap(labelText).should('contain', 'Email address')
        })

        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')
        })
    })

})

