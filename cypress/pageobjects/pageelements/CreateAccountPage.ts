/// <reference types="cypress" />

import * as locator from  '../../locators.json';

export default class CreateAccountPage{

    accountCreationForm(){

        return cy.get(locator.createAccountPage.accountCreationForm)

    }
    
    mrRadioButton(){

        return cy.get(locator.createAccountPage.mrRadioButton)

    }

    msRadioButton(){

        return cy.get(locator.createAccountPage.msRadioButton)

    }

    firstNameField(){

        return cy.get(locator.createAccountPage.firstNameField)

    }

    lastNameField(){

        return cy.get(locator.createAccountPage.lastNameField)

    }

    emailField(){

        return cy.get(locator.createAccountPage.emailField)

    }

    passwordField(){

        return cy.get(locator.createAccountPage.passwordField)

    }

    daysDate(){

        return cy.get(locator.createAccountPage.daysDate)

    }

    monthsDate(){

        return cy.get(locator.createAccountPage.monthsDate)

    }

    yearsDate(){

        return cy.get(locator.createAccountPage.yearsDate)

    }

    newsletterCheckbox(){

        return cy.get(locator.createAccountPage.newsletterCheckbox)

    }

    specialOfferCheckbox(){

        return cy.get(locator.createAccountPage.specialOfferCheckbox)

    }

    firstNameAddress(){

        return cy.get(locator.createAccountPage.firstNameAddress)

    }

    lastNameAddress(){

        return cy.get(locator.createAccountPage.lastNameAddress)

    }

    companyField(){

        return cy.get(locator.createAccountPage.companyField)

    }

    addressField1(){

        return cy.get(locator.createAccountPage.addressField1)

    }

    addressField2(){

        return cy.get(locator.createAccountPage.addressFiels2)

    }

    cityField(){

        return cy.get(locator.createAccountPage.cityField)

    }

    stateList(){

        return cy.get(locator.createAccountPage.stateList)

    }

    postCodeField(){

        return cy.get(locator.createAccountPage.postCodeField)

    }

    countryList(){

        return cy.get(locator.createAccountPage.countryList)

    }

    additionaInformationBox(){

        return cy.get(locator.createAccountPage.additionaInformationBox)

    }

    homePhoneField(){

        return cy.get(locator.createAccountPage.homePhoneField)

    }

    mobilePhoneField(){

        return cy.get(locator.createAccountPage.mobilePhoneField)

    }

    addressAliasField(){

        return cy.get(locator.createAccountPage.addressAliasField)

    }

    registerButton(){

        return cy.get(locator.createAccountPage.registerButton)

    }

}