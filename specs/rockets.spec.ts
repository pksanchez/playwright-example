import { it, expect } from "../util/mockedGql";
import { Header, Page } from "../pages/globalNavigation"

it('When the user clicks the Rockets tab, the user is brought to the Rockets page', async({ mockContext }) => {
    const page = await mockContext.newPage();
    await page.goto(process.env.BASE_URL)
    await page.click(Header.Rockets);
    await page.waitForSelector(Page.Loading, { state: 'hidden'})
    const sc = await page.screenshot({ fullPage: true });
    expect(sc).toMatchSnapshot(`Rockets.png`, { threshold: 1 })
})