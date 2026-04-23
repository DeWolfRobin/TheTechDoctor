export const businessName = "The Tech Doctor";

export const contact = {
  email: "robin@de-wolf.eu",
  phoneHref: "+32488221025",
  phoneDisplay: "+32 488 22 10 25",
  streetAddress: "Spoorstraat 119",
  postalCode: "9340",
  locality: "Lede",
  country: "BE"
};

export const navLinks = [
  { href: "#services", label: "Diensten" },
  { href: "#process", label: "Werkwijze" },
  { href: "#pricing", label: "Prijzen" },
  { href: "#about", label: "Over ons" },
  { href: "#contact", label: "Contact" }
];

export const pageMeta = {
  title: `${businessName} | PC reparatie, virusverwijdering en dataherstel in Belgie`,
  description:
    "PC reparatie in Belgie: hulp bij trage pc's, virus removal, malware verwijderen, stofreiniging (dust cleaning) en data recovery/dataherstel. Service in het Nederlands en Engels.",
  ogDescription:
    "Computerhulp in Belgie voor pc repair/reparatie, virus removal, trage pc optimalisatie, stofreiniging en data recovery.",
  twitterDescription:
    "PC reparatie, virus verwijderen, data recovery en trage pc hulp in Belgie. Nederlands en Engels."
};

export const nearbyLocations = [
  "Lede",
  "Wichelen",
  "Schellebelle",
  "Serskamp",
  "Aalst",
  "Gent",
  "Wetteren",
  "Erpe-Mere",
  "Laarne",
  "Destelbergen",
  "Melle",
  "Oordegem"
];

export const seoSearchPhrases = [
  "pc reparatie Aalst",
  "computerhulp Gent",
  "virus verwijderen Wetteren",
  "data recovery Erpe-Mere",
  "PC repair Belgium",
  "pc reparatie Belgie"
];

export const overviewCards = [
  {
    title: "Duidelijke hulp",
    text: "U krijgt eerst een heldere uitleg, daarna pas een voorstel. Geen technisch verhaal waar u niets aan hebt."
  },
  {
    title: "Aan huis of in atelier",
    text: "Voor eenvoudige problemen komen we aan huis. Voor grondiger werk in atelier is de aanpak meestal sneller en voordeliger."
  },
  {
    title: "Prijs vooraf",
    text: "We werken met vaste prijzen waar dat kan en met een duidelijk uurtarief voor complexe dossiers."
  }
];

export const standardServices = [
  "Diagnose en analyse aan huis",
  "Simpele PC opschoning (1-2 uur werk)",
  "Diepe PC opschoning (tot 3 uur werk)"
];

export const advancedServices = [
  "Dataherstel van pc's en beschadigde systemen",
  "Virus- en malwareverwijdering",
  "Complexe fouten, opstartproblemen en problemen met externe schijven"
];

export const workshopBenefits = [
  "Meer tijd voor grondige analyse",
  "Snellere afhandeling in complexe dossiers",
  "Geen wachttijd bij u thuis",
  "Efficientere werkwijze en vaak lagere kost"
];

export const processSteps = [
  {
    step: "1",
    title: "U legt het probleem uit",
    text: "Telefonisch, via mail of bij een bezoek. We luisteren eerst en houden het simpel. Dit eerste contact is gratis."
  },
  {
    step: "2",
    title: "We kiezen de juiste aanpak",
    text: "Aan huis voor snelle hulp, of in atelier als het probleem meer tijd en testen vraagt. Ook dit advies is gratis."
  },
  {
    step: "3",
    title: "U krijgt een prijsinschatting",
    text: "Voor standaardwerk is die vast. Voor complexe gevallen spreken we duidelijk af wat het uurtarief is. De diagnose aan huis kan gratis zijn als u daarna klant wordt."
  },
  {
    step: "4",
    title: "We lossen het op",
    text: "Zodra extra werk of kosten nodig zijn, vragen we eerst uw toestemming."
  }
];

export const referralDiscounts = [
  {
    label: "1 doorverwezen klant",
    text: "10% korting op uw volgende service"
  },
  {
    label: "2 doorverwezen klanten",
    text: "15% korting op uw volgende service"
  },
  {
    label: "3 of meer doorverwezen klanten",
    text: "20% korting op uw volgende service"
  }
];

