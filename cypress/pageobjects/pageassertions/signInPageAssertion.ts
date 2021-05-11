/// <reference types="cypress" />

import {createAccountButton} from "../pageelements/SignInPageElement";
import {signInButton} from "../pageelements/HomePageElement";

export function isSignInPage(){
    createAccountButton()&&signInButton().should('be.visible')
}