/// <reference types="cypress" />

import HomePageElements from "../pageelements/HomePageElement"



export default class HomePageAction{

    constructor(){

       globalThis.homePageElement = new HomePageElements();
           
    }

    navigateToUrl(){

        cy.visit('/')

    }

    validateTitle(){

        return cy.title()

    }

    contactUs(){
        
        globalThis.homePageElement.contactUsButton().click()

    }

    signIn(){

        globalThis.homePageElement.signInButton().click()

    }

}


