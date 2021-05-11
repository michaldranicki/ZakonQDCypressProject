/// <reference types="cypress" />

import {bestSellerSection, contactUsButton, dressesSection, homePageAds, homePageSlider, popularSection, signInButton, tshirtSection, womenSection} from 'pageobjects/pageelements/HomePageElement'


export function assertContactUsButton(){

    return contactUsButton().should('contain.text', 'Contact us')

}

export function assertPopularSection(){

       return popularSection().find('li').should('have.length',7)

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

export function assertWomenSection(){

    return womenSection().should('contain.text','Women')
}

export function assertDressesSection(){

    return dressesSection().should('contain.text','Dresses')

}

export function assertTshirtSection(){

    return tshirtSection().should('contain.text','T-shirts')

}

export function isHomePage(){
    return assertHomePageAds()&&assertWomenSection()
}