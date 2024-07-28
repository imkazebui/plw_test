import { test, expect } from "@playwright/test";

function getRandomNumber(max): number {
  return Math.floor(Math.random() * max) + 1;
}

test("test", async ({ page, context }) => {
  const apiURL = process.env?.API_AUTH || "";
  const rootURL = process.env?.ROOT_URL || "";

  const res = await context.request.fetch(apiURL).then((r) => r.json());

  const { posts = [] } = res?.pageProps?.blogPost?.blogPostResponse;

  if (!posts[0]) return;

  const loop = getRandomNumber(10);

  for (let i = 0; i <= loop; i++) {
    let ind = getRandomNumber(posts.length) - 1;
    await page.goto(`${rootURL}/${posts[ind]?.slug}`);
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
      window.scrollTo({
        top: document.body.scrollHeight / 2,
        behavior: "smooth",
      });
    });
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
      window.scrollTo({
        top: document.body.scrollHeight - 500,
        behavior: "smooth",
      });
    });

    const clEL = page.locator(
      "#blog-comment-scroll-anchor > div:nth-child(1) > div:nth-child(1)"
    );

    clEL.click();

    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      window.scrollTo({
        behavior: "smooth",
        top: document.body.scrollHeight / 2,
      });
    });
    await page.waitForTimeout(3000);
    await page.evaluate(() => {
      window.scrollTo({ behavior: "smooth", top: 100 });
    });
    await page.waitForTimeout(20000);
  }
});
