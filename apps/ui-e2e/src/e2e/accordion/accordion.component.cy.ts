describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=accordioncomponent--primary'));
  it('should render the component', () => {
    cy.get('slick-accordion').should('exist');
  });
});
