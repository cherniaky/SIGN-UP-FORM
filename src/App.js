import "./App.css";

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
        </div>
    );
}

export default App;
