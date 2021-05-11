/// <reference types="cypress" />



import {navigateToUrl} from "../../pageobjects/pageactions/HomePageAction";
import {isHomePage} from "../../pageobjects/pageassertions/HomePageAssertion";
import {signInButton} from "../../pageobjects/pageelements/HomePageElement";

describe("Create account",()=>{

        before(()=>{
           navigateToUrl()
        })
    
        it("Validate if it is homePage",()=>{
        isHomePage()
        })
    
        it("Access sign in page",()=>{
        signInButton().click()
        })
    
    
})