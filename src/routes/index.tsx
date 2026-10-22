import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";
import {
  About,
  Certifications,
  Education,
  Experience,
  Interests,
  Leadership,
  Skills,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Lynne Kitonyi Kyalo — Electrical & Electronic Engineer",
      },
      {
        name: "description",
        content:
          "Personal CV website of Lynne Kitonyi Kyalo, Electrical and Electronic Engineering graduate from the University of Nairobi. Experience in industrial asset care, ATM hardware maintenance and electrical installations.",
      },
      {
        property: "og:title",
        content: "Lynne Kitonyi Kyalo — Electrical & Electronic Engineer",
      },
      {
        property: "og:description",
        content: "Curious Mind. Grounded Soul. Engineering a Better Tomorrow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Leadership />
        <Skills />
        <Education />
        <Certifications />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
