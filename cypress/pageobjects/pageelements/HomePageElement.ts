/// <reference types="cypress" />

//const locator = require('../../locators.json');
import * as locator from  '../../locators.json';

export default class HomePageElements{
   
    contactUsButton(){

        return cy.get(locator.homePage.contactUs)

    }

    signInButton(){

        cy.get(locator.homePage.signIn)

    }

}