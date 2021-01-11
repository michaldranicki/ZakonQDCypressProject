/// <reference types="cypress" />

//const locator = require('../../locators.json');
import * as locator from  '../../locators.json';

export default class HomePageElements{
   
    contactUsButton(){

        return cy.get(locator.homePage.contactUs)

    }

    signInButton(){

        return cy.get(locator.homePage.signIn)

    }

    popularSection(){

        return cy.get(locator.homePage.popularSection)

    }

    bestSellerSection(){

        return cy.get(locator.homePage.bestSellerSection)

    }

    clothesArea(){

        return cy.get(locator.homePage.clothesArea)

    }

    womenSection(){

        return cy.get(locator.homePage.womenSection)

    }

    dressesSection(){

        return cy.get(locator.homePage.dressesSection)

    }

    tshirtSection(){

        return cy.get(locator.homePage.tshirtSection)

    }

}