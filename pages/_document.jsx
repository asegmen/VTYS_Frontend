import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class EjDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/png" href="" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
        </Head>
        <body>
          <div>
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

EjDocument.getInitialProps = (ctx) => {
  const page = ctx.renderPage((Component) => {
    const WrappedComponent = ({ pageContext, ...props }) => {
      return <Component {...props} />;
    };

    return WrappedComponent;
  });

  return {
    ...page,
    context: ctx,
  };
};

export default EjDocument;
