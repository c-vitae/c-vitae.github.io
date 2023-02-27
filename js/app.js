
const NATIONALITIES = {
    "AU": "Australia",
    "BR": "Brasil",
    "CA": "Canadá",
    "CH": "Chile",
    "DE": "Alemania",
    "DK": "Dinamarca",
    "ES": "España",
    "FI": "Finlandia",
    "FR": "Francia",
    "GB": "Gran Bretaña",
    "IE": "Irlanda",
    "IN": "India",
    "MX": "México",
    "NZ": "Nueva Zelanda",
    "UA": "Ucrania",
    "US": "Estados Unidos",
}

function get_user() {
    // let seed = "56d27f4a53bd5441";
    let seed = Math.random() * 1000000;
    fetch(`https://randomuser.me/api/?seed=${seed}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        show_user_data(data.results[0]);
    });
    window.scrollTo(0,0);
}

function show_user_data(data) {
    document.getElementById('thumbnail').src = data.picture.large;

    document.getElementById('last-name').innerHTML = data.name.last;
    document.getElementById('first-name').innerHTML = data.name.first;

    let dob = data.dob.date.split('T')[0].split('-');
    document.getElementById('birthday').innerHTML = `${dob[2]}/${dob[1]}/${dob[0]}`;

    nat = data.nat;
    let nationality = NATIONALITIES[nat];
    document.getElementById('nationality').innerHTML = nationality === undefined ? nat : nationality;

    // DOMICILIO
    let street = `${data.location.street.name} ${data.location.street.number}`;
    let city = `${data.location.city}, ${data.location.state} (${data.location.postcode})`;

    document.getElementById('address').innerHTML = `${street}<br>${city}<br>${data.location.country}`

    // CONTACTO
    let email = data.email;
    let e = document.getElementById('email');
    e.innerHTML = email;
    e.href = `mailto:${email}`;
}   