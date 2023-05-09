import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  title: ReactNode;
}

export default function Seo({ title }: Props) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
