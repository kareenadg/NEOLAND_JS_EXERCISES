//1.1

const getData = () => {
    fetch("https://api.agify.io?name=michael")
    .then((data) => data.json())
    .then((info) => console.log(info));
};
getData();