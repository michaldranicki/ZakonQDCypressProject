/// <reference types="cypress" />

import { navigateToUrl, search, validateTitle } from "pageobjects/pageactions/HomePageAction"
import { assertBestSellerSection, assertHomePageAds, assertHomePageSlider, assertPopularSection, assertWomenSection } from "pageobjects/pageassertions/HomePageAssertion"



describe("Buy a dress",()=>{
    

              
    
        beforeEach(()=>{
    
            navigateToUrl()
                
        })
    
        it("Validate title of the page",()=>{
    
            validateTitle().should('eq','My Store')
    
        })
    
        it("Check dresses",()=>{

            assertPopularSection()
            assertHomePageSlider()
            assertHomePageAds()
            assertWomenSection()
            assertBestSellerSection()

        })

        it("Buy a dress",()=>{

            search('dress')

        })
   
            
})