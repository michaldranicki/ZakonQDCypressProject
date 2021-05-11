/// <reference types="cypress" />



import {navigateToUrl} from "../../pageobjects/pageactions/HomePageAction";
import {isHomePage} from "../../pageobjects/pageassertions/HomePageAssertion";
import {signInButton} from "../../pageobjects/pageelements/HomePageElement";
import {isSignInPage} from "../../pageobjects/pageassertions/signInPageAssertion";
import {clickFunction, typeFunction} from "../../actionfunction/actionFunctions";
import * as locator from  'locators.json';
import * as data from 'fixtures/createAccountData.json'

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
        typeFunction(locator.signInPage.emailCreateAccount,data.email)
                clickFunction('#SubmitCreate')
        })


    
    
})