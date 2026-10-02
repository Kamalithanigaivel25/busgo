
/**export function showSeats(bus, journeyDate) {

    const app = document.getElementById("app");

    if (!app) {
        console.error("App element not found");
        return;
    }

    // Selected seat
    let selectedSeat = null;


    // ========================================
    // SEAT PAGE
    // ========================================

    app.innerHTML = `

        <section class="booking-page">

            <div class="page-header">

                <button
                    class="back-btn"
                    id="seatBackButton"
                    type="button"
                >
                    ← Back
                </button>

                <h1>
                    Select Your Seat
                </h1>

                <p>
                    ${bus.operator || "Bus Operator"}
                    •
                    ${bus.name || "Bus"}
                </p>

            </div>


            <div class="seat-layout">

                <div class="driver">
                    🚗 Driver
                </div>

                <div
                    id="seatContainer"
                    class="seat-grid"
                ></div>

            </div>


            <div class="seat-info">

                <span>
                    🟩 Available
                </span>

                <span>
                    🟥 Selected
                </span>

            </div>


            <div class="booking-summary">

                <h2>
                    Booking Summary
                </h2>

                <p>
                    ${bus.from}
                    →
                    ${bus.to}
                </p>

                <p>
                    Date:
                    ${journeyDate}
                </p>

                <p>
                    Seat:
                    <strong id="selectedSeat">
                        None
                    </strong>
                </p>

                <p>
                    Price:
                    <strong>
                        ₹${bus.price}
                    </strong>
                </p>


                <button
                    id="continuePassenger"
                    class="continue-payment-btn"
                    type="button"
                >
                    Continue →
                </button>

            </div>

        </section>
    `;


    // ========================================
    // BACK BUTTON
    // ========================================

    const backButton =
        document.getElementById("seatBackButton");

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                if (
                    typeof window.goBack === "function"
                ) {
                    window.goBack();
                }

            }
        );

    }


    // ========================================
    // SEAT CONTAINER
    // ========================================

    const seatContainer =
        document.getElementById(
            "seatContainer"
        );


    if (!seatContainer) {
        console.error("Seat container not found");
        return;
    }


    // ========================================
    // CREATE SEATS
    // ========================================

    for (
        let i = 1;
        i <= Number(bus.seats);
        i++
    ) {

        const seat =
            document.createElement("button");


        seat.type = "button";

        seat.className = "seat";

        seat.textContent = i;


        seat.addEventListener(
            "click",
            () => {

                // Remove previous selection

                document
                    .querySelectorAll(
                        ".seat.selected"
                    )
                    .forEach(
                        selected =>
                            selected.classList.remove(
                                "selected"
                            )
                    );


                // Select current seat

                seat.classList.add(
                    "selected"
                );


                selectedSeat = i;


                // Update summary

                const selectedSeatText =
                    document.getElementById(
                        "selectedSeat"
                    );


                if (selectedSeatText) {

                    selectedSeatText.textContent =
                        `Seat ${i}`;

                }

            }
        );


        seatContainer.appendChild(
            seat
        );

    }


    // ========================================
    // CONTINUE TO PASSENGER DETAILS
    // ========================================

    const continuePassenger =
        document.getElementById(
            "continuePassenger"
        );


    if (continuePassenger) {

        continuePassenger.addEventListener(
            "click",
            () => {

                if (!selectedSeat) {

                    alert(
                        "Please select a seat first."
                    );

                    return;

                }


                showPassengerDetails(
                    bus,
                    journeyDate,
                    selectedSeat
                );

            }
        );

    }

}*/

import { showPayment } from "./payment.js";


