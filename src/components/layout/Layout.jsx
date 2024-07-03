import React from "react";
import Footer3 from "../footer/Footer3";
import Header from "../header/Header3";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";
import { constructMetadata } from "@/utils/metadata";
export const metadata = constructMetadata();

function Layout({ children }) {
  useBodyClass("home-dark2");
  return (
    <>
      <Head>
        <title>NexPetro Private Limited</title>
        <meta
          name="description"
          content="Welcome to NexPetro Private Limited, a reputable brand ushering Petroleum and Bituminous products, Industrial and Agricultural Chemicals in the Zimbabwean market and beyond. Our dedication is to offer top class in our wide range of products and services focused at forming lasting partnerships with our valued client base.  We have a strong backing of expertise in various lines of professions which is an enabler on our part to read, understand and respond most accordingly to the market trends and demands in catering fully and effectively for our customers’ diverse needs."
        />
        <link rel="icon" href="/assets/img/logo_small_light.png" />
      </Head>
      <Header />
      {children}
      <Footer3 />
    </>
  );
}

export default Layout;
