import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // const sheet = new ServerStyleSheet();
    // const page = ctx.renderPage(
    //   (App) => (props) => sheet.collectStyles(<App {...props} />)
    // );
    // const styleTags = sheet.getStyleElement();
    // return {
    //   ...page,
    //   styleTags,
    // };
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage

      try {
          ctx.renderPage = () =>
              originalRenderPage({
                  enhanceApp: (App) => (props) =>
                      sheet.collectStyles(<App {...props} />),
              })

          const initialProps = await Document.getInitialProps(ctx)
          return {
              ...initialProps,
              styles: (
                  <>
                      {initialProps.styles}
                      {sheet.getStyleElement()}
                  </>
              ),
          }
      } finally {
          sheet.seal()
      }
  }
  render() {
    return (
      <Html>
        <Head>
            <link rel="dns-prefetch preconnect" href="//res.cloudinary.com"/>
            <link rel="icon" href="/favicon.ico" />
            {/* Bootstrap CSS disabled - conflicts with Tailwind colors */}
            {/* <link rel="stylesheet" href="/bootstrap.css" /> */}
            {/*<link rel="preload" href="/InterItalic500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />*/}
            <link rel="preload" href="/Inter500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..500;1,14..32,300..500&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
