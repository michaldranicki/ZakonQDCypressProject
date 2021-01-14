/// <reference types="cypress" />

import { emailAddressField, homeButton, messageBox, orderReferenceField, subjectHeadingList, submitButton } from 'pageobjects/pageelements/ContactUsPageElement'


export function returnToHome(){

    homeButton().click()

}

export function fillInContact(subject,email,order,msg){

    subjectHeadingList().select(subject)
    emailAddressField().type(email)
    orderReferenceField().type(order)
    messageBox().type(msg)
    submitButton().click()

}