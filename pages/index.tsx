import LoginStatus from "@/components/LoginStatus";
import protectedGetServerSideProps from "@/src/utils/protectRoute";
import Head from "next/head";

import Link from "next/link";
import React from "react";
import Button from "@/components/Button";
import Layout from "@/components/layouts/Layout";

export const getServerSideProps = protectedGetServerSideProps;

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Design Thriving</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"p-8"}>
        <LoginStatus />
        <h2 className={"mt-4"}>Hello! You are currently looking at a protected route</h2>

        <Link href={"/dev-pages"}>
          <Button>See Dev Pages</Button>
        </Link>
      </main>
    </>
  );
}