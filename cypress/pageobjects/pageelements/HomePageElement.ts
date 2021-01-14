/// <reference types="cypress" />

import * as locator from  'locators.json';


export function contactUsButton(){

    return cy.get(locator.homePage.contactUs)

}

export function signInButton(){

    return cy.get(locator.homePage.signIn)

}

export function popularSection(){

    return cy.get(locator.homePage.popularSection)

}

export function bestSellerSection(){

    return cy.get(locator.homePage.bestSellerSection)

}

export function clothesArea(){

    return cy.get(locator.homePage.clothesArea)

}

 export function womenSection(){

    return cy.get(locator.homePage.womenSection)

}

export function dressesSection(){

    return cy.get(locator.homePage.dressesSection)

}

export function tshirtSection(){

    return cy.get(locator.homePage.tshirtSection)

}
