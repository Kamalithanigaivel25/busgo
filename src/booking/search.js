
import { getBuses } from "../data/buses.js";
import { showSeats } from "./seats.js";
import { goBack } from "../navigation.js";

export function searchBuses() {

    const app = document.getElementById("app");

    app.innerHTML = `

        <div class="search-page">

            <!-- HEADER -->
            <header class="search-header">

                <div class="brand">
                    🚌 <span>BusGo</span>
                </div>

                <button
                    type="button"
                    id="backButton"
                    class="back-btn"
                >
                    ← Back
                </button>

            </header>


            <!-- SEARCH HERO -->
            <section class="search-hero">

                <div class="hero-content">

                    <div class="hero-badge">
                        🚌 BUS BOOKING
                    </div>

                    <p class="small-title">
                        TRAVEL SMART • TRAVEL EASY
                    </p>

                    <h1>
                        Where are you going?
                    </h1>

                    <p>
                        Find buses, compare prices and choose your journey.
                    </p>

                </div>


                <!-- SEARCH FORM -->
                <form
                    id="busSearchForm"
                    class="search-box"
                >

                    <!-- FROM -->
                    <div class="search-field">

                        <span class="field-icon">
                            📍
                        </span>

                        <div class="field-content">

                            <label>FROM</label>

                            <input
                                type="text"
                                id="from"
                                placeholder="Starting point"
                                autocomplete="off"
                                required
                            >

                            <div
                                id="fromSuggestions"
                                class="suggestions"
                            ></div>

                        </div>

                    </div>


                    <!-- SWAP -->
                    <button
                        type="button"
                        id="swapButton"
                        class="swap-button"
                        title="Swap locations"
                    >
                        ⇄
                    </button>


                    <!-- TO -->
                    <div class="search-field">

                        <span class="field-icon">
                            📍
                        </span>

                        <div class="field-content">

                            <label>TO</label>

                            <input
                                type="text"
                                id="to"
                                placeholder="Destination"
                                autocomplete="off"
                                required
                            >

                            <div
                                id="toSuggestions"
                                class="suggestions"
                            ></div>

                        </div>

                    </div>


                    <!-- DATE -->
                    <div class="search-field">

                        <span class="field-icon">
                            📅
                        </span>

                        <div class="field-content">

                            <label>TRAVEL DATE</label>

                            <input
                                type="date"
                                id="travelDate"
                                required
                            >

                        </div>

                    </div>


                    <!-- SEARCH BUTTON -->
                    <button
                        type="submit"
                        id="searchButton"
                        class="search-button"
                    >
                        <span>Search Buses</span>
                        <b>→</b>
                    </button>

                </form>


                <!-- POPULAR ROUTES -->
                <div class="popular-routes">

                    <span>Popular:</span>

                    <button
                        type="button"
                        class="route-chip"
                        data-from="Chennai"
                        data-to="Bangalore"
                    >
                        Chennai → Bangalore
                    </button>

                    <button
                        type="button"
                        class="route-chip"
                        data-from="Bangalore"
                        data-to="Chennai"
                    >
                        Bangalore → Chennai
                    </button>

                    <button
                        type="button"
                        class="route-chip"
                        data-from="Chennai"
                        data-to="Coimbatore"
                    >
                        Chennai → Coimbatore
                    </button>

                    <button
                        type="button"
                        class="route-chip"
                        data-from="Coimbatore"
                        data-to="Chennai"
                    >
                        Coimbatore → Chennai
                    </button>

                </div>

            </section>


            <!-- RESULTS -->
            <main class="results-section">

                <div id="searchMessage"></div>


                <!-- TOOLBAR -->
                <div
                    id="resultToolbar"
                    class="result-toolbar"
                    style="display:none;"
                >
                    <div>
                        <strong>Available Buses</strong>
                        <span id="resultCount"></span>
                    </div>
        
                    <select id="sortBus">

                        <option value="default">
                            Sort by
                        </option>

                        <option value="priceLow">
                            Price: Low to High
                        </option>

                        <option value="priceHigh">
                            Price: High to Low
                        </option>

                        <option value="departure">
                            Departure Time
                        </option>

                    </select>

                </div>


                <!-- BUS CARDS -->
                <div id="busResults"></div>

            </main>

        </div>
    `;


    // -----------------------------
    // GET ELEMENTS
    // -----------------------------

    const fromInput =
        document.getElementById("from");

    const toInput =
        document.getElementById("to");

    const dateInput =
        document.getElementById("travelDate");

    const form =
        document.getElementById("busSearchForm");

    const searchButton =
        document.getElementById("searchButton");

    const swapButton =
        document.getElementById("swapButton");


    // -----------------------------
    // DATE
    // -----------------------------

    const today =
        new Date()
            .toISOString()
            .split("T")[0];

    dateInput.min = today;
    dateInput.value = today;


    // -----------------------------
    // BACK BUTTON
    // -----------------------------

    document
        .getElementById("backButton")
        .addEventListener("click", () => {

            goBack();

        });


    // -----------------------------
    // SWAP BUTTON
    // -----------------------------

    swapButton.addEventListener(
        "click",
        () => {

            const temp =
                fromInput.value;

            fromInput.value =
                toInput.value;

            toInput.value =
                temp;

        }
    );


    // -----------------------------
    // POPULAR ROUTES
    // -----------------------------

    document
        .querySelectorAll(".route-chip")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    fromInput.value =
                        button.dataset.from;

                    toInput.value =
                        button.dataset.to;

                }
            );

        });


    // -----------------------------
    // CITY SUGGESTIONS
    // -----------------------------

    const cities = [

        "Chennai",
        "Bangalore",
        "Coimbatore",
        "Madurai",
        "Salem",
        "Trichy",
        "Erode",
        "Tiruppur",
        "Pondicherry",
        "Hyderabad",
        "Kochi",
        "Mumbai"

    ];


    setupSuggestions(
        fromInput,
        document.getElementById(
            "fromSuggestions"
        ),
        cities
    );


    setupSuggestions(
        toInput,
        document.getElementById(
            "toSuggestions"
        ),
        cities
    );


    // -----------------------------
    // SEARCH FORM
    // -----------------------------

    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const from =
                fromInput.value.trim();

            const to =
                toInput.value.trim();

            const date =
                dateInput.value;


            if (!from || !to || !date) {

                return;

            }


            searchRoute(
                from,
                to,
                date,
                searchButton
            );

        }
    );
}


