```typescript
describe('Home', () => {
  it('deve exibir o título do host e botão de login', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Host Next.js').should('exist');
    cy.contains('Entrar').should('exist');
  });
});
```;
