import React from "react";
import App from "next/app";

import "src/assets/stylesheets/app.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }

  componentDidMount() {
    // This prevents auto zooming of form elements on focus for mobile devices
    const metaViewportTag = document.head.querySelector(
      'meta[name="viewport"]'
    );
    metaViewportTag.content =
      "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui";
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
