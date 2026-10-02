// src/data/buses.js

const operators = [
    "TNSTC",
    "SETC",
    "KSRTC",
    "GreenLine Travels",
    "City Express",
    "National Travels"
];

const busTypes = [
    "Express",
    "Super Deluxe",
    "AC Seater",
    "AC Sleeper",
    "Volvo Multi Axle"
];

const departureTimes = [
    "05:30 AM",
    "06:30 AM",
    "07:30 AM",
    "08:30 AM",
    "10:00 AM",
    "12:30 PM",
    "02:30 PM",
    "05:00 PM",
    "07:30 PM",
    "09:00 PM",
    "10:30 PM"
];

export function getBuses(from, to, date) {

    if (!from || !to) {
        return [];
    }

    const source = from.trim();
    const destination = to.trim();

    if (
        source.toLowerCase() ===
        destination.toLowerCase()
    ) {
        return [];
    }

    const numberOfBuses =
        Math.floor(Math.random() * 3) + 4;

    const buses = [];

    for (let i = 0; i < numberOfBuses; i++) {

        const operator =
            operators[
                Math.floor(
                    Math.random() * operators.length
                )
            ];

        const type =
            busTypes[
                Math.floor(
                    Math.random() * busTypes.length
                )
            ];

        const departure =
            departureTimes[
                Math.floor(
                    Math.random() *
                    departureTimes.length
                )
            ];

        const price =
            Math.floor(
                Math.random() * 500
            ) + 300;

        const seats =
            Math.floor(
                Math.random() * 30
            ) + 10;

        buses.push({

            // Stable ID for this search result
            id: `${Date.now()}-${i}`,

            operator: operator,

            name: type,

            from: source,

            to: destination,

            departure: departure,

            arrival: calculateArrival(departure),

            price: price,

            seats: seats,

            date: date

        });
    }

    return buses;
}


function calculateArrival(departure) {

    const [time, period] =
        departure.split(" ");

    let [hours, minutes] =
        time.split(":").map(Number);

    hours += 5;

    if (hours > 12) {
        hours -= 12;
    }

    let arrivalPeriod = period;

    if (
        period === "AM" &&
        hours < 5
    ) {
        arrivalPeriod = "PM";
    }

    return `${hours}:${String(minutes).padStart(2, "0")} ${arrivalPeriod}`;
}