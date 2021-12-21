import { useState, useEffect } from "react";
import "./App.css";
import unlock from "./images/unlock.png";

function App() {
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [emailFocus, setEmailFocus] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    // let showCopas = false;
    const [showCopas, setShowCopas] = useState(false);

    const lowercaseRegex = /[a-z]+/g;
    const [lowerCheck, setLowerCheck] = useState(true);

    const uppercaseRegex = /[A-Z]+/g;
    const [upperCheck, setUpperCheck] = useState(false);

    const numberRegex = /[0-9]/g;
    const [numberCheck, setNumberCheck] = useState(false);

    const specialCharRegex = /[$&+,:;=?@#|'<>.^*()%!-]/g;
    const [specialCheck, setSpecialCheck] = useState(false);

    const regexAll = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [characterCheck, setCharacterCheck] = useState(false);
    const [confirmPassCheck, setConfirmPassCheck] = useState(false);

    useEffect(() => {
        let lower = lowercaseRegex.test(password);
        let upper = uppercaseRegex.test(password);
        let num = numberRegex.test(password);
        let spec = specialCharRegex.test(password);
        let char = password.length > 7;
        let rAll = regexAll.test(password);

        setLowerCheck(lower);
        setUpperCheck(upper);
        setNumberCheck(num);
        setSpecialCheck(spec);
        setCharacterCheck(char);
        setPasswordCheck(rAll);
        console.log(lowerCheck);
         setConfirmPassCheck(confirmPass == password);


        // passwordCheck ? setSignupButton(true) : setSignupButton(false);
    }, [password, passwordCheck]);

    useEffect(() => {
        setConfirmPassCheck(confirmPass == password);

        return () => {};
    }, [confirmPass]);

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
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    className="input email"
                                    id="email"
                                    required
                                    maxLength="100"
                                    type="email"
                                    autoComplete="off"
                                />
                                {emailFocus && (
                                    <div className="notify not-email">
                                        You will use this as your user ID
                                    </div>
                                )}
                            </fieldset>
                            <fieldset>
                                <label for="phone-num">
                                    Phone <small>(recommended)</small>
                                </label>
                                <input
                                    className="input phone"
                                    id="phone-num"
                                    onFocus={() => setPhoneFocus(true)}
                                    onBlur={() => setPhoneFocus(false)}
                                    required
                                    maxLength="30"
                                    type="tel"
                                    autoComplete="off"
                                />
                                {phoneFocus && (
                                    <div className="notify not-phone">
                                        We strongly recommend adding a phone
                                        number. This will help verify your
                                        account and keep it safe.
                                    </div>
                                )}
                                <small className="description">
                                    Standard call, message, or data rates may
                                    apply.
                                </small>
                            </fieldset>
                            <fieldset>
                                <label for="password">Password</label>
                                <div className="input-wrapper">
                                    <input
                                        className={`input password ${
                                            showCopas
                                                ? passwordCheck
                                                    ? "green-border"
                                                    : "red-border"
                                                : ""
                                        }`}
                                        id="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        onFocus={() => {
                                            setPasswordFocus(true);
                                            setShowCopas(true);
                                            // console.log(showCopas);
                                        }}
                                        onBlur={() => {
                                            setPasswordFocus(false);
                                        }}
                                        required
                                        maxLength="100"
                                        type="password"
                                        autoComplete="off"
                                    />
                                    <img className="unlock" src={unlock} />
                                </div>
                                {passwordFocus && (
                                    <div className="notify not-password">
                                        Create a new password
                                    </div>
                                )}
                            </fieldset>

                            {showCopas ? (
                                <div className="password-req">
                                    <div className="password-requirements-ul-left">
                                        <ul className="password-requirements-ul">
                                            <li>
                                                <span
                                                    className={
                                                        lowerCheck
                                                            ? "pass"
                                                            : "red"
                                                    }
                                                >
                                                    {lowerCheck ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-6 w-6"
                                                            fill="none"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-6 w-6"
                                                            fill="none"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    )}{" "}
                                                    One lowercase character
                                                </span>
                                            </li>
                                            <li>
                                                <span
                                                    className={
                                                        upperCheck
                                                            ? "pass"
                                                            : "red"
                                                    }
                                                >
                                                    {upperCheck ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-6 w-6"
                                                            fill="none"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-6 w-6"
                                                            fill="none"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    )}{" "}
                                                    One uppercase character
                                                </span>
                                            </li>
                                            <li>
                                                <span
                                                    className={
                                                        numberCheck
                                                            ? "pass"
                                                            : "red"
                                                    }
                                                >
                                                    {numberCheck ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-6 w-6"
                                                            fill="none"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-6 w-6"
                                                            fill="none"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    )}{" "}
                                                    One number
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <span
                                                    className={
                                                        specialCheck
                                                            ? "pass"
                                                            : "red"
                                                    }
                                                >
                                                    {specialCheck ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-6 w-6"
                                                            fill="none"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-6 w-6"
                                                            fill="none"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    )}{" "}
                                                    One special character
                                                </span>
                                            </li>
                                            <li>
                                                <span
                                                    className={
                                                        characterCheck
                                                            ? "pass"
                                                            : "red"
                                                    }
                                                >
                                                    {characterCheck ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-6 w-6"
                                                            fill="none"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="h-6 w-6"
                                                            fill="none"
                                                            width="12"
                                                            height="12"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    )}{" "}
                                                    8 characters minimum
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : null}

                            {showCopas ? (
                                <fieldset className="copassword-fieldset">
                                    <label for="copassword">
                                        Confirm password
                                    </label>
                                    <div className="input-wrapper">
                                        {" "}
                                        <input
                                            onChange={(e) =>
                                                setConfirmPass(e.target.value)
                                            }
                                            value={confirmPass}
                                            className={`input copassword ${
                                                confirmPassCheck
                                                    ? "green-border"
                                                    : "red-border"
                                            }`}
                                            id="copassword"
                                            required
                                            maxLength="100"
                                            type="password"
                                            autoComplete="off"
                                        />
                                    </div>
                                    {confirmPassCheck ? null : (
                                        <div className="description red">
                                            Confirm password field does not
                                            match the password field.
                                        </div>
                                    )}
                                </fieldset>
                            ) : null}

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

                            <section className="description-bottom">
                                <i>
                                    By selecting Create account, you agree to
                                    our <a>Terms</a> and have read and
                                    acknowledge our{" "}
                                    <a>Global Privacy Statement.</a>
                                </i>
                                <div>
                                    <b>Updates effective on January 10, 2022</b>
                                </div>
                            </section>
                        </form>
                    </section>
                    <footer className="form-footer">
                        Invisible reCAPTCHA by Google <a> Privacy Policy</a> and
                        <a> Terms of Use</a> .
                    </footer>
                </div>
                <footer className="main-footer">
                    <div className="privacy">
                        <a>Legal</a>
                        <a>Privacy</a>
                        <a>Security</a>
                    </div>
                    <div>
                        © 2021 Intuit, Inc. All rights reserved. Intuit,
                        QuickBooks, QB, TurboTax, ProConnect and Mint are
                        registered trademarks of Intuit Inc.
                    </div>{" "}
                    Terms and conditions, features, support, pricing, and
                    service options subject to change without notice.
                </footer>

                <div className="privacySettings">
                    {" "}
                    <a>Privacy Settings</a>
                </div>
            </main>
        </div>
    );
}

export default App;
