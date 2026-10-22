import { describe, expect, it } from "vitest";
import { certifications, contactInfo, education, experience } from "@/data/cv";
import { contactSchema } from "@/lib/contact";

const validContact = {
  name: "Jane Doe",
  email: "jane@example.com",
  subject: "Hello",
  message: "I would like to discuss an opportunity with you.",
};

describe("CV content", () => {
  it("records First Class Honours for the University of Nairobi degree", () => {
    const uni = education.find((item) => item.school === "University of Nairobi");
    expect(uni?.detail).toBe("First Class Honours");
    expect(uni?.credential).toContain("Electrical and Electronic Engineering");
  });

  it("uses the supplied contact details", () => {
    expect(contactInfo.email).toBe("lynnekitonyi@gmail.com");
    expect(contactInfo.phone).toBe("+254 793 598 994");
    expect(contactInfo.location).toBe("Nairobi, Kenya");
  });

  it("lists the Taifa Teule Leadership Experience certification from 2026", () => {
    expect(
      certifications.some(
        (item) => item.title.includes("Taifa Teule") && item.year === "2026",
      ),
    ).toBe(true);
  });

  it("places the EABL asset care internship in 2025", () => {
    expect(
      experience.some(
        (item) => item.org.includes("East African Breweries") && item.period.includes("2025"),
      ),
    ).toBe(true);
  });
});

describe("contact form validation", () => {
  it("accepts a valid message", () => {
    expect(contactSchema.safeParse(validContact).success).toBe(true);
  });

  it("rejects an invalid email address", () => {
    expect(
      contactSchema.safeParse({ ...validContact, email: "not-an-email" }).success,
    ).toBe(false);
  });

  it("rejects messages longer than 1000 characters", () => {
    expect(
      contactSchema.safeParse({ ...validContact, message: "x".repeat(1001) }).success,
    ).toBe(false);
  });

  it("rejects a too-short message", () => {
    expect(contactSchema.safeParse({ ...validContact, message: "hi" }).success).toBe(false);
  });
});
