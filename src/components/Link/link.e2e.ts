import { newE2EPage } from "@stencil/core/testing";

const renderLink = async (variant: "regular" | "external") => {
  const page = await newE2EPage();
  let content;
  if (variant === "regular") {
    content = `<usa-link href="https://usds.gov">Regular</usa-link>`;
  } else {
    content = `<usa-link href="https://usds.gov" ${variant}>${variant}<usa-link>`;
  }

  await page.setContent(content);
  await page.compareScreenshot(variant, { fullPage: false });
};

describe("usa-link", () => {
  it("Regular Link", () => renderLink("regular"));
  it("External Link", () => renderLink("external"));
});
