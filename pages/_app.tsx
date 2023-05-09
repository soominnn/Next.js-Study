import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import Layout from "@/components/Layout";

export default function APP({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
