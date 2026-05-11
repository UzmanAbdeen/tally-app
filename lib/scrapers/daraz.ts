import { chromium } from 'playwright'

export async function scrapeDaraz(query: string) {

  const browser = await chromium.launch({
    headless: true
  })

  const page = await browser.newPage()

  await page.goto(
    `https://www.daraz.lk/catalog/?q=${query}`
  )

  await page.waitForTimeout(5000)

  const products = await page.evaluate(() => {

    const items = document.querySelectorAll(
      '[data-qa-locator="product-item"]'
    )

    return Array.from(items).slice(0, 6).map((item: any, index) => ({

      id: index + 1,

      title:
        item.querySelector('a')?.innerText || '',

      price:
        item.querySelector('.ooOxS')?.innerText || '',

      image:
        item.querySelector('img')?.src || '',

      url:
        item.querySelector('a')?.href || '',

      provider: 'Daraz'

    }))
  })

  await browser.close()

  return products
}