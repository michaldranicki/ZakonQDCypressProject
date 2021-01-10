/// <reference types="cypress" />

import * as locator from  '../../locators.json';


export default class ContactUsPageElement{

    homeButton(){

        return cy.get(locator.contactUsPage.homeButton)

    }

    subjectHeadingList(){

        return cy.get(locator.contactUsPage.subjectHeadingList)

    }

    emailAddressField(){

        return cy.get(locator.contactUsPage.emailAddressField)

    }

    orderReferenceField(){

        return cy.get(locator.contactUsPage.orderReferenceField)

    }

    attachFile(){

        return cy.get(locator.contactUsPage.attachFile)

    }

    messageBox(){

        return cy.get(locator.contactUsPage.messageBox)

    }

    submitButton(){

        return cy.get(locator.contactUsPage.submitButton)

    }

}