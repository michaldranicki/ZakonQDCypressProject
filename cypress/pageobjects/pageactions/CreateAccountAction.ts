/// <reference types="cypress" />

import {mrRadioButton,firstNameField, lastNameField, additionaInformationBox, addressAliasField, addressField1, cityField, companyField, countryList, daysDate, emailField, firstNameAddress, homePhoneField, lastNameAddress, mobilePhoneField, monthsDate, newsletterCheckbox, passwordField, postCodeField, registerButton, specialOfferCheckbox, stateList, yearsDate, msRadioButton} from 'pageobjects/pageelements/CreateAccountPageElement'

  

export function beMr(firstName,lastName,email,password,day,month,year,company,address1,city,state,postCode,country,information,homePhone,mobilePhone,alias){

    mrRadioButton().check()
    firstNameField().type(firstName)
    lastNameField().type(lastName)
    emailField().type(email)
    passwordField().type(password)
    daysDate().select(day)
    monthsDate().select(month)
    yearsDate().select(year)
    newsletterCheckbox().check()
    specialOfferCheckbox().check()
    firstNameAddress().type(firstName)
    lastNameAddress().type(lastName)
    companyField().type(company)
    addressField1().type(address1)
    cityField().type(city)
    stateList().type(state)
    postCodeField().type(postCode)
    countryList().select(country)
    additionaInformationBox().type(information)
    homePhoneField().type(homePhone)
    mobilePhoneField().type(mobilePhone)
    addressAliasField().type(alias)
    registerButton().click()

    }

export function beMs(){

    msRadioButton().check()

}