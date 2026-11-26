**`Exercici 2 - Integració i optimització de contingut multimèdia en Angular`**

`L’objectiu és aplicar bones pràctiques d’integració de contingut multimèdia, garantint la compatibilitat amb diferents navegadors, l’accessibilitat i un bon rendiment de la pàgina web.`

# `1. Galeria d’imatges` 

* `Creeu un component Angular anomenat GalleryComponent que mostri una galeria d’imatges.`  
* `Les imatges han d’estar optimitzades amb formats WebP o AVIF, compressió adequada i redimensió segons la mida de la pantalla.`  
* `Afegiu l’atribut alt per garantir l’accessibilitat i, si cal, utilitzeu srcset i sizes per oferir diferents resolucions segons la pantalla.`  
* `Utilitzeu loading="lazy" per carregar les imatges que es trobin fora de la pantalla inicial.`  
* `Organitzeu les imatges dins de la carpeta de recursos estàtics del projecte Angular.`

# `2. Àudio` 

* `Creeu un component Angular anomenat AudioPlayerComponent que permeti reproduir almenys un fitxer d’àudio.`  
* `Incloeu els formats MP3 i OGG mitjançant diferents elements <source> per millorar la compatibilitat entre navegadors.`  
* `Afegiu l’atribut controls per permetre a l’usuari controlar la reproducció.`  
* `Incloeu un missatge alternatiu (fallback) per als navegadors que no suportin la reproducció d’àudio.`

# `3. Vídeo` 

* `Creeu un component Angular anomenat VideoPlayerComponent que permeti reproduir un vídeo optimitzat.`  
* `Incloeu com a mínim dos formats de vídeo (MP4 i WebM) per garantir la compatibilitat entre navegadors.`  
* `Activeu els controls de reproducció mitjançant l’atribut controls.`  
* `Utilitzeu preload="none" per evitar la descàrrega innecessària del vídeo abans que l’usuari decideixi reproduir-lo.`  
* `Si el vídeo es troba fora de la primera pantalla, implementeu una càrrega diferida (lazy loading), si és necessari mitjançant IntersectionObserver.`  
* `Afegiu subtítols mitjançant l’element <track> quan el contingut del vídeo ho requereixi.`

# `4. Organització en components Angular` 

* `Cada tipus de contingut multimèdia ha de ser un component Angular independent (GalleryComponent, AudioPlayerComponent, VideoPlayerComponent).`  
* `Creeu els components en fitxers independents per mantenir una estructura de projecte organitzada.`  
* `Utilitzeu correctament els fitxers .ts, .html i .css de cada component.`  
* `Importeu i utilitzeu correctament tots els components dins del component principal AppComponent.`  
* `Utilitzeu les plantilles HTML d’Angular per definir l’estructura dels elements multimèdia i els seus atributs.`  
* `Utilitzeu els selectors dels components Angular per integrar-los dins de la pàgina principal.`

# `5. Optimització i bones pràctiques` 

* `Comprimiu les imatges i els vídeos per reduir-ne el pes sense perdre una qualitat visual significativa.`  
* `Comproveu la compatibilitat dels formats multimèdia amb diferents navegadors mitjançant Can I Use (https://caniuse.com/).`  
* `Utilitzeu l’atribut alt en les imatges.`  
* `Incloeu subtítols als vídeos quan sigui necessari.`  
* `Manteniu visibles i accessibles els controls de reproducció.`  
* `Eviteu la reproducció automàtica amb so (autoplay).`  
* `Verifiqueu que tots els components funcionin correctament i que el contingut multimèdia es visualitzi i reprodueixi adequadament en diferents dispositius i navegadors.`

  