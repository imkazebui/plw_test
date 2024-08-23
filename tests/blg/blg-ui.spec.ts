import { test, expect } from "@playwright/test";

function getRandomNumber(max): number {
  return Math.floor(Math.random() * max) + 1;
}

const ids = [190, 188, 184];

test("test-ui-blg", async ({ page, context, browser }) => {
  const apiURL = process.env?.API_AUTH || "";
  const rootURL = process.env?.ROOT_URL || "";

  // const res = await context.request.fetch(apiURL).then((r) => r.json());

  // const { posts = [] } = res?.pageProps?.blogPost?.blogPostResponse;

  // const autoClick = async (anchors, timeout = 30000, callback = () => {}) => {
  //   for (let j = 0; j < anchors.length; j++) {
  //     const close = await page.locator(".chakra-modal__close-btn");
  //     if (close) {
  //       close.click();
  //     }
  //     anchors[j].click();
  //     await page.waitForTimeout(timeout);
  //     callback();
  //   }
  // };

  // if (!posts[0]) return;

  // let loop = getRandomNumber(10);
  // let loop = posts.length;

  // for (let i = 0; i < loop; i++) {
  //   // let ind = getRandomNumber(posts.length) - 1;
  //   let ind = i;

  //   await page.goto(`${rootURL}/${posts[ind]?.slug}`);
  //   const anchors = await page.locator("#toc > ul > a").all();

  //   await autoClick(anchors);
  //   const clEL = await page
  //     .locator(
  //       "#blog-comment-scroll-anchor > div:nth-child(1) > div:nth-child(2) > a"
  //     )
  //     .all();

  //   await autoClick(clEL, 5000, async () => {
  //     await page.bringToFront();
  //   });

  //   browser.close();

  // await page.waitForTimeout(3000);
  // await page.evaluate(() => {
  //   window.scrollTo({ behavior: "smooth", top: 100 });
  // });
  // }
});
