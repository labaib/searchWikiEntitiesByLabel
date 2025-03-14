/**
* Ottieni match Wikidata partendo da un'etichetta
* @param {string} label - Stringa da ricercare
* @param {string} lang - ISO Lingua ["it", "en", "fr"]
* @param {number} limit - Limite massimo risultati
* @param {string} [endpoint="www.wikidata.org"] - opzionale
* @returns {Array<{id: string, title: string, pageId: number, concepturi: string, repository: string, url: string, display: Object, label: string, description: string, match: Object, aliases?: Array>}|[]} - Ritorna un array di oggetti 
*/

const searchWikiEntitiesByLabel = async (label, lang, limit, endpoint = "www.wikidata.org") => {

  // Parametri URL
  const params = new URLSearchParams({
      action: "wbsearchentities",
      search: label,
      format: "json",
      language: lang,
      uselang: lang,
      type: "item",
      limit: limit,
      origin: "*"
  });

  const url = `https://${endpoint}/w/api.php?${params.toString()}`;
  const response = await fetch(url);
  const json = await response.json();
  const data = json.search
        
  return data

}

export { searchWikiEntitiesByLabel };
