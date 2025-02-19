const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
        departure: 8400,
        return: 0,
        total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
        code: 'CZ',
        name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
        code: 'ES',
        name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
        1: 34.95,
        2: 69.91,
    },
    baglimit: {
        hand_width: 20,
        hand_height: 40,
        hand_length: 55,
        hand_weight: 10,
        hold_width: 81,
        hold_height: 119,
        hold_length: 119,
        hold_dimensions_sum: 319,
        hold_weight: 20,
    },
    availability: {
        seats: 2,
    },
    conversion: {
        EUR: 36,
    },
    quality: 66.66659,
};
//1.
document.body.innerHTML += '<p> You are flyig from ' + flight.countryFrom.name + ".</p>";
document.body.innerHTML += '<br>'
document.body.innerHTML += '<p> You are flyig to ' + flight.countryTo.name + ".</p>";

//2.
const baggage = flight.baglimit;
document.body.innerHTML += '<p>Your baggage limit are described below. </p>' + JSON.stringify(baggage);

//3.
// Z objektu s rozměry zavazadel vytáhněte maximální povolené rozměry příručního zavazadla a vypište tyto rozměry opět jeden po druhém vypište do stránky.

document.body.innerHTML += "<p> Your hand bag width limit is "  + flight.baglimit.hand_width + " cm. </p>";
document.body.innerHTML += "<p>Your hand bag height limit is "  + flight.baglimit.hand_height + " cm. </p>";
document.body.innerHTML += "<p>Your hand bag length limit is  " + flight.baglimit.hand_length + " cm. </p>";
document.body.innerHTML += "<p>Your hand bag weight limit is " + flight.baglimit.hand_weight + " cm. </p>";

  // 4.
// Vypište do stránky, kolik cestující zaplatí za druhé zavazadlo v českých korunách zaokrouhleno nahoru na celé koruny.

document.body.innerHTML += '<p> Your would be charged for second bag for ' + Math.ceil(flight.bags_price["2"]) + " CZK.</p>';"
