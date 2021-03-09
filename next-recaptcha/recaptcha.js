import React, { Component } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RecaptchaComponent = () => {
    const Recaptcha = ({ children }) => {
        return (
            <GoogleReCaptchaProvider>
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