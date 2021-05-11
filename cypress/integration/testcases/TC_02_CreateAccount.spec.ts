/// <reference types="cypress" />



import {navigateToUrl} from "../../pageobjects/pageactions/HomePageAction";
import {isHomePage} from "../../pageobjects/pageassertions/HomePageAssertion";
import {signInButton} from "../../pageobjects/pageelements/HomePageElement";
import {isSignInPage} from "../../pageobjects/pageassertions/signInPageAssertion";
import {checkFunction, clickFunction, selectFunction, typeFunction} from "../../actionfunction/actionFunctions";
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
        typeFunction('#SubmitCreate',data.email)
                clickFunction('#SubmitCreate')
        })

        it("Fill in Form",()=>{
        checkFunction('#id_gender1');
        typeFunction('#customer_firstname',data.firstName);
        typeFunction('#customer_lastname',data.lastName);
        typeFunction('#passwd',data.password);
        selectFunction('#days',data.day);
        selectFunction('#months',data.month);
        selectFunction('#years',data.year);
        checkFunction('#newsletter');
        checkFunction('#optin');

        })
})