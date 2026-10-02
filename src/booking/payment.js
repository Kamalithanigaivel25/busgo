export function showPayment(bus, date, seat, passenger) {

    const app = document.getElementById("app");

    if (!app) {
        console.error("App element not found");
        return;
    }

    // Safety defaults
    bus = bus || {};
    passenger = passenger || {};

    app.innerHTML = `
        <div class="payment-page">

            <header class="payment-header">
                <div class="brand">
                    🚌 <span>BusGo</span>
                </div>

                <button
                    class="back-btn"
                    id="paymentBackBtn"
                >
                    ← Back
                </button>
            </header>


            <main class="payment-container">

                <!-- PAYMENT SECTION -->

                <section class="payment-main">

                    <div class="payment-title">
                        <div class="payment-title-icon">
                            🔐
                        </div>

                        <div>
                            <h1>Choose Payment Method</h1>
                            <p>Secure and easy payment</p>
                        </div>
                    </div>


                    <!-- UPI -->

                    <div
                        class="payment-option active"
                        data-method="upi"
                    >

                        <div class="payment-option-header">

                            <div class="payment-icon">
                                📱
                            </div>

                            <div class="payment-info">
                                <h3>UPI</h3>
                                <p>
                                    Google Pay, PhonePe, Paytm & other UPI apps
                                </p>
                            </div>

                            <input
                                type="radio"
                                name="paymentMethod"
                                value="upi"
                                checked
                            >

                        </div>


                        <div
                            class="payment-details"
                            id="upiSection"
                        >

                            <label>Enter UPI ID</label>

                            <input
                                type="text"
                                id="upiId"
                                placeholder="example@upi"
                            >

                            <div class="upi-apps">

                                <button type="button">
                                    Google Pay
                                </button>

                                <button type="button">
                                    PhonePe
                                </button>

                                <button type="button">
                                    Paytm
                                </button>

                            </div>

                        </div>

                    </div>


                    <!-- NET BANKING -->

                    <div
                        class="payment-option"
                        data-method="netbanking"
                    >

                        <div class="payment-option-header">

                            <div class="payment-icon">
                                🏦
                            </div>

                            <div class="payment-info">
                                <h3>Net Banking</h3>
                                <p>
                                    Pay using your bank account
                                </p>
                            </div>

                            <input
                                type="radio"
                                name="paymentMethod"
                                value="netbanking"
                            >

                        </div>


                        <div
                            class="payment-details hidden"
                            id="netbankingSection"
                        >

                            <label>Select Bank</label>

                            <select id="bank">

                                <option value="">
                                    Select your bank
                                </option>

                                <option>
                                    State Bank of India
                                </option>

                                <option>
                                    HDFC Bank
                                </option>

                                <option>
                                    ICICI Bank
                                </option>

                                <option>
                                    Axis Bank
                                </option>

                                <option>
                                    Kotak Mahindra Bank
                                </option>

                                <option>
                                    Canara Bank
                                </option>

                                <option>
                                    Indian Bank
                                </option>

                                <option>
                                    Bank of Baroda
                                </option>

                            </select>

                        </div>

                    </div>


                    <!-- CARD -->

                    <div
                        class="payment-option"
                        data-method="card"
                    >

                        <div class="payment-option-header">

                            <div class="payment-icon">
                                💳
                            </div>

                            <div class="payment-info">
                                <h3>Credit / Debit Card</h3>
                                <p>
                                    Visa, Mastercard, RuPay
                                </p>
                            </div>

                            <input
                                type="radio"
                                name="paymentMethod"
                                value="card"
                            >

                        </div>


                        <div
                            class="payment-details hidden"
                            id="cardSection"
                        >

                            <label>Card Number</label>

                            <input
                                type="text"
                                id="cardNumber"
                                placeholder="1234 5678 9012 3456"
                            >

                            <div class="card-row">

                                <div>
                                    <label>Expiry</label>

                                    <input
                                        type="text"
                                        id="expiry"
                                        placeholder="MM/YY"
                                    >
                                </div>

                                <div>
                                    <label>CVV</label>

                                    <input
                                        type="password"
                                        id="cvv"
                                        placeholder="CVV"
                                        maxlength="3"
                                    >
                                </div>

                            </div>

                        </div>

                    </div>


                    <!-- PAY AT COUNTER -->

                    <div
                        class="payment-option"
                        data-method="counter"
                    >

                        <div class="payment-option-header">

                            <div class="payment-icon">
                                💵
                            </div>

                            <div class="payment-info">
                                <h3>Pay at Bus Counter</h3>
                                <p>
                                    Reserve your seat and pay at counter
                                </p>
                            </div>

                            <input
                                type="radio"
                                name="paymentMethod"
                                value="counter"
                            >

                        </div>

                    </div>


                    <!-- PAY BUTTON -->

                    <button
                        type="button"
                        id="payButton"
                        class="pay-button"
                    >
                        🔒 Pay ₹${bus.price || 0}
                    </button>

                    <p class="secure-text">
                        🔐 Your payment information is secure
                    </p>

                </section>


                <!-- BOOKING SUMMARY -->

                <aside class="booking-summary">

                    <h2>Booking Summary</h2>

                    <div class="summary-bus">

                        <div class="summary-logo">
                            🚌
                        </div>

                        <div>
                            <h3>
                                ${bus.operator || "Bus Operator"}
                            </h3>

                            <p>
                                ${bus.name || "Bus"}
                            </p>
                        </div>

                    </div>


                    <div class="summary-route">

                        <div>
                            <strong>
                                ${bus.departure || "--"}
                            </strong>

                            <span>
                                ${bus.from || "--"}
                            </span>
                        </div>

                        <div class="route-arrow">
                            →
                        </div>

                        <div>
                            <strong>
                                ${bus.arrival || "--"}
                            </strong>

                            <span>
                                ${bus.to || "--"}
                            </span>
                        </div>

                    </div>


                    <hr>


                    <div class="summary-row">

                        <span>
                            Travel Date
                        </span>

                        <strong>
                            ${date || "--"}
                        </strong>

                    </div>


                    <div class="summary-row">

                        <span>
                            Seat
                        </span>

                        <strong>
                            ${seat || "--"}
                        </strong>

                    </div>


                    <div class="summary-row">

                        <span>
                            Passenger
                        </span>

                        <strong>
                            ${passenger.name || "--"}
                        </strong>

                    </div>


                    <hr>


                    <div class="summary-row total">

                        <span>
                            Total
                        </span>

                        <strong>
                            ₹${bus.price || 0}
                        </strong>

                    </div>

                </aside>

            </main>

        </div>
    `;


    // --------------------------------
    // BACK BUTTON
    // --------------------------------

    document
        .getElementById("paymentBackBtn")
        .addEventListener("click", () => {

            if (typeof window.goBack === "function") {
                window.goBack();
            }

        });


    // --------------------------------
    // PAYMENT OPTIONS
    // --------------------------------

    const options =
        document.querySelectorAll(".payment-option");


    options.forEach(option => {

        option.addEventListener("click", () => {

            const method =
                option.dataset.method;

            selectPaymentMethod(method);

        });

    });


    // --------------------------------
    // PAY BUTTON
    // --------------------------------

    document
        .getElementById("payButton")
        .addEventListener("click", () => {

            processPayment(
                bus,
                date,
                seat,
                passenger
            );

        });

}


