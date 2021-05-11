/// <reference types="cypress" />



import {navigateToUrl} from "../../pageobjects/pageactions/HomePageAction";
import {isHomePage} from "../../pageobjects/pageassertions/HomePageAssertion";

describe("Create account",()=>{

        before(()=>{
    
           navigateToUrl()
    
        })
    
        it("Validate if it is homePage",()=>{
    
        isHomePage()
    
        })
    
        it("Access sign in page",()=>{



        })
    
    
})