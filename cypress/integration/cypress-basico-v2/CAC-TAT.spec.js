    /// <reference types="Cypress" />

    describe('Central de Atendimento ao Cliente TAT', function() {
        beforeEach(function() {
            cy.visit('./src/index.html')
        })    
        
        it('verifica o título da aplicação', function() {
            cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        })


    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste toninho, mandioquinha, itão, floquinho, flavinga, caxquinha, campeão'

        cy.get('#firstName').type('patricia')
        cy.get('#lastName').type('vilas boas')
        cy.get('#email').type('pat@teste.com')
        cy.get('#open-text-area').type(longText, { delay: 0})
        cy.contains('button', 'enviar').click()
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('patricia')
        cy.get('#lastName').type('vilas boas')
        cy.get('#email').type('patteste.com')
        cy.get('#open-text-area').type('text')
        cy.contains('button', 'enviar').click()
        cy.get('.error').should('be.visible')
    })


    it('caracter nao numerico mantem campo telefone vazio', function() {
        cy.get('#phone')
            .type('abcdefghijl')
            .should('have.value', '')

    })


    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('patricia')
        cy.get('#lastName').type('vilas boas')
        cy.get('#email').type('pat@teste.com')
        cy.contains('#checkbox', 'telefone').click()
        cy.get('#open-text-area').type('text')
        cy.contains('button', 'enviar').click()

        cy.get('.error').should('be.visible')
    })


    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')
            .type('Patricia')
            .should('have.value', 'Patricia')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('vilas boas')
            .should('have.value', 'vilas boas')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('pat@gmail.com')
            .should('have.value', 'pat@gmail.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('3766736373')
            .should('have.value', '3766736373')
            .clear()
            .should('have.value', '')
        cy.get('#open-text-area')
            .type('iaiiaaiiaiaiiiai')
            .should('have.value', 'iaiiaaiiaiaiiiai')
            .clear()
            .should('have.value', '')
    })
    


    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.visit('./src/index.html')
        cy.contains('button', 'enviar').click()
        cy.get('.error').should('be.visible')
    })


    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })


    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('select').select('youtube')
        .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('select').select('Mentoria')
        .should('have.value', 'Mentoria')
    })

    //it('seleciona um produto (Blog) por seu índice', function() {
    //    cy.get('select').select('Blog')
     //   .should('have.value', 'Blog')
    //})

    //it.only('marca cada tipo de atendimento', function() {
      //  cy.get('input [type = "radio"]')
        //.should('have.lenght', 3)
        //.each(function($radio) {
          //  cy.wrap($radio).check()
            //cy.wrap($radio).should('be checked')
        //})
    //


    it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })


    it('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.get('input [type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input) {
            expect(input[0].files[0].name).to.equal('example.json')
        })
    })


    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example').as('sampleFile')
        cy.get('input[type="file"]')
        .selectFile(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })


    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
        cy.get('#privacy a')
        .should('have.attr', 'target', '_blank')
    })


    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()
        cy.contains('Talking About Testing').should('be.visible')
    })


    

})



    













