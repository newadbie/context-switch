import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { MainContextProvider } from "context/MainProvider";
import { ErrorBoundary } from "Boundary/Boundary";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: "flex", flexDirection: "row" }}>
            <li>
              <Link href="/page-one">Page1</Link>
            </li>
            <li>
              <Link href="/page-two">Page2</Link>
            </li>
            <li>
              <Link href="/page-three">Page3</Link>
            </li>
          </ul>
        </nav>
      </header>
      <ErrorBoundary>
        <MainContextProvider>
          <Component {...pageProps} />
        </MainContextProvider>
      </ErrorBoundary>
    </>
  );
};

export default MyApp;
