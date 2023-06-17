const removeFav = async (siteId) => {
  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  await fetch(`http://localhost:3000/api/favoris/${siteId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export default removeFav;
