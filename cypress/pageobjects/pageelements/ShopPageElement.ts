/// <reference types="cypress" />

import * as locator from  'locators.json';

export function topSellers(){

    return cy.get(locator.shopPage.topSellers)

}

export function mainElements(){

    return cy.get(locator.shopPage.mainElements)

}