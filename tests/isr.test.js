import { test, expect } from "@playwright/test";

test.describe("ISR functionality", () => {
  test("should fetch updated content after revalidation", async ({ page }) => {
    await page.goto("/isr-page"); // replace with your actual ISR route

    const initialContent = await page.textContent("#timestamp");
    console.log("Initial:", initialContent);

    await page.waitForTimeout(6000); // wait > revalidate interval

    await page.reload();

    const updatedContent = await page.textContent("#timestamp");
    console.log("Updated:", updatedContent);

    expect(initialContent).not.toBe(updatedContent);
  });
});
