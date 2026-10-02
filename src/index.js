import "./style.css";

import { showLanding } from "./landing.js";

import {
    navigate,
    goBack,
    clearNavigation
} from "./navigation.js";

import {
    showSignup
} from "./auth/signup.js";

import {
    showLogin,
    logout
} from "./auth/login.js";

import {
    searchBuses
} from "./booking/search.js";

import {
    showBookings
} from "./booking/booking.js";

import { showPayment } from "./booking/payment.js";


const app = document.getElementById("app");


window.app = app;

window.navigate = navigate;
window.goBack = goBack;
window.clearNavigation = clearNavigation;

window.showSignup = showSignup;
window.showLogin = showLogin;

window.searchBuses = searchBuses;
window.showBookings = showBookings;

window.logout = logout;


// Start application

if (localStorage.getItem("loggedIn") === "true") {

    showHome();

} else {

    showLanding();

}


/**export function showHome() {

    const user =
        JSON.parse(
            localStorage.getItem("busUser")
        );

    app.innerHTML = `

        <header class="navbar">

            <div class="logo">
                🚌 BusGo
            </div>

            <nav>

                <button onclick="searchBuses()">
                    Search Bus
                </button>

                <button onclick="showBookings()">
                    My Bookings
                </button>

                <button onclick="logout()">
                    Logout
                </button>

            </nav>

        </header>


        <section class="home-section">

            <div class="home-content">

                <h1>
                    Welcome,
                    ${user?.name || "Passenger"} 👋
                </h1>

                <p>
                    Book your bus journey quickly and easily.
                </p>

                <button
                    class="primary-btn"
                    onclick="searchBuses()"
                >
                    Search Buses
                </button>

            </div>

        </section>
    `;
}*/


