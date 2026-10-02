export function showLanding() {

    const app =
        document.getElementById("app");

    app.innerHTML = `

        <section class="landing">

            <nav class="landing-nav">

                <div class="logo">
                    🚌 BusGo
                </div>

                <div>

                    <button
                        class="nav-btn"
                        onclick="showLogin()"
                    >
                        Login
                    </button>

                    <button
                        class="signup-btn"
                        onclick="showSignup()"
                    >
                        Sign Up
                    </button>

                </div>

            </nav>


            <div class="hero">

                <div class="hero-content">

                    <span class="hero-badge">
                        🚌 Smart Bus Booking
                    </span>

                    <h1>
                        Your Journey
                        <span>Starts Here.</span>
                    </h1>

                    <p>
                        Search buses, choose your favourite
                        seat and book your journey in seconds.
                    </p>

                    <div class="hero-buttons">

                        <button
                            class="primary-btn"
                            onclick="showSignup()"
                        >
                            Get Started →
                        </button>

                        <button
                            class="secondary-btn"
                            onclick="showLogin()"
                        >
                            Login
                        </button>

                    </div>

                </div>


                <div class="hero-card">

                    <div class="bus-illustration">
                        🚌
                    </div>

                    <h3>
                        Easy. Fast. Reliable.
                    </h3>

                    <p>
                        Book your next journey
                        without the hassle.
                    </p>

                </div>

            </div>


            <div class="features">

                <div class="feature-card">

                    <div>🔎</div>

                    <h3>
                        Search Buses
                    </h3>

                    <p>
                        Find buses using your
                        journey details.
                    </p>

                </div>


                <div class="feature-card">

                    <div>💺</div>

                    <h3>
                        Choose Seat
                    </h3>

                    <p>
                        Select your preferred
                        available seat.
                    </p>

                </div>


                <div class="feature-card">

                    <div>🎫</div>

                    <h3>
                        Get Ticket
                    </h3>

                    <p>
                        Receive your booking
                        confirmation instantly.
                    </p>

                </div>

            </div>

        </section>
    `;
}