// =====================================
// CITY SUGGESTIONS
// =====================================

function setupSuggestions(
    input,
    suggestionBox,
    cities
) {

    input.addEventListener(
        "input",
        () => {

            const value =
                input.value
                    .trim()
                    .toLowerCase();


            if (!value) {

                suggestionBox.innerHTML = "";

                return;

            }


            const matches =
                cities.filter(city =>
                    city
                        .toLowerCase()
                        .startsWith(value)
                );


            suggestionBox.innerHTML =
                matches
                    .slice(0, 5)
                    .map(city => `

                        <button
                            type="button"
                            class="suggestion-item"
                            data-city="${city}"
                        >
                            📍 ${city}
                        </button>

                    `)
                    .join("");


            suggestionBox
                .querySelectorAll(
                    ".suggestion-item"
                )
                .forEach(item => {

                    item.addEventListener(
                        "click",
                        () => {

                            input.value =
                                item.dataset.city;

                            suggestionBox.innerHTML =
                                "";

                        }
                    );

                });

        }
    );

}


// =====================================
// SEARCH ROUTE
// =====================================

function searchRoute(
    from,
    to,
    date,
    searchButton
) {

    const message =
        document.getElementById(
            "searchMessage"
        );

    const results =
        document.getElementById(
            "busResults"
        );

    const toolbar =
        document.getElementById(
            "resultToolbar"
        );


    // SAME LOCATION CHECK

    if (
        from.toLowerCase() ===
        to.toLowerCase()
    ) {

        message.innerHTML = `

            <div class="error-message">

                ⚠️

                <strong>
                    Invalid Route
                </strong>

                <p>
                    Starting point and destination
                    cannot be the same.
                </p>

            </div>

        `;

        results.innerHTML = "";

        toolbar.style.display =
            "none";

        return;

    }


    // SEARCHING

    searchButton.disabled =
        true;

    searchButton.innerHTML =
        "🔄 Searching...";


    message.innerHTML = `

        <div class="loading-box">

            <div class="loader"></div>

            <p>
                Finding buses from
                <strong>${from}</strong>
                to
                <strong>${to}</strong>
            </p>

        </div>

    `;


    results.innerHTML = "";

    toolbar.style.display =
        "none";


    // SMALL DELAY FOR UI

    setTimeout(() => {

        const buses =
            getBuses(
                from,
                to,
                date
            );


        // SAVE SEARCH RESULT

        sessionStorage.setItem(
            "searchBuses",
            JSON.stringify(buses)
        );


        searchButton.disabled =
            false;

        searchButton.innerHTML = `
            <span>Search Buses</span>
            <b>→</b>
        `;


        // NO BUSES

        if (buses.length === 0) {

            message.innerHTML = `

                <div class="no-results">

                    <div class="no-results-icon">
                        🚌
                    </div>

                    <h2>
                        No buses found
                    </h2>

                    <p>
                        We couldn't find any buses
                        for
                        <strong>
                            ${from} → ${to}
                        </strong>
                    </p>

                    <button
                        type="button"
                        id="tryAgain"
                    >
                        Try Another Route
                    </button>

                </div>

            `;


            document
                .getElementById("tryAgain")
                .addEventListener(
                    "click",
                    () => {

                        fromInputFocus();

                    }
                );


            return;

        }


        // RESULTS HEADING

        message.innerHTML = `

            <div class="results-heading">

                <div>

                    <span>
                        AVAILABLE BUSES
                    </span>

                    <h2>
                        ${from}
                        <b>→</b>
                        ${to}
                    </h2>

                    <p>
                        📅 ${date}
                    </p>

                </div>


                <div class="bus-count">

                    🚌 ${buses.length}
                    buses found

                </div>

            </div>

        `;


        toolbar.style.display =
            "flex";


        document
            .getElementById(
                "resultCount"
            )
            .textContent =
            ` • ${buses.length}`;


        displayBuses(
            buses,
            date
        );


        setupSorting(
            buses,
            date
        );

    }, 500);

}


