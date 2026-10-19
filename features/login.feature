Feature: Inicio de sesión en Sauce Demo

   #Login exitoso
   @login
   Scenario: Inicio de sesión con credenciales válidas
      Given que el usuario está en la página de inicio de sesión
      When inicia sesión con el usuario "standard_user" y contraseña "secret_sauce"
      Then debería visualizar la página de productos

   #Login con credenciales invalidas
   @login-invalid
   Scenario: Inicio de sesión con credenciales inválidas
      Given que el usuario está en la página de inicio de sesión
      When inicia sesión con el usuario "invalid_user" y contraseña "wrong_password"
      Then debería visualizar un mensaje de error que contiene "Epic sadface: Username and password do not match any user in this service"

   #Login con usuario bloqueado
   @login-blocked
   Scenario: Inicio de sesión con usuario bloqueado
      Given que el usuario está en la página de inicio de sesión
      When inicia sesión con el usuario "locked_out_user" y contraseña "secret_sauce"
      Then debería visualizar un mensaje de error que contiene "Sorry, this user has been locked out"