export function showHome() {

    const user =
        JSON.parse(
            localStorage.getItem("busUser")
        );

    app.innerHTML = `

        <!-- =========================
             NAVBAR
        ========================== -->

        <header class="navbar">

            <div class="logo">
                🚌 <span>BusGo</span>
            </div>

            <nav>

                <button
                    id="homeSearchBtn"
                    class="nav-btn">
                    🔍 Search Bus
                </button>

                <button
                    id="myBookingsBtn"
                    class="nav-btn">
                    🎫 My Bookings
                </button>

                <button
                    id="logoutBtn"
                    class="logout-btn">
                    Logout
                </button>

            </nav>

        </header>


        <!-- =========================
             WELCOME HERO
        ========================== -->

        <section class="home-hero">

            <div class="home-hero-content">

                <span class="welcome-badge">
                    👋 Welcome back
                </span>

                <h1>
                    Hello,
                    <span>
                        ${user?.name || "Passenger"}
                    </span>
                </h1>

                <p>
                    Travel comfortably, book easily,
                    and enjoy a smooth journey with BusGo.
                </p>

                <button
                    id="heroSearchBtn"
                    class="primary-btn">

                    🔍 Find Your Bus

                </button>

            </div>


            <div class="hero-bus">

                <div class="bus-circle">
                    🚌
                </div>

            </div>

        </section>


        <!-- =========================
             ABOUT BUSGO
        ========================== -->

        <section class="about-section">

            <div class="section-title">

                <span>
                    ABOUT BUSGO
                </span>

                <h2>
                    Your Journey Starts Here
                </h2>

                <p>
                    BusGo makes bus travel simple,
                    convenient and comfortable.
                </p>

            </div>


            <div class="about-content">

                <div class="about-card">

                    <div class="about-icon">
                        🚌
                    </div>

                    <h3>
                        Easy Bus Booking
                    </h3>

                    <p>
                        Search available buses,
                        compare options and book
                        your preferred journey easily.
                    </p>

                </div>


                <div class="about-card">

                    <div class="about-icon">
                        💺
                    </div>

                    <h3>
                        Choose Your Seat
                    </h3>

                    <p>
                        Select your preferred seat
                        before completing your booking.
                    </p>

                </div>


                <div class="about-card">

                    <div class="about-icon">
                        🔐
                    </div>

                    <h3>
                        Secure Payment
                    </h3>

                    <p>
                        Choose from multiple payment
                        options for a simple checkout.
                    </p>

                </div>

            </div>

        </section>


        <!-- =========================
             HOW IT WORKS
        ========================== -->

        <section class="how-section">

            <div class="section-title">

                <span>
                    HOW IT WORKS
                </span>

                <h2>
                    Book Your Bus in 4 Simple Steps
                </h2>

            </div>


            <div class="steps-container">

                <div class="step-card">

                    <div class="step-number">
                        01
                    </div>

                    <div class="step-icon">
                        🔍
                    </div>

                    <h3>
                        Search
                    </h3>

                    <p>
                        Enter your departure and
                        destination cities.
                    </p>

                </div>


                <div class="step-card">

                    <div class="step-number">
                        02
                    </div>

                    <div class="step-icon">
                        🚌
                    </div>

                    <h3>
                        Choose Bus
                    </h3>

                    <p>
                        Compare buses, timings,
                        operators and prices.
                    </p>

                </div>


                <div class="step-card">

                    <div class="step-number">
                        03
                    </div>

                    <div class="step-icon">
                        💺
                    </div>

                    <h3>
                        Select Seat
                    </h3>

                    <p>
                        Choose your preferred
                        available seat.
                    </p>

                </div>


                <div class="step-card">

                    <div class="step-number">
                        04
                    </div>

                    <div class="step-icon">
                        🎫
                    </div>

                    <h3>
                        Get Ticket
                    </h3>

                    <p>
                        Complete payment and
                        receive your booking ticket.
                    </p>

                </div>

            </div>

        </section>


        <!-- =========================
             BUSGO FEATURES
        ========================== -->

        <section class="features-section">

            <div class="section-title">

                <span>
                    WHY BUSGO
                </span>

                <h2>
                    Everything You Need for a Better Journey
                </h2>

            </div>


            <div class="feature-grid">

                <div class="feature-card">

                    <div class="feature-icon">
                        🕐
                    </div>

                    <div>
                        <h3>
                            Flexible Timings
                        </h3>

                        <p>
                            Find buses that match
                            your travel schedule.
                        </p>
                    </div>

                </div>


                <div class="feature-card">

                    <div class="feature-icon">
                        💰
                    </div>

                    <div>
                        <h3>
                            Affordable Travel
                        </h3>

                        <p>
                            Compare different buses
                            and choose suitable fares.
                        </p>
                    </div>

                </div>


                <div class="feature-card">

                    <div class="feature-icon">
                        📱
                    </div>

                    <div>
                        <h3>
                            Simple Experience
                        </h3>

                        <p>
                            Complete your booking
                            with a simple interface.
                        </p>
                    </div>

                </div>


                <div class="feature-card">

                    <div class="feature-icon">
                        🎫
                    </div>

                    <div>
                        <h3>
                            Digital Ticket
                        </h3>

                        <p>
                            View your booking details
                            and print your ticket.
                        </p>
                    </div>

                </div>

            </div>

        </section>


        <!-- =========================
             TRAVEL DESTINATIONS
        ========================== -->

        <section class="destination-section">

            <div class="section-title">

                <span>
                    EXPLORE
                </span>

                <h2>
                    Popular Travel Destinations
                </h2>

                <p>
                    Discover popular cities and
                    plan your next journey.
                </p>

            </div>


            <div class="destination-grid">

                <div class="destination-card">

                    <div class="destination-image">
                        🌆
                    </div>

                    <h3>
                        Chennai
                    </h3>

                    <p>
                        Gateway to South India
                    </p>

                </div>


                <div class="destination-card">

                    <div class="destination-image">
                        🏙️
                    </div>

                    <h3>
                        Bangalore
                    </h3>

                    <p>
                        The Garden City
                    </p>

                </div>


                <div class="destination-card">

                    <div class="destination-image">
                        🌄
                    </div>

                    <h3>
                        Coimbatore
                    </h3>

                    <p>
                        Gateway to the Western Ghats
                    </p>

                </div>


                <div class="destination-card">

                    <div class="destination-image">
                        🌇
                    </div>

                    <h3>
                        Madurai
                    </h3>

                    <p>
                        Historic Temple City
                    </p>

                </div>

            </div>

        </section>


        <!-- =========================
             INFORMATION BANNER
        ========================== -->

        <section class="info-banner">

            <div>

                <span>
                    🚌 TRAVEL WITH BUSGO
                </span>

                <h2>
                    Your Comfortable Journey
                    Is Just a Click Away
                </h2>

                <p>
                    Choose your route, select your seat
                    and get ready for your journey.
                </p>

            </div>


            <button
                id="infoSearchBtn"
                class="banner-btn">

                Start Booking →

            </button>

        </section>


        <!-- =========================
             FOOTER
        ========================== -->

        <footer class="home-footer">

            <div class="footer-logo">
                🚌 BusGo
            </div>

            <p>
                Making bus travel simple,
                comfortable and convenient.
            </p>

            <div class="footer-bottom">
                © 2026 BusGo. All rights reserved.
            </div>

        </footer>

    `;


    // =========================================
    // SEARCH BUTTONS
    // =========================================

    document
        .getElementById("homeSearchBtn")
        .addEventListener("click", () => {

            searchBuses();

        });


    document
        .getElementById("heroSearchBtn")
        .addEventListener("click", () => {

            searchBuses();

        });


    document
        .getElementById("infoSearchBtn")
        .addEventListener("click", () => {

            searchBuses();

        });


    // =========================================
    // MY BOOKINGS
    // =========================================

    document
        .getElementById("myBookingsBtn")
        .addEventListener("click", () => {

            showBookings();

        });


    // =========================================
    // LOGOUT
    // =========================================

    document
        .getElementById("logoutBtn")
        .addEventListener("click", () => {

            const confirmLogout =
                confirm(
                    "Are you sure you want to logout?"
                );


            if (!confirmLogout) {
                return;
            }


            localStorage.removeItem(
                "loggedIn"
            );


            showLanding();

        });

}
