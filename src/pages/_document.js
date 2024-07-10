import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Chat Bots for App */}
        <title>NexPetro Private Limited</title>
        <meta
          name="description"
          content="Welcome to NexPetro Private Limited, a reputable brand ushering Petroleum and Bituminous products, Industrial and Agricultural Chemicals in the Zimbabwean market and beyond. Our dedication is to offer top class in our wide range of products and services focused at forming lasting partnerships with our valued client base.  We have a strong backing of expertise in various lines of professions which is an enabler on our part to read, understand and respond most accordingly to the market trends and demands in catering fully and effectively for our customers’ diverse needs."
        />

        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NexPetro Private Limited" />
        <meta
          property="og:description"
          content="Welcome to NexPetro Private Limited, a reputable brand ushering Petroleum and Bituminous products, Industrial and Agricultural Chemicals in the Zimbabwean market and beyond. Our dedication is to offer top class in our wide range of products and services focused at forming lasting partnerships with our valued client base.  We have a strong backing of expertise in various lines of professions which is an enabler on our part to read, understand and respond most accordingly to the market trends and demands in catering fully and effectively for our customers’ diverse needs."
        />

        <meta name="twitter:title" content="NexPetro Private Limited" />
        <meta
          name="twitter:description"
          content="Welcome to NexPetro Private Limited, a reputable brand ushering Petroleum and Bituminous products, Industrial and Agricultural Chemicals in the Zimbabwean market and beyond. Our dedication is to offer top class in our wide range of products and services focused at forming lasting partnerships with our valued client base.  We have a strong backing of expertise in various lines of professions which is an enabler on our part to read, understand and respond most accordingly to the market trends and demands in catering fully and effectively for our customers’ diverse needs."
        />

        <meta name="google-site-verification" content="" />
        {/* chat bot */}
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
                 (function collectId(w, d) { 
                  w.CollectId = "668d2c853e99425e992dd595";
                  var h = d.head || d.getElementsByTagName("head")[0]; 
                  var s = d.createElement("script"); s.setAttribute("type", "text/javascript");
                  s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js");
                  h.appendChild(s); })(window, document)
            `,
          }}
        />

        {/* Global site tag (gtag.js) - Google Analytics */}

        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() {
                    dataLayer.push(arguments);
                  }
                  gtag("js", new Date());
              
                  gtag("config", "UA-131379491-2");
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-hook"></div>
      </body>
    </Html>
  );
}
