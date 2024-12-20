import details from '../fixtures/movie_details.json'

describe('movie details spec',() => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/389', { fixture: 'movie_details.json' });
    })


    it('should be clickable',() =>{
        cy.visit('http://localhost:3000')
        cy.get('img').first().click()
        cy.get('header > :nth-child(1)').should('contain', 'rancid tomatillos')
        cy.get('section > :nth-child(2)').should('contain', '12 Angry Men' )
        cy.get('section > :nth-child(3)').should('contain', 'Drama' )
    })
})