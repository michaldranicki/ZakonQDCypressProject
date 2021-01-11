/// <reference types="cypress" />

import HomePageAction from '../../pageobjects/pageactions/HomePageAction'
import ContactUsPageAction from '../../pageobjects/pageactions/contactUsPageAction'

describe("Contact Us Form",()=>{
    

        const homePage = new HomePageAction()
        const contactUsPage = new ContactUsPageAction()
        //const contactUsData = new contactUsData()
    
        before(()=>{
    
            homePage.navigateToUrl()
            cy.fixture('contactUsData.json').then((contactUsData)=>{

                globalThis.data = contactUsData
            })
    
        })
    
        it("Validate title of the page",()=>{
    
            homePage.validateTitle().should('eq','My Store')
    
        })
    
        it("Access contact us form",()=>{

            homePage.contactUs()
           
            contactUsPage.fillInContact(globalThis.data.subject,globalThis.data.email,globalThis.data.order,globalThis.data.msg)
            contactUsPage.returnToHome()

        })
    
    
})