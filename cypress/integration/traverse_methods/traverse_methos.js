// Travering with DOM Elements
//Travers : Travel

// const { it } = require("mocha")



//Methods

// URL : http://www.webdriveruniversity.com/Data-Table/index.html
//1. eq() : //Case 1: Check if 2nd element of traverse food list has text banana
//Case 2: Check if 6th element of traverse food list has text Vegetables
// 

//We have one list there with class "traversal-food-list" : Check if its unique

describe('Tranverse method in cypress', function () {

    it('To get a DOM element at a specific index, use the .eq() command', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').eq(2).should('have.text', 'Banana')  //Check if element is unique
        //ullist with 11 items.find(all li elements).eq(el at index positn 2).should('have.text', Banana)
        cy.get('.traversal-food-list').find('li').eq(6).should('have.text', 'Vegetables')
    })

    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').first().should('have.text', 'Fruits')
        cy.get('.traversal-drinks-list').find('li').first().should('have.text', 'Coffee')
    })

    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').last().should('have.text', 'Lentils')
        cy.get('.traversal-drinks-list').find('li').last().should('have.text', 'Sugar')
    })

    it('To get children of DOM elements', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length', 11)
        cy.get('.traversal-food-list').children('#veggie').should('have.text', 'Vegetables')
        cy.get('.traversal-food-list').children('.list-header').should('have.text', 'FruitsVegetables')
        //there are two elements with class .list-header (Fruits and Vegetables)                     
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
    })

    it('To get the next sibling DOM element within elements, use the .next() command', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').eq(2).next().should('have.text', 'Blackberries')
        cy.get('#veggie').next().should('have.text', 'Asparagus')
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').eq(3).prev().should('have.text', 'Banana')
        cy.get('#veggie').prev().should('have.text', 'Figs')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').eq(3).siblings().should('have.length', 10)
        //There are total 10 li elements. T/f length of sibligs will be 10
        cy.get('.traversal-drinks-list').find('li').eq(2).siblings().should('have.length', 4)
        //There are total 5 li elements. T/f length of sibligs will be 4
        cy.get('.traversal-drinks-list').children().siblings().should('have.length', 5)  //*************
        //There are total 5 children elements and they are siblings of each other. T/f length of sibligs will be 5

    })
    it.only('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length',4)
        cy.get('#veggie').nextAll().eq(1).should('have.text','Broccoli')
        cy.get('.traversal-food-list').children().eq(2).nextAll().should('have.length',8)
        //cy.get('.traversal-food-list').children()All Children.eq(2)banana.nextAll().should('have.length',8) 
    })



})