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
        globalThis.createAccountPageElement.emailField().type(email)
        globalThis.createAccountPageElement.passwordField(password)
        globalThis.createAccountPageElement.daysDate().select(day)
        globalThis.createAccountPageElement.monthsDate().select(month)
        globalThis.createAccountPageElement.yearsDate().select(year)
        globalThis.createAccountPageElement.newsletterCheckbox().check()
        globalThis.createAccountPageElement.specialOfferCheckbox().check()
        globalThis.createAccountPageElement.firstNameAddress().type(firstName)
        globalThis.createAccountPageElement.lastNameAddress().type(lastName)
        globalThis.createAccountPageElement.companyField().type(company)
        globalThis.createAccountPageElement.addressField1().type(address1)
        globalThis.createAccountPageElement.cityField().type(city)
        globalThis.createAccountPageElement.stateList().type(state)
        globalThis.createAccountPageElement.postCodeField().type(postCode)
        globalThis.createAccountPageElement.countryList().select(country)
        globalThis.createAccountPageElement.additionaInformationBox().type(information)
        globalThis.createAccountPageElement.homePhoneField().type(homePhone)
        globalThis.createAccountPageElement.mobilePhoneField().type(mobilePhone)
        globalThis.createAccountPageElement.addressAliasField().type(alias)
        globalThis.createAccountPageElement.registerButton().click()

    }

    beMs(){

        globalThis.createAccountPageElement.msRadioButton().check()

    }

    

}