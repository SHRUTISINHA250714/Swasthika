
import React, { ReactNode } from "react";
import Head from "next/head"; // If using Next.js

type Props = {
  description?: string;
  children: ReactNode;
  title?: string;
};

const PageContainer = ({ title, description, children }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <div>{children}</div>
  </>
);

export default PageContainer;
