import { test, expect } from "@playwright/test";
const fs = require("fs").promises;
const path = require("path");

// Function to read a number from a file
async function readNumberFromFile(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  return parseInt(data, 10);
}

// Function to write a new number to a file
async function writeNumberToFile(filePath, number) {
  await fs.writeFile(filePath, number.toString(), "utf-8");
}

// const ids = [190, 188, 184];
const ids = [184];

test("test-api-blg", async ({ page, context, browser }) => {
  const apiURL = process.env?.API_V || "";
  const clHost = process.env?.CL_HOST || "";
  const agent = process.env?.AGENT || "";
  const filePath = path.join(__dirname, "number.txt");

  // Read the current number from the file
  const currentNumber = await readNumberFromFile(filePath);

  const v = currentNumber + 10;

  for (let i = currentNumber; i < v; i++) {
    for (let j = 0; j < ids.length; j++) {
      const data = await context.request
        .fetch(apiURL, {
          method: "POST",
          data: JSON.stringify({ blogId: ids[j] }),
          headers: {
            client: i.toString(),
            "Content-Type": "application/json",
            Accept: "*/*",
            "Cache-Control": "no-cache",
            Host: clHost,
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
            "User-Agent": agent,
          },
        })
        .then((r) => r.json);
    }
  }

  // Write the new number to the file
  await writeNumberToFile(filePath, v);
});
