const button = document.querySelector("button");

button.addEventListener("click", () => {
  //if browser supports geolocation api

  // geolocation.getCurrentPosition method is used to get current position of the device
  // it takes three paramaters success, error, options. If everything is right then success,
  // callback function will call else error callback function will call. We don't need third paramater for this project

  if (navigator.geolocation) {
    button.innerText = "Allow to detect location";

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    button.innerText = "Your Browser Doesn't Support ";
  }
  console.log(navigator.geolocation);
});

const onSuccess = (position) => {
  button.innerText = " Detecting your location...";
  console.log(position);
  let { latitude, longitude } = position.coords;
  fetch()
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      //passing components obj of all details varaiable
      let alldetails = result.results[0].components;
      let { county, postcode, country } = alldetails;
      button.innerText = `${county} ${postcode} ${country}`;
      console.log(county, postcode, country);
      console.table(alldetails);
    })
    .catch(() => {
      //if any error occured
      button.innerText = "Something Went Wrong";
    });
};

const onError = () => {
  if (error.code == 1) {
    //if user denied the request
    button.innerText = "you denied the Request ";
  } else if (error.code == 2) {
    //if location is not available
    button.innerText = "Your Browser Doesn't Support ";
  } else {
    //if any other Error occured
    button.innerText = "something went wrong ";
  }
  //if user denied the request then button will be disabled
  button.setAttribute("disabled", "true");
  console.log(console.error);
};
