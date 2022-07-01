//<reference types="cypress" />
// testscenario : What to do : describe("Purpose", function(){})
// testcase : How to do : it("Purpose", function(){})

//Two MAin Constructs are
//1. describe()
//2. it()

// Validate login of orangehrm.com

describe('Validate Functionality of Login', function () {
    it("Validate for correct credentials", function () {
        //Approach
        //Go to Page
        //find input element where we can input user id
        //find input element where we can innput password
        //click on login buttton

        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')

        //'<input name="txtUsername" id="txtUsername" type="text">' : Input element for USer name
        cy.get('#txtUsername').type('Admin') //Get above element by id which is input box and type 'Admin in it

        //<input name="txtPassword" id="txtPassword" autocomplete="off" type="password"> : Input Element for Password

        cy.get('#txtPassword').type('admin123')

        //<input type="submit" name="Submit" class="button" id="btnLogin" value="LOGIN">
        cy.get('#btnLogin').click()

        cy.get('h1').should('be.visible').and('have.text','Dashboard')
    })

    it.only("Validate for incorrect credentials",function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('jjdhhdkk') 
        cy.get('#txtPassword').type('hfhffj')
        cy.get('#btnLogin').click()
        // <span id="spanMessage">Invalid credentials</span>
        // cy.get(arguments).should('be.arguments')
        // cy.get('#spanMessage').should('be.visible').and('have.text',"Invalid Text") //Invalid Credentials
        cy.get('#spanMessage').should('be.visible')//.and('have.text',"Invalid credentials")
    })
})