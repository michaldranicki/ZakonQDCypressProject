/// <reference types="cypress" />



import {navigateToUrl} from "../../pageobjects/pageactions/HomePageAction";
import {isHomePage} from "../../pageobjects/pageassertions/HomePageAssertion";
import {signInButton} from "../../pageobjects/pageelements/HomePageElement";
import {createAccountButton} from "../../pageobjects/pageelements/SignInPageElement";
import {isSignInPage} from "../../pageobjects/pageassertions/signInPageAssertion";

describe("Create account",()=>{

        before(()=>{
           navigateToUrl()
        })
    
        it("Validate if it is homePage",()=>{
        isHomePage()
        })
    
        it("Access sign in page",()=>{
        signInButton().click()
                isSignInPage()
        })

        it("Put in email and click create account button",()=>{

        })
    
    
})