const searchResult = () => {
  const userInput = document.getElementById("user-input").value;
  console.log(userInput);

  const url = `https://gorest.co.in/public/v1/users?name=${userInput}`;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayInfo(data));
};

const fetchData = (id, text) => {
  document.getElementById(id).innerHTML = text;
};

const displayInfo = (display) => {
  fetchData("user_id", display.data[0].id);
  fetchData("name", display.data[0].name);
  fetchData("email", display.data[0].email);
  fetchData("gender", display.data[0].gender);
  fetchData("status", display.data[0].status);
};
