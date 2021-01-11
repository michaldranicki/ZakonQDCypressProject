/// <reference types="cypress" />

import SignInPageElement from '../pageelements/SignInPageElement'

export default class SignInPageAction{

    constructor(){

        globalThis.signInPageElement = new SignInPageElement

    }
    
    
    
    createAccount(email){

        globalThis.signInPageElement.emailCreateAccount().type(email)
        globalThis.signInPageElement.createAccountButton().click()

    }

    returnHome(){

        globalThis.signInPageElement.homeButton().click()

    }

    logIn(email,password){

        globalThis.signInPageElement.emailSignIn().type(email)
        globalThis.signInPageElement.passwordField().type(password)
        globalThis.signInPageElement.signInButton().click()

    }

    forgotPassword(){

        globalThis.signInPageElement.forgotPassword().click()

    }

}