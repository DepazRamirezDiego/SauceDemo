<h2><b>Guía de instalación y ejecución de pruebas</b></h2>

<h3><b>1. Instalación de dependencias</b></h3>

<p><strong>npm install</strong>   ----- Instalar las dependencias del archivo <code>package.json</code>.</p>

<p><strong>npx playwright install chromium</strong>   ----- Instalar el navegador Chromium</p>


<h3><b>2. Ejecución de las pruebas</b></h3>

<p><strong>npm test</strong>   ----- Ejecutar todos los escenarios encontrados en los archivos <code>.feature</code> configurados para Cucumber.</p>

<p><strong>npx cucumber-js --tags "@login"</strong>   ----- Ejecutar escenarios etiquetados con <code>@login</code> de existir en los archivos feature.</p>



<p>Para ejecutar un escenario específico, reemplazar <code>@login</code> por el tag correspondiente.</p>

<p><strong>Ejemplos:</strong></p>

<p><strong>npx cucumber-js --tags "@login-invalid"</strong>   ----- Ejecutarlos escenarios etiquetados con <code>@login-invalid</code> de existir en los archivos feature.</p>
<p><strong>npx cucumber-js --tags "@add-product"</strong>   ----- Ejecuta los escenarios etiquetados con <code>@add-product</code> de existir en los archivos feature.</p>

<br>
<br>

<p><strong>Nota: Se debe tener instalado Node.js, al igual que las extensiones "Cucumber (Gherkin) Full Support", y, "Playwright Test for VSCode"</strong></p>