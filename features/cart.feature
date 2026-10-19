Feature: Carrito de compras

    #Agregar producto al carrito y verificar el contador
    @add-product
    Scenario: Agregar un producto al carrito
        Given que el cliente ha iniciado sesión y está en productos
        When agrega el producto "sauce-labs-backpack" al carrito
        Then el contador del carrito debe mostrar "1"

    #Verificar que el producto agregado se visualiza en el carrito
    @view-cart
    Scenario: Visualizar el producto agregado en el carrito
        Given que el cliente ha iniciado sesión y está en productos
        When agrega el producto "sauce-labs-backpack" al carrito
        And abre el carrito de compras
        Then el carrito debe contener el producto "Sauce Labs Backpack"