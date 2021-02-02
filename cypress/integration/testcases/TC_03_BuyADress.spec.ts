/// <reference types="cypress" />

import { sample } from "cypress/types/lodash"
import { navigateToUrl, search, validateTitle } from "pageobjects/pageactions/HomePageAction"
import { assertIsVIsible, sampleFunction } from "pageobjects/pageassertions/AssertFunction"
import { assertBestSellerSection, assertHomePageAds, assertHomePageSlider, assertPopularSection, assertWomenSection } from "pageobjects/pageassertions/HomePageAssertion"
import { assertMainElement, assertTopSellers } from "pageobjects/pageassertions/shopPageAssertion"



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
            assertTopSellers()
            //assertMainElement()
            //assertShould('li',7)
            


        })
   
            
})