/// <reference types="cypress" />

import {contactUsButton,signInButton} from 'pageobjects/pageelements/HomePageElement'


    
export function navigateToUrl(){

    cy.visit('/')

}

export function validateTitle(){

    return cy.title()

}

export function contactUs(){
        
    contactUsButton().click()

}

export function signIn(){

    signInButton().click()

}