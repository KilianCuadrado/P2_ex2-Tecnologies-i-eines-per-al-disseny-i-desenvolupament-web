**`Exercici 1 - Menú de navegació`**

`En aquesta primera tasca hauràs de configurar el sistema de rutes de la teva aplicació Angular i crear un menú de navegació funcional que permeti accedir als diferents components de la web.`

### **`Requisits de l'exercici`**

* **`Configura el sistema de rutes d'Angular`** `utilitzant el mòdul @angular/router.`  
* **`Defineix les rutes principals`** `de la teva aplicació dins del fitxer app.routes.ts.`  
* **`Crea un component de navegació`** `(navbar o similar) que utilitzi els elements següents:`  
  * `RouterLink: per navegar entre les diferents pàgines de l'aplicació.`  
  * `RouterLinkActive: per aplicar estils CSS a l'enllaç de la pàgina activa.`  
  * `RouterOutlet: per mostrar el component corresponent a la ruta seleccionada.`  
* **`Configura el component principal`** `(app.component.ts) perquè incorpori el menú de navegació i permeti visualitzar el contingut de les diferents rutes.`

  ### **`El menú de navegació ha de complir els requisits següents:`**

* `Permetre navegar entre les diferents rutes sense recarregar la pàgina.`  
* `Romandre visible en tot moment, independentment de la pàgina que s'estigui visitant.`  
* `Mostrar el contingut de cada ruta mitjançant router-outlet.`  
* `Aplicar un estil CSS diferent a l'enllaç de la pàgina que estigui activa.`  
* `Mantenir una estructura visual coherent amb el disseny de la resta de l'aplicació.`

**`Important:`** `El menú de navegació ha de situar-se fora del router-outlet perquè es mantingui visible quan es canviï de pàgina.`