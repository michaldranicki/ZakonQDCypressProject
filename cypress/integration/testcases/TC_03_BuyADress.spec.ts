/// <reference types="cypress" />

import { navigateToUrl, validateTitle } from "pageobjects/pageactions/HomePageAction"
import { assertPopularSection } from "pageobjects/pageassertions/HomePageAssertion"



describe("Buy a dress",()=>{
    

              
    
        before(()=>{
    
            navigateToUrl()
                
        })
    
        it("Validate title of the page",()=>{
    
            validateTitle().should('eq','My Store')
    
        })
    
        it("Check dresses",()=>{

            assertPopularSection()

        })
    
    
})