const removeFav = async (siteId) => {
  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  await fetch(`/api/favoris/${siteId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export default removeFav;
