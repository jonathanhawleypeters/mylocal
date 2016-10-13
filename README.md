# myLocal

> A local listing service with want ads and reputation management

## Team

  - __Product Owner__: Yasser Mahmud
  - __Scrum Master__: Aman  Thapar
  - __Development Team Members__: Jonathan Hawley-Peters

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Requirements

- Node 6.5.x
- MongoDB 3.2+
- Jenkins 2.19

## Development
The project has been set up to run tests in watch mode so we can live our TDD dreams. 

### Installing Dependencies
To start, you need a .env file in the root directory with PORT, DBPATH and SECRET variables

### Tasks
From within the root directory:
```sh
npm install 
webpack --watch
grunt local
npm run test:watch
```
The webpack --watch command will constantly rebuild only the changed parts of the project :)
The grunt local command will run your dev server on localhost:3000
The npm run test:watch command will run your test every time it detects a change in the filesystem. You may want to turn off webpack watch.

### Roadmap

View the project roadmap [here](https://waffle.io/hrr18-trifecta/mylocal) on waffle.io

### Built With
- Node
- MongoDB
- React
- Redux
- Mocha
- ChaiJQuery

### APIs
- Google Maps
- Eventbrite
- Yelp

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines, or if you're feeling bold:

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

