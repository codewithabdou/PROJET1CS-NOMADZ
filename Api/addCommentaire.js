const addCommentaire = async (data) => {
  console.log(data);

  var requestOptions = {
    method: "post",
    redirect: "follow",
    body: JSON.stringify(data),
  };

  await fetch(`/api/eval`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export default addCommentaire;
