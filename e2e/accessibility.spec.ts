import AxeBuilder from '@axe-core/playwright'
import { test, expect } from '@playwright/test'
import type { Page } from 'playwright'

test('index accessibility test', async ({ page }) => {
  await page.goto('/')
  const results = await new AxeBuilder({ page: page as Page }).analyze()
  expect(results.violations).toHaveLength(0)
})
