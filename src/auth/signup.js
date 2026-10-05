export function showSignup() {

    const app =
        document.getElementById("app");

    app.innerHTML = `

        <section class="auth-page">

            <div class="auth-card">

                <div class="auth-icon">
                    🚌
                </div>

                <h1>
                    Create Account
                </h1>

                <p>
                    Start booking your bus journeys.
                </p>


                <form id="signupForm">

                    <input
                        type="text"
                        id="signupName"
                        placeholder="Full Name"
                        required
                    >

                    <input
                        type="email"
                        id="signupEmail"
                        placeholder="Email Address"
                        required
                    >

                    <input
                        type="password"
                        id="signupPassword"
                        placeholder="Password"
                        required
                    >

                    <button
                        type="submit"
                        class="primary-btn"
                    >
                        Create Account
                    </button>

                </form>


                <p class="auth-switch">

                    Already have an account?

                    <button
                        onclick="showLogin()"
                    >
                        Login
                    </button>

                </p>

            </div>

        </section>
    `;


    document
        .getElementById("signupForm")
        .addEventListener("submit", signup);
}


function signup(event) {

    event.preventDefault();

    const name =
        document.getElementById("signupName").value;

    const email =
        document.getElementById("signupEmail").value;

    const password =
        document.getElementById("signupPassword").value;


    const user = {

        name,
        email,
        password

    };


    localStorage.setItem(
        "busUser",
        JSON.stringify(user)
    );


  //alert("Signup successful!");

    showLogin();
}