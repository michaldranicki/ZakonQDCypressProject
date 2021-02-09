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

export function selectFunction(element: string, selectElement:string){

    cy.get(element).select(selectElement)

}

export function sliderFunction(element:string,leftValue:number){

    cy.get(element).invoke('attr', 'style', 'left: '+leftValue+'%;')

}


export function mouseOverFunction(element:string){

    cy.get(element).trigger('mouseover')

}