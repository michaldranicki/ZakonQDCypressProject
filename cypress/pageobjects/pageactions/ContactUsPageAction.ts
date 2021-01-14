/// <reference types="cypress" />

import ContactUsPageElement from '../pageelements/ContactUsPageElement'

export default class ContactUsPageAction{

    constructor (){

        globalThis.contactUsPageElement = new ContactUsPageElement()

    }

    returnToHome(){

        globalThis.contactUsPageElement.homeButton().click()

    }

    fillInContact(subject,email,order,msg){

        globalThis.contactUsPageElement.subjectHeadingList().select(subject)
        globalThis.contactUsPageElement.emailAddressField().type(email)
        globalThis.contactUsPageElement.orderReferenceField().type(order)
        globalThis.contactUsPageElement.messageBox().type(msg)
        globalThis.contactUsPageElement.submitButton().click()

    }

}