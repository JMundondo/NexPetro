import Home3Team from "@/components/Team/Home3Team";
import About3 from "@/components/about/About3";
import Banner3 from "@/components/bannner/Banner3";
import Home3Blog from "@/components/blog/Home3Blog";
import Home3Contact from "@/components/contact/Home3Contact";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import Partner3 from "@/components/partner/Partner3";
import Solution3 from "@/components/solutions/Solution3";
import SuccessStory3 from "@/components/successStorys/SuccessStory3";
import Testimonial3 from "@/components/testimonial/Testimonial3";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

export default function Home() {
  useBodyClass("home-dark2");

  return (
    <>
      <Head>
        <meta property="og:title" content=" NexPetro Private Limited" />
        <meta property="og:site_name" content=" NexPetro Private Limited" />
        <meta
          property="og:url"
          content=" NexPetro Private Limited - Petroleum and Bituminous products, Industrial and Agricultural Chemicals "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pacific_nig" />
        <meta
          name="twitter:title"
          content=" NexPetro Private Limited -Petroleum and Bituminous products, Industrial and Agricultural Chemicals "
        />
        <meta
          name="twitter:description"
          content="Transform your business with innovative web & app solutions."
        />
        <meta
          name="twitter:image"
          content="https://images.pexels.com/photos/19898245/pexels-photo-19898245/free-photo-of-pacific-technology-service.png"
        />

        <meta
          property="og:description"
          content="We are a leading Petroleum and Bituminous products, Industrial and Agricultural Chemicals "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/19898245/pexels-photo-19898245/free-photo-of-pacific-technology-service.png"
        />
        <meta charSet="utf-8" />
        <meta
          name="title"
          content=" NexPetro Private Limited -Petroleum and Bituminous products, Industrial and Agricultural Chemicals "
        />
        <meta
          name="description"
          content="Transform your business with  NexPetro Private Limited - a leadingPetroleum and Bituminous products, Industrial and Agricultural Chemicals . Our team of brilliant developers specializes in creating innovative solutions for web, mobile, and desktop applications."
        />
        <meta
          name="keywords"
          content="Petroleum and Bituminous products, Industrial and Agricultural Chemicals ,  NexPetro Private Limited"
        />
        <meta name="yandex-verification" content="edc1b7461e44eeb5" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          name="author"
          content="Tinashe Mundondo -  NexPetro Private Limited"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>NexPetro Private Limited</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/logo_small_light.png" />
      </Head>

      <Header3 />
      <Banner3 />
      <Solution3 />
      <Testimonial3 />
      {/* <PricingPlan3 /> */}
      <Home3Contact />
      <Home3Team />

      <Footer3 />
    </>
  );
}
