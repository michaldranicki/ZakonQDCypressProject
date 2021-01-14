/// <reference types="cypress" />

import * as locator from  'locators.json';


export function homeButton(){

    return cy.get(locator.signInPage.humeButton)

}

export function emailCreateAccount(){

    return cy.get(locator.signInPage.emailCreateAccount)

}

export function createAccountButton(){

    return cy.get(locator.signInPage.createAccountButton)

}

export function emailSignIn(){

    return cy.get(locator.signInPage.emailSignIn)

}

export function passwordField(){

    return cy.get(locator.signInPage.passwordField)

}

export function forgotPassword(){

    return cy.get(locator.signInPage.forgotPassword)

}

export function signInButton(){

    return cy.get(locator.signInPage.signInButton)

}

export function createAccountForm(){

    return cy.get(locator.signInPage.createAccountForm)

}

export function logInForm(){

    return cy.get(locator.signInPage.logInForm)

}