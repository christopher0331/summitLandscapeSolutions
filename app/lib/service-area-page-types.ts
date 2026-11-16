export type ExternalLink = {
  label: string;
  href: string;
};

export type Attraction = {
  name: string;
  blurb: string;
  href: string;
};

export type NearbyArea = {
  name: string;
  href: string;
  blurb: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type WhyCard = {
  title: string;
  body: string;
};

export type Consideration = {
  heading: string;
  body: string;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type ServiceCard = {
  title: string;
  href: string;
  body: string;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type FeaturedProject = {
  title: string;
  body: string;
  src: string;
  alt: string;
  caption: string;
};

export type ServiceAreaPageContent = {
  slug: string;
  name: string;
  servingLine: string;
  h1: string;
  title: string;
  description: string;
  mapQuery: string;
  introHeading: string;
  intro: [string, string];
  whyHeading: string;
  whyCards: [WhyCard, WhyCard, WhyCard, WhyCard];
  galleryHeading: string;
  galleryIntro: string;
  gallery: [GalleryPhoto, GalleryPhoto, GalleryPhoto];
  featured: FeaturedProject;
  considerationsHeading: string;
  considerations: Consideration[];
  estimatesHeading: string;
  estimatesBody: [string, string];
  servicesHeading: string;
  services: [ServiceCard, ServiceCard, ServiceCard];
  quoteHeading: string;
  quoteBody: string;
  processHeading: string;
  process: [ProcessStep, ProcessStep, ProcessStep, ProcessStep, ProcessStep];
  aboutIntro: string;
  attractions: Attraction[];
  localLivingIntro: string;
  localLivingLinks: ExternalLink[];
  nearbyHeading: string;
  nearby: NearbyArea[];
  finalCtaHeading: string;
  finalCtaBody: string;
  faqs: FaqItem[];
};
