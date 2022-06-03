# Requirements

- Node 16.x.x
- live-server npm package to run in local environment (`npm install -g live-server`). 

# Run application

- Download project
- Install dependencies: go to the package.json path an run `npm i`
- Run the application with live-server: `live-server --open=public`
- In the browser, go to http://127.0.0.1:8080/public/

# Development process
To work in the development process we need a sass compiler in real time, it will compile our SCSS styles to readable CSS:
- Open a new terminal and run: `npm run sass`
- Edit styles in /src/styles.scss and automatically they will be translated to /public/styles.css

# Proyect files
- **index.html:** main HTML document 
- **index.js:** main JS logic
- **components/player-card.js:** web component including card design
- **PlayerModel.js:** model to transform incoming JSON data (from API request) to UI data needed.
- **styles.scss:** main styles file
- **/public:** folder to be exposed by local server, include assests.