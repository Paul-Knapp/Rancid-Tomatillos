 import posters from '../fixtures/movie_posters.json' 
 import votes from '../fixtures/vote_up.json'

describe('Rancid Tomatillos Main page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies', { fixture: 'movie_posters.json'})
    cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155', { fixture: 'vote_up.json'})
    cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/680', { fixture: 'vote_down.json'})
    
    cy.visit('http://localhost:3000')
  })

  it('displays the application title', () => {
  
    cy.get('h1').should('contain', 'rancid tomatillos')
  })

  it('displays a collection of movies', () => {
    cy.get('section').should('exist')
    cy.get('.MoviePoster').should('have.length', 4)

    cy.get('.MoviePoster').first().within(() => {
      cy.get('img.movie-poster').should('be.visible')
      cy.get('.vote-count').should('exist')
      cy.get('.upvote-button').should('be.visible')
      cy.get('.downvote-button').should('be.visible')
    })

    cy.get('.MoviePoster').last().within(() => {
      cy.get('img.movie-poster').should('be.visible')
      cy.get('.vote-count').should('exist')
      cy.get('.upvote-button').should('be.visible')
      cy.get('.downvote-button').should('be.visible')
    })
  })

  it('can vote on posters', () => {
    cy.get('.MoviePoster').first().within(() => {
      cy.get('.vote-count').contains('32544')
      cy.get('.upvote-button').first().click()
      cy.get('.vote-count').contains('32545')
    })
  
    cy.get('.MoviePoster').last().within(() => {
      cy.get('.vote-count').contains('27642')
      cy.get('.downvote-button').first().click()
      cy.get('.vote-count').contains('27641')
    })
  })
})