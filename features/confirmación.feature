Feature: Finalización de compra

    #Completar una compra exitosamente
    @checkout-complete    
    Scenario: Completar una compra exitosamente
        Given que el cliente ha iniciado sesión y está en productos
        When agrega el producto "sauce-labs-backpack" al carrito
        And abre el carrito de compras
        And inicia el proceso de compra
        And completa los datos del cliente con nombre "Diego", apellido "Depaz" y código postal "93843"
        And continúa a la revisión del pedido
        Then el resumen debe contener el producto "Sauce Labs Backpack"
        When confirma el pedido
        Then debe visualizar el mensaje de confirmación "Thank you for your order!"
        And debe estar en la página de compra completada
