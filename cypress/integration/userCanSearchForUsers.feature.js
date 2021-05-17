describe('User can search for users on github', () => {
  describe('Successfully search', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.github.com/users', {
        fixture: 'people.json',
      });
      cy.visit('/');
    });

    it('is expected to search for defunkt', () => {
      cy.get('[data-cy=search-input]').type('defunkt');
      cy.get('[data-cy=search-btn]').click();
      cy.get('[data-cy=result-output]').should('contain', 'defunkt');
    });
  });
});
