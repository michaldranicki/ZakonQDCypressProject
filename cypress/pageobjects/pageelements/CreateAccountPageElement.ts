/// <reference types="cypress" />

import * as locator from  'locators.json';


export function accountCreationForm(){

    return cy.get(locator.createAccountPage.accountCreationForm)

}
    
export function mrRadioButton(){

    return cy.get(locator.createAccountPage.mrRadioButton)

}

export function msRadioButton(){

    return cy.get(locator.createAccountPage.msRadioButton)

}

export function firstNameField(){

    return cy.get(locator.createAccountPage.firstNameField)

}

export function lastNameField(){

    return cy.get(locator.createAccountPage.lastNameField)

}

export function emailField(){

    return cy.get(locator.createAccountPage.emailField)

}

export function passwordField(){

    return cy.get(locator.createAccountPage.passwordField)

}

export function daysDate(){

    return cy.get(locator.createAccountPage.daysDate)

}

export function monthsDate(){

    return cy.get(locator.createAccountPage.monthsDate)

}

export function yearsDate(){

    return cy.get(locator.createAccountPage.yearsDate)

}

export function newsletterCheckbox(){

    return cy.get(locator.createAccountPage.newsletterCheckbox)

}

export function specialOfferCheckbox(){

    return cy.get(locator.createAccountPage.specialOfferCheckbox)

}

export function firstNameAddress(){

    return cy.get(locator.createAccountPage.firstNameAddress)

}

export function lastNameAddress(){

    return cy.get(locator.createAccountPage.lastNameAddress)

}

export function companyField(){

    return cy.get(locator.createAccountPage.companyField)

}

export function addressField1(){

    return cy.get(locator.createAccountPage.addressField1)

}

export function addressField2(){

    return cy.get(locator.createAccountPage.addressFiels2)

}

export function cityField(){

    return cy.get(locator.createAccountPage.cityField)

}

export function stateList(){

    return cy.get(locator.createAccountPage.stateList)

}

export function postCodeField(){

    return cy.get(locator.createAccountPage.postCodeField)

}

export function countryList(){

    return cy.get(locator.createAccountPage.countryList)

}

export function additionaInformationBox(){

    return cy.get(locator.createAccountPage.additionaInformationBox)

}

export function homePhoneField(){

    return cy.get(locator.createAccountPage.homePhoneField)

}

export function mobilePhoneField(){

        return cy.get(locator.createAccountPage.mobilePhoneField)

}

export function addressAliasField(){

    return cy.get(locator.createAccountPage.addressAliasField)

}

export function registerButton(){

    return cy.get(locator.createAccountPage.registerButton)

}