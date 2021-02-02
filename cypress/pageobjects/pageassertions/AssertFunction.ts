/// <reference types="cypress" />

import { should } from "chai"

export function assertShouldHaveLenght(selector: string,value){

    cy.get(selector).should(value)

}

export function assertIsVIsible(selector){

    cy.get(selector).should('be.visible')

}

export function assertContainsText(selector,text: string){

    cy.get(selector).should('contain.text',text)

}

export function sampleFunction(selector){

    return cy.get(selector)

}
