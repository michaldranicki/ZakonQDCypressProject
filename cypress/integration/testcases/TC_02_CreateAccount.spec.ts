/// <reference types="cypress" />



import {navigateToUrl} from "../../pageobjects/pageactions/HomePageAction";
import {isHomePage} from "../../pageobjects/pageassertions/HomePageAssertion";
import {signInButton} from "../../pageobjects/pageelements/HomePageElement";
import {isSignInPage} from "../../pageobjects/pageassertions/signInPageAssertion";
import {checkFunction, clickFunction, selectFunction, typeFunction} from "../../actionfunction/actionFunctions";
import * as locator from  'locators.json';
import * as data from 'fixtures/createAccountData.json'

describe("Create account",()=>{

        const email = data.email;
        const firstName = data.firstName;
        const lastName = data.lastName;

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
        typeFunction('#email_create',email);
        clickFunction('#SubmitCreate');
        })

        it("Fill in Form",()=>{
        checkFunction('#id_gender1');
        typeFunction('#customer_firstname',firstName);
        typeFunction('#customer_lastname',lastName);
        typeFunction('#passwd',data.password);
        selectFunction('#days',data.day);
        selectFunction('#months',data.month);
        selectFunction('#years',data.year);
        checkFunction('#newsletter');
        checkFunction('#optin');
        typeFunction('#firstName',firstName);
        typeFunction('#lastName',lastName);
        typeFunction('#company',data.company);
        typeFunction('#address1',data.address1);
        typeFunction('#city',data.city);
        selectFunction('#id_state',data.state);
        typeFunction('#postcode',data.postCode);
        selectFunction('#id_country',data.country);
        typeFunction('#other',data.information);
        typeFunction('#phone',data.homePhone);
        typeFunction('#phone_mobile',data.mobilePhone);
        typeFunction('#alias',data.alias);
        clickFunction('#submitAccount');

        })
})