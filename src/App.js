import "./App.css";
import unlock from "./images/unlock.png";

function App() {
    return (
        <div className="App">
            <header className="already-have-account">
                <div className="header-container">
                    <div className="header-container-component">
                        <div>Already have an Intuit account?</div>
                        <a
                            id="ius-hosted-ui-navigation-account-recovery-link"
                            href="#"
                        >
                            I forgot my User ID or Password
                        </a>
                    </div>
                    <div className="header-container-component">
                        <button className="sign-in-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                className="sign-in-icon"
                                fill="none"
                                // width="16"
                                // height="20"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                            Sing In
                        </button>
                    </div>
                </div>
            </header>

            <section>
                <div className="main-logo">
                    <div className="logo-container">
                        <a class="logo" href="#"></a>
                    </div>
                </div>
            </section>

            <section className="products">
                <nav className="products-list">
                    <ul>
                        <li>
                            <span className="mint"></span>
                            <a
                                href="https://www.mint.com/"
                                className="mint-a"
                                target="_blank"
                            ></a>
                        </li>
                        <li>
                            <span className="quickbooks"></span>
                            <a
                                href="https://www.mint.com/"
                                className="quickbooks-a"
                                target="_blank"
                            ></a>
                        </li>
                        <li>
                            <span className="turbotax"></span>
                            <a
                                href="https://www.mint.com/"
                                className="turbotax-a"
                                target="_blank"
                            ></a>
                        </li>
                    </ul>
                </nav>
            </section>

            <main>
                <div className="sign-up-form-container">
                    <section className="sign-up">
                        <header>
                            <h2 className="sign-up-header">
                                Create an Intuit account
                            </h2>
                            <div>
                                <p>
                                    One account for everything intuit, including
                                    Mint.
                                </p>
                                <a href="https://accounts-help.lc.intuit.com/questions/1582580-creating-an-account">
                                    Learn More
                                </a>
                            </div>
                        </header>

                        <form className="sign-up-form">
                            <fieldset>
                                <label for="email">Email</label>
                                <input
                                    autoFocus
                                    className="input email"
                                    id="email"
                                    required
                                    maxLength="100"
                                    type="email"
                                    autoComplete="off"
                                />
                            </fieldset>
                            <fieldset>
                                <label for="phone-num">
                                    Phone <small>(recommended)</small>
                                </label>
                                <input
                                    autoFocus
                                    className="input phone"
                                    id="phone-num"
                                    required
                                    maxLength="30"
                                    type="tel"
                                    autoComplete="off"
                                />
                            </fieldset>
                            <fieldset>
                                <label for="password">Password</label>
                                <div className="input-wrapper">
                                    <input
                                        autoFocus
                                        className="input password"
                                        id="password"
                                        required
                                        maxLength="100"
                                        type="password"
                                        autoComplete="off"
                                    />
                                    <img className="unlock" src={unlock} />
                                </div>
                            </fieldset>
                            <fieldset>
                                <label for="copassword">Confirm password</label>
                                <div className="input-wrapper">
                                    {" "}
                                    <input
                                        autoFocus
                                        className="input copassword"
                                        id="copassword"
                                        required
                                        maxLength="100"
                                        type="password"
                                        autoComplete="off"
                                    />
                                </div>
                            </fieldset>
                            <div>
                                <button className="button-submit" type="submit">
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        className="sign-in-button-icon"
                                        fill="none"
                                        width="20"
                                        height="25"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
