# EksDeePanel
A Backend for the [EksDeeBot](https://github.com/Hoi15A/EksDeeBot)

## What does this do?
The Backend shows you alot of interesting infos about the usage and status about the [EksDeeBot](https://github.com/Hoi15A/EksDeeBot)

## Installation
### Requirements
Before you run this application yourself, make sure you have the following packages installed:
- NodeJS
- NPM
- [EksDeeBot](https://github.com/Hoi15A/EksDeeBot) (with it's database imported)

### Installing
After installing the dependencies/requirements just follow these steps:

1. Clone this repository using `git`
2. Run `npm install`
3. Enter the `config` directory and rename the `auth.json.example` file to `auth.example`
4. Edit your database credidentials in `auth.json`
5. Now go back to the root of the project and execute `npm run`
6. The webapp should run on [_localhost_, port 3000](http://localhost:3000).

*Sidenote*: If you do not want your TTY spammed by HTTP statuses, run the webapp like this instead:

`npm start > panel.log`
If you want to examine the status of the server, simply `cat` the `panel.log` file.

## License
### Copying / Redistribution / Modifying
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
