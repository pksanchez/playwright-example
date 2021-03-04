# Playwright Example
Example node project displaying the capabilities of Playwright
This particular example mocks a GraphQL endpoint, allowing the [website](https://spacex.land) to be tested independently of backend/network dependencies

This is mostly designed to be run within a linux/macos environment

If you are running a Windows machine or just want a consistent environment, you may follow along with the Docker instructions

## Running Tests
### Prerequisites
[nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

and/or

[Docker](https://www.docker.com/products/docker-desktop)

### Local Installation
1. Clone this repository
1. Navigate to the root of the repository
1. Run the command `nvm use` to install the required node version
1. Run `npm install` to install all the required dependencies
1. Copy the contents of the `.env-sample` file to a `.env` file with `cp .env-sample .env`

From here, you should be able to [run tests](#test-execution)

### Running within Docker
1. Clone this repository
1. Navigate to the root of the repository
1. Run `docker build . -t playwright-example` (this may take some time on first run)
1. Run `docker run --env-file ./.env-sample -it playwright-example`

### Test Execution
Run `npm test`

This will run two sets of tests against Chromium, Firefox and Webkit browsers