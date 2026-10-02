export function showBookings() {

    const app =
        document.getElementById("app");


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "bookings"
            )
        ) || [];


    app.innerHTML = `

        <section class="booking-page">

            <div class="page-header">

                <button
                    class="back-btn"
                    onclick="location.reload()"
                >
                    ← Home
                </button>

                <h1>
                    My Bookings
                </h1>

            </div>


            <div class="bookings-list">

                ${
                    bookings.length === 0

                    ?

                    `
                    <div class="no-results">

                        <h2>
                            No bookings yet
                        </h2>

                        <button
                            class="primary-btn"
                            onclick="searchBuses()"
                        >
                            Book a Bus
                        </button>

                    </div>
                    `

                    :

                    bookings.map(
                        booking => `

                        <div class="booking-card">

                            <div>

                                <h2>
                                    ${booking.bus.operator}
                                </h2>

                                <p>
                                    ${booking.bus.from}
                                    →
                                    ${booking.bus.to}
                                </p>

                            </div>


                            <div>

                                <p>
                                    Date:
                                    ${booking.journeyDate}
                                </p>

                                <p>
                                    Seat:
                                    ${booking.selectedSeat}
                                </p>

                            </div>


                            <div>

                                <strong>
                                    ₹${booking.bus.price}
                                </strong>

                                <span class="confirmed">
                                    ${booking.status}
                                </span>

                            </div>

                        </div>

                    `
                    ).join("")
                }

            </div>

        </section>
    `;
}