export const trustPoints = [
  "Ervaring in cybersecurity en praktische probleemoplossing",
  "Geschikt voor klanten die niet technisch zijn",
  "Duidelijke communicatie zonder onnodig jargon",
  "Transparante prijzen en toestemming bij extra kosten"
];

export const seoFaqCards = [
  {
    title: "PC is traag of loopt vast?",
    text: "Wij helpen bij een trage pc, opstartproblemen en algemene pc reparatie. Dit omvat ook grondige opschoning en fysieke stofreiniging."
  },
  {
    title: "Virus removal en malware verwijderen",
    text: "Heeft u een besmette computer? We voeren virusverwijdering en malware cleaning uit in atelier voor een veilige en grondige aanpak."
  },
  {
    title: "Data recovery / dataherstel",
    text: "Voor verloren bestanden, beschadigde systemen of externe schijven bieden we data recovery en dataherstel met duidelijke communicatie over slaagkansen."
  }
];

export const formatEuro = (amount) => `${String.fromCharCode(8364)}${amount}`;

export const buildSeoKeywords = () =>
  [
    "pc reparatie belgie",
    "pc repair belgium",
    "pc repare",
    "pc reparatie lede",
    "pc reparatie wichelen",
    "pc reparatie schellebelle",
    "pc reparatie serskamp",
    "pc reparatie aalst",
    "pc reparatie gent",
    "pc reparatie wetteren",
    "pc reparatie erpe-mere",
    "computerhulp oost-vlaanderen",
    "trage pc oplossen",
    "slow pc fix",
    "virus verwijderen pc",
    "virus removal",
    "malware verwijderen",
    "data recovery belgium",
    "dataherstel belgie",
    "computer opschonen",
    "pc dust cleaning",
    ...seoSearchPhrases
  ].join(", ");

export const buildStructuredData = ({ pageUrl, siteRootUrl, keywords }) => {
  const seoStructuredDescription = `Computerhulp in Belgie voor pc reparatie, virus verwijderen, trage pc oplossen, stofreiniging en dataherstel. Actief in regio Lede en omliggende gemeenten: ${nearbyLocations.join(", ")}. Ook gevonden op zoektermen zoals ${seoSearchPhrases.map((phrase) => `"${phrase}"`).join(", ")}. We ondersteunen klanten in Dutch en English.`;

  return [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ComputerRepair"],
      name: businessName,
      url: pageUrl,
      telephone: contact.phoneDisplay,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.streetAddress,
        postalCode: contact.postalCode,
        addressLocality: contact.locality,
        addressCountry: contact.country
      },
      areaServed: [
        { "@type": "Country", name: "Belgium" },
        { "@type": "AdministrativeArea", name: "East Flanders" },
        ...nearbyLocations.map((name) => ({
          "@type": "City",
          name
        }))
      ],
      availableLanguage: ["nl-BE", "en-BE"],
      description: seoStructuredDescription,
      keywords,
      serviceType: [
        "PC reparatie / PC repair",
        "Virus- en malwareverwijdering / virus and malware removal",
        "Dataherstel / data recovery",
        "PC opschoning en stofreiniging / PC cleanup and dust cleaning",
        "Probleemoplossing voor trage computers / slow PC troubleshooting"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: businessName,
      url: siteRootUrl,
      inLanguage: ["nl-BE", "en-BE"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Doen jullie pc reparatie voor trage computers in Belgie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. We helpen met trage pc's, opstartproblemen en algemene pc reparatie in Belgie."
          }
        },
        {
          "@type": "Question",
          name: "Bieden jullie virus removal en malware verwijdering aan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. We voeren virus- en malwareverwijdering uit met een duidelijke aanpak en prijsinschatting vooraf."
          }
        },
        {
          "@type": "Question",
          name: "Kunnen jullie data recovery of dataherstel doen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. We bieden data recovery en dataherstel voor pc's, beschadigde systemen en externe schijven."
          }
        }
      ]
    }
  ];
};