// =====================================
// FOCUS FROM INPUT
// =====================================

function fromInputFocus() {

    const input =
        document.getElementById("from");

    if (input) {

        input.focus();

    }

}


// =====================================
// DISPLAY BUSES
// =====================================

function displayBuses(
    buses,
    date
) {

    const results =
        document.getElementById(
            "busResults"
        );


    results.innerHTML =
        buses
            .map(bus =>
                createBusCard(
                    bus,
                    date
                )
            )
            .join("");


    // SELECT SEAT BUTTONS

    results
        .querySelectorAll(
            ".select-bus-button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const busId =
                        button.dataset.busId;

                    const journeyDate =
                        button.dataset.date;


                    selectBus(
                        busId,
                        journeyDate,
                        button
                    );

                }
            );

        });

}


// =====================================
// BUS CARD
// =====================================

function createBusCard(
    bus,
    date
) {

    return `

        <article class="bus-card">

            <!-- TOP -->

            <div class="bus-card-top">

                <div class="bus-company">

                    <div class="bus-logo">
                        🚌
                    </div>

                    <div>

                        <h3>
                            ${bus.operator}
                        </h3>

                        <p>
                            ${bus.name}
                        </p>

                    </div>

                </div>


                <div class="rating">
                    ⭐ 4.8
                </div>

            </div>


            <!-- JOURNEY -->

            <div class="journey">

                <div class="journey-point">

                    <strong>
                        ${bus.departure}
                    </strong>

                    <span>
                        ${bus.from}
                    </span>

                </div>


                <div class="journey-line">

                    <span>●</span>

                    <div></div>

                    <span>●</span>

                </div>


                <div class="journey-duration">

                    <span>
                        Direct
                    </span>

                    <small>
                        Journey
                    </small>

                </div>


                <div
                    class="journey-point destination"
                >

                    <strong>
                        ${bus.arrival}
                    </strong>

                    <span>
                        ${bus.to}
                    </span>

                </div>

            </div>


            <!-- DETAILS -->

            <div class="bus-details">

                <span>
                    💺 ${bus.seats} seats left
                </span>

                <span>
                    ❄️ AC
                </span>

                <span>
                    🔌 Charging
                </span>

                <span>
                    📶 Wi-Fi
                </span>

            </div>


            <!-- BOTTOM -->

            <div class="bus-card-bottom">

                <div>

                    <small>
                        Starting from
                    </small>

                    <div class="price">

                        ₹${bus.price}

                        <small>
                            /person
                        </small>

                    </div>

                </div>


                <button
                    type="button"
                    class="select-bus-button"
                    data-bus-id="${bus.id}"
                    data-date="${date}"
                >
                    Select Seats →
                </button>

            </div>

        </article>

    `;

}


// =====================================
// SORTING
// =====================================

function setupSorting(
    buses,
    date
) {

    const sortSelect =
        document.getElementById(
            "sortBus"
        );


    sortSelect.onchange = () => {

        const sorted =
            [...buses];

        const value =
            sortSelect.value;


        if (
            value === "priceLow"
        ) {

            sorted.sort(
                (a, b) =>
                    Number(a.price) -
                    Number(b.price)
            );

        }


        if (
            value === "priceHigh"
        ) {

            sorted.sort(
                (a, b) =>
                    Number(b.price) -
                    Number(a.price)
            );

        }


        if (
            value === "departure"
        ) {

            sorted.sort(
                (a, b) =>
                    String(
                        a.departure
                    ).localeCompare(
                        String(
                            b.departure
                        )
                    )
            );

        }


        displayBuses(
            sorted,
            date
        );

    };

}


// =====================================
// SELECT BUS
// =====================================

function selectBus(
    busId,
    date,
    button
) {

    const savedBuses =
        JSON.parse(
            sessionStorage.getItem(
                "searchBuses"
            )
        ) || [];


    const selectedBus =
        savedBuses.find(
            bus =>
                String(bus.id) ===
                String(busId)
        );


    if (!selectedBus) {

        alert(
            "Bus information not found."
        );

        return;

    }


    button.disabled = true;

    button.innerHTML =
        "Loading seats...";


    console.log(
        "Selected Bus:",
        selectedBus
    );


    setTimeout(() => {

        showSeats(
            selectedBus,
            date
        );

    }, 300);

}
