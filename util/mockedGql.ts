import { folio as base } from '@playwright/test';
import { BrowserContext } from 'playwright';
import { Mocks } from '../data/mocks'

if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const GQL = process.env.GRAPHQL_URL;

const fixtures = base.extend<{ mockContext: BrowserContext }>();

fixtures.mockContext.init(async ({ context }, runTest) => {
    context.route(GQL, async route => {
        const { operationName } = JSON.parse(await route.request().postData());
        const response = Mocks[operationName];
        route.fulfill({
            status: 200,
            body: JSON.stringify(response),
            headers: { 'Access-Control-Allow-Origin': '*' } // CORS error on nav
        })
    })
    runTest(context)
})

const folio = fixtures.build();

export const {
    it,
    expect
} = folio;