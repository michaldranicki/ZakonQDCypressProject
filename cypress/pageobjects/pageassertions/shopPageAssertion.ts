/// <reference types="cypress" />

import { mainElements, topSellers } from 'pageobjects/pageelements/ShopPageElement'

export function assertTopSellers(){

    topSellers().find('li').should('have.length',7)

}

export function assertMainElement(){

    mainElements().find('li').its('contents').should('have.length',7)

}