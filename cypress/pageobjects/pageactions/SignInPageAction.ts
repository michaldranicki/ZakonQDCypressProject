/// <reference types="cypress" />

import { createAccountButton, emailCreateAccount, emailSignIn, homeButton, passwordField, signInButton } from 'pageobjects/pageelements/SignInPageElement'


export function createAccount(email){

    emailCreateAccount().type(email)
    createAccountButton().click()

}

export function returnHome(){

    homeButton().click()

}

export function logIn(email,password){

    emailSignIn().type(email)
    passwordField().type(password)
    signInButton().click()

}

export function forgotPassword(){

    forgotPassword().click()

}