export function showSeats(bus, date) {

    const app =
        document.getElementById("app");


    let selectedSeat = null;


    // =====================================
    // GET EXISTING BOOKINGS
    // =====================================

    const bookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];


    // =====================================
    // FIND ALREADY BOOKED SEATS
    // =====================================

    const bookedSeats =
        bookings
            .filter(booking => {

                const bookingBusId =
                    booking.bus?.id;

                const currentBusId =
                    bus.id;


                const bookingDate =
                    booking.journeyDate;

                const currentDate =
                    date;


                return (
                    String(bookingBusId) ===
                    String(currentBusId)
                    &&
                    String(bookingDate) ===
                    String(currentDate)
                );

            })
            .map(booking =>
                booking.selectedSeat
            );


    console.log(
        "Already booked seats:",
        bookedSeats
    );


    // =====================================
    // SEAT NUMBERS
    // =====================================

    const seats = [

        "A1", "A2",
        "A3", "A4",

        "B1", "B2",
        "B3", "B4",

        "C1", "C2",
        "C3", "C4",

        "D1", "D2",
        "D3", "D4",

        "E1", "E2",
        "E3", "E4",

        "F1", "F2",
        "F3", "F4",

        "G1", "G2",
        "G3", "G4",

        "H1", "H2",
        "H3", "H4"

    ];


    // =====================================
    // PAGE HTML
    // =====================================

    app.innerHTML = `

        <div class="seats-page">


            <!-- HEADER -->

            <header class="seats-header">

                <button
                    id="backToSearch"
                    class="seat-back-btn"
                    type="button"
                >
                    ← Back
                </button>

                <div class="seat-brand">
                    🚌 BusGo
                </div>

            </header>


            <!-- BUS INFORMATION -->

            <section class="seat-info">

                <div>

                    <span class="seat-label">
                        SELECT YOUR SEAT
                    </span>

                    <h1>
                        ${bus.operator}
                    </h1>

                    <p>
                        ${bus.from}
                        →
                        ${bus.to}
                    </p>

                </div>


                <div class="journey-date">

                    📅

                    <span>
                        ${date}
                    </span>

                </div>

            </section>


            <!-- LEGEND -->

            <div class="seat-legend">

                <div>
                    <span class="legend-seat available"></span>
                    Available
                </div>

                <div>
                    <span class="legend-seat selected"></span>
                    Selected
                </div>

                <div>
                    <span class="legend-seat booked"></span>
                    Booked
                </div>

            </div>


            <!-- SEAT AREA -->

            <section class="seat-container">


                <div class="driver-area">

                    <span>
                        🧑‍✈️ Driver
                    </span>

                </div>


                <div class="bus-body">

                    <div
                        id="seatGrid"
                        class="seat-grid"
                    ></div>

                </div>


            </section>


            <!-- BOTTOM -->

            <section class="seat-bottom">

                <div class="selected-info">

                    <span>
                        Selected Seat
                    </span>

                    <strong
                        id="selectedSeatText"
                    >
                        None
                    </strong>

                </div>


                <div class="seat-price">

                    <span>
                        Price
                    </span>

                    <strong>
                        ₹${bus.price}
                    </strong>

                </div>


                <button
                    id="continueButton"
                    class="continue-btn"
                    type="button"
                    disabled
                >
                    Continue →
                </button>

            </section>


        </div>

    `;


    // =====================================
    // GET ELEMENTS
    // =====================================

    const seatGrid =
        document.getElementById(
            "seatGrid"
        );


    const selectedSeatText =
        document.getElementById(
            "selectedSeatText"
        );


    const continueButton =
        document.getElementById(
            "continueButton"
        );


    // =====================================
    // CREATE SEATS
    // =====================================

    seats.forEach(seatNumber => {

        const seatButton =
            document.createElement("button");


        seatButton.type =
            "button";


        seatButton.className =
            "seat";


        seatButton.textContent =
            seatNumber;


        seatButton.dataset.seat =
            seatNumber;


        // =================================
        // CHECK BOOKED SEAT
        // =================================

        const isBooked =
            bookedSeats.some(
                bookedSeat =>
                    String(bookedSeat) ===
                    String(seatNumber)
            );


        if (isBooked) {

            seatButton.classList.add(
                "booked"
            );

            seatButton.disabled =
                true;

            seatButton.title =
                "Already booked";

        }


        // =================================
        // SEAT CLICK
        // =================================

        if (!isBooked) {

            seatButton.addEventListener(
                "click",
                () => {


                    // Remove previous selection

                    document
                        .querySelectorAll(
                            ".seat.selected"
                        )
                        .forEach(seat => {

                            seat.classList.remove(
                                "selected"
                            );

                        });


                    // Select current seat

                    seatButton.classList.add(
                        "selected"
                    );


                    selectedSeat =
                        seatNumber;


                    selectedSeatText.textContent =
                        selectedSeat;


                    continueButton.disabled =
                        false;

                }
            );

        }


        seatGrid.appendChild(
            seatButton
        );

    });


    // =====================================
    // CONTINUE
    // =====================================

    continueButton.addEventListener(
        "click",
        () => {

            if (!selectedSeat) {

                alert(
                    "Please select a seat."
                );

                return;

            }


            console.log(
                "Selected Bus:",
                bus
            );


            console.log(
                "Selected Date:",
                date
            );


            console.log(
                "Selected Seat:",
                selectedSeat
            );


            // Go to payment

            showPayment(
                bus,
                date,
                selectedSeat
            );

        }
    );


    // =====================================
    // BACK BUTTON
    // =====================================

    document
        .getElementById(
            "backToSearch"
        )
        .addEventListener(
            "click",
            () => {

                window.history.back();

            }
        );

}



// ========================================
// PASSENGER DETAILS
// ========================================

