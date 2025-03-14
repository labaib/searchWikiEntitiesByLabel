# searchWikiEntitiesByLabel
Funzione per la ricerca di elementi Wikidata partendo da un'etichetta



## Importazione


### CDN

jsDelivr serve automaticamente i file GitHub con il tipo MIME `application/javascript`, l'URL segue il formato `https://cdn.jsdelivr.net/gh/<user>/<repo>@<branch>/<file>`

```
import { searchWikiEntitiesByLabel } from 'https://cdn.jsdelivr.net/gh/labaib/searchWikiEntitiesByLabel@main/index.js';
```

> Pro: aggiornamento automatico; Contro: pagina carica più lentamente 

### Download locale

Il file può essere scaricato localmente e caricato insieme agli altri file JavaScript
```
import { searchWikiEntitiesByLabel } from './js/searchWikiEntitiesByLabel.js';
```

> Pro: più veloce; Contro: aggiornamento manuale 


## Esempi

```
<script type="module">
        
 import { searchWikiEntitiesByLabel } from 'https://cdn.jsdelivr.net/gh/labaib/searchWikiEntitiesByLabel@main/index.js';

 (async () => {
     const entities = await searchWikiEntitiesByLabel("Dante Alighieri", "it", 10);
 })();

</script>
```
```
<script type="module">
        
  import { searchWikiEntitiesByLabel } from './js/searchWikiEntitiesByLabel.js';

  (async () => {
    const entities = await searchWikiEntitiesByLabel("Dante Alighieri", "it", 10);
  })();

</script>
```