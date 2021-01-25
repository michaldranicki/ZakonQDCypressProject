/// <reference types="cypress" />

import { should } from 'chai'
import { contains } from 'cypress/types/jquery'
import { attachFile, emailAddressField, homeButton, messageBox, orderReferenceField, subjectHeadingList, submitButton } from 'pageobjects/pageelements/ContactUsPageElement'

export function assertHomeButton(){

    return homeButton().should('have.class','home')

}

export function assertSubjectHeadingList(){

    return subjectHeadingList().its('children').should('have.length',2)

}

export function assertEmailAddressField(){

    return emailAddressField().should('have.class','form-control grey validate')

}

export function assertOrderReferenceField(){

    return orderReferenceField().should('have.class','form-control grey')

}

export function assertAttachFile(){

    return attachFile().should('have.class','uploader')

}

export function assertMessageBox(){

    return messageBox().should('be.empty')

}

export function assertSubmitButton(){

    return submitButton().should('have.class','button btn btn-default button-medium')

}