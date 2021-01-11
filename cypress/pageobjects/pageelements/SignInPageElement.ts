/// <reference types="cypress" />

import * as locator from  '../../locators.json';

export default class SignInPageElement{

    homeButton(){

        return cy.get(locator.signInPage.humeButton)

    }

    emailCreateAccount(){

        return cy.get(locator.signInPage.emailCreateAccount)

    }

    createAccountButton(){

        return cy.get(locator.signInPage.createAccountButton)

    }

    emailSignIn(){

        return cy.get(locator.signInPage.emailSignIn)

    }

    passwordField(){

        return cy.get(locator.signInPage.passwordField)

    }

    forgotPassword(){

        return cy.get(locator.signInPage.forgotPassword)

    }

    signInButton(){

        return cy.get(locator.signInPage.signInButton)

    }

    createAccountForm(){

        return cy.get(locator.signInPage.createAccountForm)

    }

    logInForm(){

        return cy.get(locator.signInPage.logInForm)

    }

}