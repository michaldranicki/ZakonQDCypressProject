/// <reference types="cypress" />

import {contactUsButton,loopButton,searchBar,signInButton} from 'pageobjects/pageelements/HomePageElement'

  
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

export function search(searchText: string){

    searchBar().type(searchText)
    loopButton().click()

}