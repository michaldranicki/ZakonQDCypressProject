/// <reference types="cypress" />

import HomePageAction from '../../pageobjects/pageactions/HomePageAction'
import ContactUsPageAction from '../../pageobjects/pageactions/contactUsPageAction'
import SignInPageAction from '../../pageobjects/pageactions/SignInPageAction'
import CreateAccountPageAction from '../../pageobjects/pageactions/CreateAccountAction'

describe("Create account",()=>{
    

        const homePage = new HomePageAction()
        const contactUsPage = new ContactUsPageAction()
        const signInPage = new SignInPageAction()
        const CreatePage = new CreateAccountPageAction()
    
        before(()=>{
    
            homePage.navigateToUrl()
            cy.fixture('createAccountData.json').then((createAccountData)=>{

                globalThis.data = createAccountData
            })
    
        })
    
        it("Validate title of the page",()=>{
    
            homePage.validateTitle().should('eq','My Store')
    
        })
    
        it("Access sign in page",()=>{

            homePage.contactUs()
           
            contactUsPage.fillInContact(globalThis.data.subject,globalThis.data.email,globalThis.data.order,globalThis.data.msg)
            contactUsPage.returnToHome()

        })
    
    
})