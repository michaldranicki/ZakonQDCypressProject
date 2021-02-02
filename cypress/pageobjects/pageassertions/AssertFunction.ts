/// <reference types="cypress" />


export function assertShouldHaveLenght(selector:string,value:number){

    cy.get(selector).should('have.length',value)
    //should('have.lenght',7)

}

export function assertIsVIsible(selector){

    cy.get(selector).should('be.visible')

}

export function assertContainsText(selector:string,text: string){

    cy.get(selector).should('contain.text',text)

}

export function assertClass(selector:string,className:string){

    cy.get(selector).should('have.class',className)

}

export function sampleFunction(selector){

    return cy.get(selector)

}
