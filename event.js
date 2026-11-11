// schema.org data, also rendered as JSON-LD on every page
export const event = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  url: "https://eskalation-essen.de",
  name: "Eskalation Essen",
  description:
    "Der Treppenlauf für Feuerwehrleute gegen die Rolltreppe: rauf, während sie runterfährt. 2027 im Ruhr Museum auf Zollverein in Essen.",
  location: {
    "@type": "Place",
    name: "Ruhr Museum",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gelsenkirchener Straße 181",
      postalCode: "45309",
      addressLocality: "Essen",
      addressCountry: "DE",
    },
  },
  organizer: {
    "@type": "Person",
    name: "Stefan Matheis",
    email: "mailto:stefan@gelungen.es",
    telephone: "+49 160 970 48 114",
  },
};

// shown below the event name, not part of the schema.org data
export const subline = "Rise Against the Machine";
