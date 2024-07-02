export function constructMetadata({
  title = "NexPetro Private Limited",
  description = "Welcome to NexPetro Private Limited, a reputable brand ushering Petroleum and Bituminous products, Industrial and Agricultural Chemicals in the Zimbabwean market and beyond. Our dedication is to offer top class in our wide range of products and services focused at forming lasting partnerships with our valued client base.  We have a strong backing of expertise in various lines of professions which is an enabler on our part to read, understand and respond most accordingly to the market trends and demands in catering fully and effectively for our customers’ diverse needs.",
  image = "/favicon.ico",
  icons = "/favicon.ico",
  noIndex = false,
} = {}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@pacific_nig",
    },
    icons,
    // metadataBase: new URL("https://pacific-professional.com.ng"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