// ========================================
// SELECT PAYMENT METHOD
// ========================================

function selectPaymentMethod(method) {

    const options =
        document.querySelectorAll(".payment-option");


    options.forEach(option => {

        option.classList.remove("active");

    });


    const selectedOption =
        document.querySelector(
            `[data-method="${method}"]`
        );


    if (selectedOption) {

        selectedOption.classList.add("active");

        const radio =
            selectedOption.querySelector(
                "input[type='radio']"
            );

        if (radio) {
            radio.checked = true;
        }

    }


    // Hide all details

    document
        .querySelectorAll(".payment-details")
        .forEach(section => {

            section.classList.add("hidden");

        });


    // Show selected details

    if (method === "upi") {

        document
            .getElementById("upiSection")
            .classList.remove("hidden");

    }


    if (method === "netbanking") {

        document
            .getElementById("netbankingSection")
            .classList.remove("hidden");

    }


    if (method === "card") {

        document
            .getElementById("cardSection")
            .classList.remove("hidden");

    }

}


// ========================================
// PROCESS PAYMENT
// ========================================

function processPayment(bus, date, seat, passenger) {

    const method =
        document.querySelector(
            ".payment-option.active"
        )?.dataset.method;

    if (!method) {
        alert("Please select a payment method.");
        return;
    }

    // Demo payment validation
    if (method === "upi") {
        const upi = document.getElementById("upiId")?.value.trim();

        if (!upi) {
            alert("Please enter UPI ID.");
            return;
        }
    }

    if (method === "netbanking") {
        const bank = document.getElementById("bankName")?.value;

        if (!bank) {
            alert("Please select your bank.");
            return;
        }
    }

    if (method === "card") {
        const cardNumber =
            document.getElementById("cardNumber")?.value.trim();

        const expiry =
            document.getElementById("expiry")?.value.trim();

        const cvv =
            document.getElementById("cvv")?.value.trim();

        if (!cardNumber || !expiry || !cvv) {
            alert("Please enter complete card details.");
            return;
        }
    }

    // Generate booking ID
    const bookingId =
        "BUS" + Date.now();

    const booking = {
        bookingId,
        bus,
        journeyDate: date,
        selectedSeat: seat,
        passenger,
        paymentMethod: method,
        amount: bus.price,
        status: "Confirmed",
        bookedAt: new Date().toLocaleString()
    };

    // Save booking
    const existingBookings =
        JSON.parse(
            localStorage.getItem("bookings")
        ) || [];

    existingBookings.push(booking);

    localStorage.setItem(
        "bookings",
        JSON.stringify(existingBookings)
    );

    localStorage.removeItem("currentBooking");

    // Show booking summary
    showBookingSummary(booking);
}


