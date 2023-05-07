import NavBar from "@/components/NavBar";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";

export default function APP({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </>
  );
}
