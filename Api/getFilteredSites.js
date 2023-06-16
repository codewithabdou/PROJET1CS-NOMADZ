const getFilteredSites = async ({ categorie, wilaya, theme }) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  console.log(theme, wilaya, categorie);

  const data = await fetch(
    `http://localhost:3000/api/sites?wilaya=${wilaya}&theme=${theme}&categorie=${categorie}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      let tab = JSON.parse(result);
      if (Array.isArray(tab)) return tab;
      else return [];
    })
    .catch((error) => console.log("error", error));
  return data;
};

export default getFilteredSites;
