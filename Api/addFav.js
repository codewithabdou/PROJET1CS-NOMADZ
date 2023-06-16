const addFav = async (siteId) => {
  var requestOptions = {
    method: "post",
    redirect: "follow",
    headers: {
      body: JSON.stringify({ siteId: siteId }),
    },
  };

  const data = await fetch(`http://localhost:3000/api/favoris/`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export default addFav;
