import Home3Team from "@/components/Team/Home3Team";
import About3 from "@/components/about/About3";
import Banner3 from "@/components/bannner/Banner3";
import Home3Blog from "@/components/blog/Home3Blog";
import Preloader from "@/components/common/Preloader";
import Home3Contact from "@/components/contact/Home3Contact";
import Footer3 from "@/components/footer/Footer3";
import Header3 from "@/components/header/Header3";
import Partner3 from "@/components/partner/Partner3";
import PricingPlan3 from "@/components/pricingplan/PricingPlan3";
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
        <meta
          property="og:title"
          content="Mobile,desktop,web applications company"
        />
        <meta property="og:site_name" content="Pacific Professional Service" />
        <meta
          property="og:url"
          content="https://www.pacific-professional.com.ng/"
        />
        <meta
          property="og:description"
          content="We are a web & app development company that turns your ideas into a new driving force of your business. We hire brilliant web and mobile app developers to deliver projects on time and maintain the top"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/53145584_360454158131288_837945284771184640_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeELoLiw4fhKbzfPW4c-aKxDH1G1-mUXfYofUbX6ZRd9igzbSs_C3rVYO2DLhxRpxcE&_nc_ohc=A9jj751ZC9YAX8MtWuD&_nc_ht=scontent.flos2-1.fna&oh=6e319f0e5e27517ab8d7b27b032cbb77&oe=5F464541"
        />
        <meta charSet="utf-8" />
        <meta name="title" content="Pacific Technology Service" />
        <meta
          name="description"
          content="We are a web & app development company that turns your ideas into a new driving force of your business. We hire brilliant web and mobile app developer"
        />
        <meta
          name="keywords"
          content="software company, corporate software,web application, mobile applications,desktop application cloud application,software maintenance"
        />
        <meta name="yandex-verification" content="edc1b7461e44eeb5" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          name="author"
          content="Olawale afuye Pacific Technology Service"
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
        <title>Pacific Technology Servic e- Software Agency</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/logo_small_light.png" />
        <meta
          name="google-site-verification"
          content="KhEF5zGLDdw3yLbzDVUZUvk8hRid_oGY3mX3NKDQuTI"
        />
      </Head>

      <Header3 />
      <Banner3 />
      <Partner3 />
      <Solution3 />
      <About3 />
      <SuccessStory3 />
      <Testimonial3 />
      {/* <PricingPlan3 /> */}
      <Home3Contact />
      <Home3Team />
      <Home3Blog />
      <Footer3 />
    </>
  );
}
