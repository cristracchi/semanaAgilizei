/// <reference types="Cypress" />

context('Compra',() => {
  
    it('Efetuar uma compra de produto',() => {
        cy.backgroundLogin();
        cy.visit('/');

        let produto = 'Faded Short Sleeve T-shirts';
        cy.contains(produto).trigger('mouseover');

        cy.contains(produto)
          .parent()
          .siblings('div.button-container')
          .children('a')
          .first()
          .click();

          cy.get(".icon-ok")
          .parent()
          .should('contain.text', 'Product successfully added to your shopping cart');

           //Assert para produto adicionado ao carrinho
          cy.get('span#layer_cart_product_title')
            .should('contain.text', 'Faded Short Sleeve T-shirts')

          //Main page
          cy.get("div.button-container a[href$='controller=order']").click();
          cy.get("p.cart_navigation a[href$='order&step=1']").click();
          
          //Login
          // cy.get("#email").type("teste.agilizei123@mail.com");
          // cy.get("#passwd").type("agilizei123");
          // cy.get("button#SubmitLogin").click();

          //Assert para o checkbox de endereço de entrega
          //should (tipo de asserção, atributo, valor)
          cy.get("[type=checkbox]#addressesAreEquals").should('have.attr', 'checked', 'checked');
          cy.get("[type=checkbox]#addressesAreEquals").should('have.attr', 'name', 'same');

          //Checkout
          cy.get("button[name=processAddress]").click();

          //Address to delivery
          cy.get("[type=checkbox]#cgv").check();
          cy.get("button[name=processCarrier]").click();

          //Payment
          cy.get("a.bankwire").click();
          cy.get(".cart_navigation button[type=submit]")
            .find('span')
            .contains("I confirm my order").click();

            //Assert
              //expect
              //should
          cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.')

            //invoice details
            //1. Capiturar o texto do box
                        
            cy.get('div.box').invoke('text').then((text) => {
            //2. Filtrar texto para extrair apenas o id do pedido
                // console.log(text.match(/[A-Z][A-Z]+/g)[1])

               //3. Armazenar o id do pedido
                //writeFile -> parametros (caminho do arq (sempre a partir do root)| conteúdo do arquivo)
                //Cria um arquivo na pasta fixtures com o nome pedido.json e grava nele o número do pedido capturado pela regex
                cy.writeFile('cypress/fixtures/pedido.json', {id: `${ text.match(/[A-Z][A-Z]+/g)[1] }`})
            })



            cy.get(".cart_navigation a[href$='history']").click()
            
            //4. Obter o id do pedido armazenado no passo 3
            //Leitura de arquivo
             cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
                cy.get("table tr.first_item .history_link a")
                .should('contain.text', pedido.id)
             })
            
             //html
             // . = class
             //json - json path
             // . = nível dentro do caminho do json
            



 

       


    });
});