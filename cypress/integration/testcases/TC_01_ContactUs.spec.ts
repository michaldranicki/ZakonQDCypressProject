/// <reference types="cypress" />

import { contactUs, navigateToUrl, validateTitle } from 'pageobjects/pageactions/HomePageAction'
import { fillInContact, returnToHome } from 'pageobjects/pageactions/contactUsPageAction'
import * as data from 'fixtures/contactUsData.json'
import {assertContactUsButton} from 'pageobjects/pageassertions/HomePageAssertion'
import { assertHomeButton, assertSubjectHeadingList } from 'pageobjects/pageassertions/ContactUsPageAssertion'

describe("Contact Us Form",()=>{
    

        // const homePage = new HomePageAction()
        // const contactUsPage = new ContactUsPageAction()
       
    
        before(()=>{
    
            navigateToUrl()
                
        })
    
        it("Validate title of the page",()=>{
    
            validateTitle().should('eq','My Store')
    
        })
    
        it("Access contact us form",()=>{
                        
            contactUs()
            assertContactUsButton()
            assertHomeButton()
            assertSubjectHeadingList()
           
            fillInContact(data.subject,data.email,data.order,data.msg)
            returnToHome()

        })
    
    
})