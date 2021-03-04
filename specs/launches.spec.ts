import { it, expect } from "../util/mockedGql";
import { Header, Page } from "../pages/globalNavigation"
import { Mocks } from "../data/mocks"

const FIRST_LAUNCH = Mocks.getLaunches.data.launchesPastResult.data[0].mission_name;

it('When the user clicks the Launches tab, the user is brought to the launches page with the most recent launches', async({ mockContext }) => {
    const page = await mockContext.newPage();
    await page.goto(process.env.BASE_URL)
    await page.click(Header.Launches);
    await page.waitForSelector(Page.Loading, { state: 'hidden'})
    expect(await page.isVisible(`text=${FIRST_LAUNCH}`)).toBeTruthy()
})