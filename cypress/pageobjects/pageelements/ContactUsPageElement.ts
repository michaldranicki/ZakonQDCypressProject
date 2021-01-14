/// <reference types="cypress" />

import * as locator from  'locators.json';


export function homeButton(){

    return cy.get(locator.contactUsPage.homeButton)

}

export function subjectHeadingList(){

    return cy.get(locator.contactUsPage.subjectHeadingList)

}

export function emailAddressField(){

    return cy.get(locator.contactUsPage.emailAddressField)

}

export function orderReferenceField(){

        return cy.get(locator.contactUsPage.orderReferenceField)

}

export function attachFile(){

        return cy.get(locator.contactUsPage.attachFile)

}

export function messageBox(){

    return cy.get(locator.contactUsPage.messageBox)

}

export function submitButton(){

    return cy.get(locator.contactUsPage.submitButton)

}