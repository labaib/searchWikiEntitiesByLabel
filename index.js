const searchWikiEntitiesByLabel = async (endpoint, label, lang, limit) => {

  // Parametri URL
  const params = new URLSearchParams({
      action: "wbsearchentities",
      search: label,
      format: "json",
      language: lang,  // formato "it", "en", "fr"
      uselang: lang,  // formato "it", "en", "fr"
      type: "item",
      limit: limit,  // numero di risultati
      origin: "*"
  });

  const url = `https://${endpoint}/w/api.php?${params.toString()}`;
  const response = await fetch(url, { credentials: "include" });
  const json = await response.json();
  const data = json.search
        
  return data

}

export { searchWikiEntitiesByLabel };
