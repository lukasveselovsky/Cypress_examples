# Cypress Examples Repository
<div >
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
 	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/68279555/200387386-276c709f-380b-46cc-81fd-f292985927a8.png" alt="Cypress" title="Cypress"/></code>
</div>

This repository contains examples of end-to-end tests using Cypress for Trello clone web application.

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Setup](#setup)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

This repository houses automated tests implemented with Cypresss. The tests were created as part of learning Cypress technology using the Trello clone app created by Filip Hric which you can find here https://github.com/filiphric/trelloapp-vue-vite-ts.git. 
If you want to see how individual tests work on a real application you need to add this application to your project.

To install, simply clone Trello app project and

1. `npm install`
2. `npm start`

## Project Structure

My tests are located in Cypress/e2e

## Setup

To set up the project and run the tests locally, follow these steps:

1. Clone this repository to your local machine.
   ```sh
    git clone https://github.com/lukasveselovsky/Cypress_examples.git
   ```
2. Navigate to the project directory.
   ```sh
   cd Cypress_examples
   ```
3. Install dependencies.
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

## Usage

Once the project is set up, you can run the tests using the following command:

```sh
npx cypress run
```
or
```sh
npx cypress open 
```

This command will execute all the tests defined in the `e2e` directory or open Cypress UI mode.

## Contributing

Contributions to this project are welcome! If you find any issues or would like to add new features or tests, please feel free to open an issue or submit a pull request. 

## Contact

If you have any questions or suggestions regarding this project, feel free to contact the project owner at [lukas.veselovsky1@gmail.com](mailto:lukas.veselovsky1@gmail.com).
