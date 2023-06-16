const getSiteDetails = async (siteId) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const data = await fetch(
    `http://localhost:3000/api/sites/${siteId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result);
    })
    .catch((error) => console.log("error", error));

  return data;
};

export default getSiteDetails;
