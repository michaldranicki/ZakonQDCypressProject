/// <reference types="cypress" />

import * as locator from  'locators.json';
import {bestSellerSection, contactUsButton, popularSection} from 'pageobjects/pageelements/HomePageElement'


export function assertContactUsButton(){

    return contactUsButton().should('be.visible')

}

export function assertPopularSection(){

    return popularSection().find('li').should('have.length',7).its('length').then((xyz: number)=>{

        cy.log(xyz)

    })

}

export function assertBestSellerSection(){

    return bestSellerSection().find('li').should('have.length',7)

}