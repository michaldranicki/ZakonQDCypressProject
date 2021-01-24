/// <reference types="cypress" />

import * as locator from  'locators.json';
import {bestSellerSection, contactUsButton, homePageAds, homePageSlider, popularSection, signInButton} from 'pageobjects/pageelements/HomePageElement'


export function assertContactUsButton(){

    return contactUsButton().should('contain.text', 'Contact Us')

}

export function assertPopularSection(){

    return popularSection().find('li').should('have.length',7).its('length').then((xyz: number)=>{

        cy.log(xyz)

    })

}

export function assertBestSellerSection(){

    return bestSellerSection().find('li').should('have.length',7)

}

export function assertSignInButton(){

    return signInButton().should('contain.text','Sign in')

}

export function assertHomePageSlider(){

    return homePageSlider().should('be.visible')

}

export function assertHomePageAds(){

    return homePageAds().find('li').should('have.length',2)

}