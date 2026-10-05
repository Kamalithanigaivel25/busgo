export function showLogin() {

    const app =
        document.getElementById("app");

    app.innerHTML = `

        <section class="auth-page">

            <div class="auth-card">

                <div class="auth-icon">
                    🚌
                </div>

                <h1>
                    Welcome Back
                </h1>

                <p>
                    Login to continue your journey.
                </p>


                <form id="loginForm">

                    <input
                        type="email"
                        id="loginEmail"
                        placeholder="Email Address"
                        required
                    >

                    <input
                        type="password"
                        id="loginPassword"
                        placeholder="Password"
                        required
                    >

                    <button
                        
                        type="submit"
                        class="primary-btn"
                    >
                        Login
                    </button>

                </form>


                <p class="auth-switch">

                    Don't have an account?

                    <button
                        onclick="showSignup()"
                    >
                        Sign Up
                    </button>

                </p>

            </div>

        </section>
    `;


    document
        .getElementById("loginForm")
        .addEventListener("submit", login);
}


function login(event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;


    const savedUser =
        JSON.parse(
            localStorage.getItem("busUser")
        );


    if (!savedUser) {

        //alert("Please signup first.");

        showSignup();

        return;
    }


    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        location.reload();

    } else {

        alert(
            "Invalid email or password."
        );
    }
}


export function logout() {

    localStorage.removeItem("loggedIn");

    location.reload();
}