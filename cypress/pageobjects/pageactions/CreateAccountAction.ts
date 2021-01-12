/// <reference types="cypress" />

import CreateAccountPageElement from '../pageelements/CreateAccountPageElement'

export default class CreateAccountPageAction{

    constructor(){

        globalThis.createAccountPageElement = new CreateAccountPageElement()

    }

    beMr(firstName,lastName,email,password,day,month,year,company,address1,city,state,postCode,country,information,homePhone,mobilePhone,alias){

        globalThis.createAccountPageElement.mrRadioButton().check()
        globalThis.createAccountPageElement.firstNameField().type(firstName)
        globalThis.createAccountPageElement.lastNameField().type(lastName)


    }

    beMs(){

        globalThis.createAccountPageElement.msRadioButton().check()

    }

    

}