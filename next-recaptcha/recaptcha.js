import React, { Component } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RecaptchaComponent = () => {
    const Recaptcha = ({ children }) => {
        return (
            <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
                {children}
            </GoogleReCaptchaProvider>
        );
    };

    return class Higher extends React.Component {
        render() {
            return (
                <Recaptcha>
                    <Component {...this.props} />
                </Recaptcha>
            );
        }
    };
};

export { RecaptchaComponent };