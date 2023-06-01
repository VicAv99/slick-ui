describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uicomponent--primary'));
  it('should render the component', () => {
    cy.get('slick-ui').should('exist');
  });
});