function showBookingSummary(booking) {

    const app =
        document.getElementById("app");

    if (!app) return;

    app.innerHTML = `
        <section class="booking-summary-page">

            <div class="booking-summary-card">

                <div class="success-icon">
                    ✓
                </div>

                <h1>Booking Confirmed!</h1>

                <p class="success-message">
                    Your bus ticket has been booked successfully.
                </p>


                <div class="ticket-print-area" id="ticket">

                    <div class="ticket-header">
                        <h2>🚌 BusGo</h2>
                        <p>Bus Ticket</p>
                    </div>


                    <div class="booking-id">
                        <span>Booking ID</span>
                        <strong>
                            ${booking.bookingId}
                        </strong>
                    </div>


                    <div class="route-box">

                        <div>
                            <small>FROM</small>
                            <strong>
                                ${booking.bus.from}
                            </strong>
                        </div>

                        <span>→</span>

                        <div>
                            <small>TO</small>
                            <strong>
                                ${booking.bus.to}
                            </strong>
                        </div>

                    </div>


                    <div class="ticket-details">

                        <div>
                            <span>Bus Operator</span>
                            <strong>
                                ${booking.bus.operator}
                            </strong>
                        </div>

                        <div>
                            <span>Bus Type</span>
                            <strong>
                                ${booking.bus.name}
                            </strong>
                        </div>

                        <div>
                            <span>Journey Date</span>
                            <strong>
                                ${booking.journeyDate}
                            </strong>
                        </div>

                        <div>
                            <span>Departure</span>
                            <strong>
                                ${booking.bus.departure}
                            </strong>
                        </div>

                        <div>
                            <span>Arrival</span>
                            <strong>
                                ${booking.bus.arrival}
                            </strong>
                        </div>

                        <div>
                            <span>Seat Number</span>
                            <strong>
                                ${booking.selectedSeat}
                            </strong>
                        </div>

                    </div>


                    <div class="passenger-section">

                        <h3>Passenger Details</h3>

                        <p>
                            <span>Name</span>
                            ${booking.passenger.name}
                        </p>

                        <p>
                            <span>Age</span>
                            ${booking.passenger.age}
                        </p>

                        <p>
                            <span>Gender</span>
                            ${booking.passenger.gender}
                        </p>

                        <p>
                            <span>Phone</span>
                            ${booking.passenger.phone}
                        </p>

                    </div>


                    <div class="payment-summary">

                        <p>
                            Payment Method
                            <strong>
                                ${getPaymentName(
                                    booking.paymentMethod
                                )}
                            </strong>
                        </p>

                        <p class="total-price">
                            Total Amount
                            <strong>
                                ₹${booking.amount}
                            </strong>
                        </p>

                    </div>


                    <div class="ticket-status">
                        ✓ CONFIRMED
                    </div>

                </div>


                <div class="summary-actions">

                    <button
                        id="printTicket"
                        class="primary-btn"
                        type="button">
                        🖨️ Print Ticket
                    </button>

                    <button
                        id="homeButton"
                        class="secondary-btn"
                        type="button">
                        🏠 Back to Home
                    </button>

                </div>

            </div>

        </section>
    `;


    // Print ticket
    document
        .getElementById("printTicket")
        .addEventListener("click", () => {

            window.print();

        });


    // Back to home
    document
        .getElementById("homeButton")
        .addEventListener("click", () => {

            if (typeof window.showHome === "function") {
                window.showHome();
            }

        });
}


function getPaymentName(method) {

    const names = {

        upi: "UPI",

        netbanking: "Net Banking",

        card: "Credit / Debit Card",

        counter: "Pay at Bus Counter"

    };

    return names[method] || method;
}
