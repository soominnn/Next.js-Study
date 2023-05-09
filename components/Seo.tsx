import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  title: ReactNode;
}

export default function Seo({ title }: Props) {
  const headTitle = `${title} | Next Movies`;
  return (
    <Head>
      <title>{headTitle}</title>
    </Head>
  );
}
