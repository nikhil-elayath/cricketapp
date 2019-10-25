# CricketAlpha

CricketAlpha is a web based application for cricket lovers.

A perfect place for cricket lovers to know all the matches, teams and players information of all possible formats based on their gender preference.

## Technology stack

Front-end: Reactjs

Middle-tier: Nodejs, Flask

Back-end: PostgreSQL

## Installation

### Reactjs and Nodejs packages

Open **client folder for react packages** installation on terminal and **server folder for nodejs packages** the run the follwing bash command on the respective terminal to install all the required package for react and nodejs.

```bash
npm install
```

### Python modules and Plotly setup

- sklearn
- flask
- flask_sqlalchemy
- plotly.graph_objs
- plotly.express
- chart_studio.plotly
- chart_studio.tools
- pandas
- numpy
- matplotlib.pyplot

1. Create an account on chart studio or login if you have already registered [Chart Studio - Login](https://chart-studio.plot.ly/Auth/login/?action=signin#/)
2. Now generate an api key from chart studio and copy it.
3. Add your credentials in python files as your username and api key.

## Data Loading

### Loading yaml files to postgres.

1.  Create folders yaml and json inside server > db-init. The folder structure should look like following.

        .
        |___ cricketalpha
            |___ client
            |___ server
                |___ yaml
                |___ json

2.  Add .yaml files to yaml folder.
3.  Run the following command on terminal inside db-init directory.
    ```bash
    node yamlToMongo.js
    ```
    This will convert the yaml files to json files inside json folder and then loads all the json files in mongodb.
4.  After completion of above script run the following script in the same directory.
    ```bash
    node mongoToPostgres.js
    ```
    This will load all the data from mongodb to postgres in cricketalpha database.

### Adding scraped data to database.

CSV and SQL files are present inside scrape folder to add data inside the cricketalpha database.

        .
        |___ cricketalpha
            |___ client
            |___ scrape
                |___ fixtures
                |   |___ upcomingFixtures.csv
                |___ news
                |   |___1.jpg
                |   :
                |   |___ news.csv
                |___ Players
                    |___ PlayerDetails.csv
                    |___ updatePlayerDetails.sql

1. Import **PlayerDetails.csv** file in dummy table.
2. Execute the sql file **updatePlayerDetails.sql** to add the player details in players table.
3. delete the dummy table now its not required.
4. Import **news.csv** file in news table.
5. Import **upcomingFixtures.csv** file in fixtures table.

### Add images to database

1.  Add image inside server > db-init. The folder structure should look like following.

        .
        |___ cricketalpha
            |___ client
            |___ server
                |___ image.png

2.  Add your image.png file address in img.js file.
3.  Run the following command on terminal inside db-init directory.
    ```bash
    node img.js
    ```
    This will convert the image files to base64 format and will store in cricketalpha database .

## Good to go

1. Run the following command on terminal inside server folder to start the server.
   ```bash
   npm start
   ```
2. Now execute the **matchStatsVisualization.ipynb** file to start the flask api server for match stats visualization.
3. Next run the following command on terminal inside client folder to start the client.
   ```bash
   npm start
   ```

## License

[Headstrait Softwares](https://headstrait.com)
