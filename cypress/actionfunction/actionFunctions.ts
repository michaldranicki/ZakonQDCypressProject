/// <reference types="cypress" />

export function clickFunction(element:string){

    cy.get(element).click

}


export function typeFunction(element:string, typeText:string){

    cy.get(element).type(typeText)

}

export function checkFunction(element:string){

    cy.get(element).check()

}