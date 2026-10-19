<h2><strong>Informe de Estrategia de Automatización de Pruebas</strong></h2>

<p>
  <b>Proyecto:</b> Sauce Demo<br>
  <b>Stack Tecnológico:</b> JavaScript, Node.js, Playwright, Cucumber (BDD), Gherkin
</p>

<hr>

<h3><strong>1. Estrategia de Automatización</strong></h3>
<p>La estrategia abarca la automatización de los flujos funcionales de mayor valor para el negocio:</p>

<ul>
  <li><b>Autenticación:</b> Validación de inicio de sesión exitoso (<code>standard_user</code>), restricción de acceso por credenciales inválidas y control de usuarios bloqueados (<code>locked_out_user</code>).</li>
  <li><b>Gestión de Carrito y Checkout:</b> Selección e inclusión de artículos desde el inventario, persistencia y visualización en el carrito, y flujo completo de ingreso de datos y confirmación de compra.</li>
</ul>

<p><b>Criterios de Estabilidad y Sincronización:</b></p>
<ul>
  <li>Se implementaron aserciones explícitas sobre URLs, elementos del DOM, mensajes de error y totales de compra.</li>
  <li>Se combinaron las esperas automáticas (<i>auto-waiting</i>) de Playwright con esperas explícitas sobre la visibilidad de elementos clave para mitigar la intermitencia (<i>flakiness</i>) por tiempos de respuesta.</li>
</ul>

<h3><strong>2. Patrones de Diseño y Arquitectura</strong></h3>
<p>
  Se implementó el patrón <b>Page Object Model (POM)</b> para desacoplar la capa de prueba (escenarios BDD) de la lógica de interacción con la interfaz web.
</p>

<p><b>Estructura de Page Objects:</b></p>
<ul>
  <li><code>LoginPage.js</code>: Encapsula selectores y operaciones de autenticación y captura de mensajes de error.</li>
  <li><code>ProductsPage.js</code>: Gestiona la interacción con el catálogo y la adición de productos al carrito.</li>
  <li><code>CartPage.js</code>: Administra la verificación de items agregados y la transición al pago.</li>
  <li><code>CheckoutPage.js</code>: Captura la información del comprador y procesa la confirmación del pedido.</li>
</ul>