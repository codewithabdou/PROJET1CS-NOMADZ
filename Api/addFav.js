const addFav = async (siteId) => {
  var raw = `{\r\n    \"siteId\":${siteId}\r\n}`;
  console.log(raw);

  var requestOptions = {
    method: "post",
    redirect: "follow",
    body: raw,
  };

  await fetch(`/api/favoris/`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export default addFav;