function showPassengerDetails(
    bus,
    journeyDate,
    selectedSeat
) {

    const app =
        document.getElementById("app");


    app.innerHTML = `

        <section class="booking-page">

            <div class="auth-card passenger-card">

                <h1>
                    Passenger Details
                </h1>

                <p>
                    Seat ${selectedSeat}
                    • ₹${bus.price}
                </p>


                <form id="passengerForm">

                    <input
                        type="text"
                        id="passengerName"
                        placeholder="Passenger Name"
                        required
                    >


                    <input
                        type="number"
                        id="passengerAge"
                        placeholder="Age"
                        min="1"
                        max="100"
                        required
                    >


                    <select
                        id="passengerGender"
                        required
                    >

                        <option value="">
                            Select Gender
                        </option>

                        <option value="Male">
                            Male
                        </option>

                        <option value="Female">
                            Female
                        </option>

                        <option value="Other">
                            Other
                        </option>

                    </select>


                    <input
                        type="tel"
                        id="passengerPhone"
                        placeholder="Phone Number"
                        maxlength="10"
                        required
                    >


                    <button
                        id="continueToPayment"
                        class="continue-payment-btn"
                        type="submit"
                    >
                        Continue to Payment →
                    </button>

                </form>

            </div>

        </section>

    `;


    // ========================================
    // PASSENGER FORM
    // ========================================

    const passengerForm =
        document.getElementById(
            "passengerForm"
        );


    if (!passengerForm) {
        console.error("Passenger form not found");
        return;
    }


    passengerForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "passengerName"
                    )
                    .value
                    .trim();


            const age =
                document
                    .getElementById(
                        "passengerAge"
                    )
                    .value
                    .trim();


            const gender =
                document
                    .getElementById(
                        "passengerGender"
                    )
                    .value;


            const phone =
                document
                    .getElementById(
                        "passengerPhone"
                    )
                    .value
                    .trim();


            // ========================================
            // VALIDATION
            // ========================================

            if (!name) {

                alert(
                    "Please enter passenger name."
                );

                return;

            }


            if (!age) {

                alert(
                    "Please enter passenger age."
                );

                return;

            }


            if (!gender) {

                alert(
                    "Please select gender."
                );

                return;

            }


            if (
                !phone ||
                phone.length !== 10
            ) {

                alert(
                    "Please enter a valid 10 digit phone number."
                );

                return;

            }


            // ========================================
            // PASSENGER OBJECT
            // ========================================

            const passenger = {

                name: name,

                age: age,

                gender: gender,

                phone: phone

            };


            // ========================================
            // SAVE CURRENT BOOKING
            // ========================================

            localStorage.setItem(
                "currentBooking",
                JSON.stringify({

                    bus: bus,

                    journeyDate: journeyDate,

                    selectedSeat: selectedSeat,

                    passenger: passenger

                })
            );


            // ========================================
            // GO TO PAYMENT
            // ========================================

            showPayment(
                bus,
                journeyDate,
                selectedSeat,
                passenger
            );

        }
    );

}


// ========================================
// CONFIRM BOOKING
// ========================================

window.confirmBooking = function () {

    const currentBooking =
        JSON.parse(
            localStorage.getItem(
                "currentBooking"
            )
        );


    if (!currentBooking) {

        alert(
            "Booking information not found."
        );

        return;

    }


    const booking = {

        ...currentBooking,

        bookingId:
            "BUS" + Date.now(),

        status:
            "Confirmed",

        bookedAt:
            new Date().toLocaleString()

    };


    const existingBookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    existingBookings.push(
        booking
    );


    localStorage.setItem(
        "bookings",
        JSON.stringify(
            existingBookings
        )
    );


    localStorage.removeItem(
        "currentBooking"
    );


    showConfirmation(
        booking
    );

};


// ========================================
// BOOKING CONFIRMATION
// ========================================

function showConfirmation(
    booking
) {

    const app =
        document.getElementById("app");


    app.innerHTML = `

        <section class="confirmation">

            <div class="success-card">

                <div class="success-icon">
                    ✓
                </div>

                <h1>
                    Booking Confirmed!
                </h1>

                <p>
                    Your bus ticket has been booked successfully.
                </p>


                <div class="ticket">

                    <h2>
                        ${booking.bus.operator}
                    </h2>

                    <p>
                        ${booking.bus.from}
                        →
                        ${booking.bus.to}
                    </p>

                    <p>
                        Date:
                        ${booking.journeyDate}
                    </p>

                    <p>
                        Seat:
                        ${booking.selectedSeat}
                    </p>

                    <p>
                        Passenger:
                        ${booking.passenger.name}
                    </p>

                    <p>
                        Booking ID:
                        <strong>
                            ${booking.bookingId}
                        </strong>
                    </p>

                </div>


                <button
                    class="primary-btn"
                    id="viewBookingsButton"
                    type="button"
                >
                    View My Bookings
                </button>

            </div>

        </section>

    `;


    const viewBookingsButton =
        document.getElementById(
            "viewBookingsButton"
        );


    if (viewBookingsButton) {

        viewBookingsButton.addEventListener(
            "click",
            () => {

                if (
                    typeof window.showBookings ===
                    "function"
                ) {

                    window.showBookings();

                }

            }
        );

    }

}