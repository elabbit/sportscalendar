# Sports Calendar

## Introduction
Welcome to Sports Calendar! This app is a fully functional calendar where users can create multiple calendars and add events. User's can edit events, and can pick any color for their event tags that show up on the calendar.

## Technologies Used
- Front-End: React-Redux, JSX
- Back-End: Python, Flask-SQLAlchemy
- Database: PostgreSQL
- Hosting: Heroku

## Link to live site
https://sportscalendar-jade.herokuapp.com/

## Link to Wiki docs
https://github.com/elabbit/sportscalendar

## Features

### Creat New Calendars
When a user signs up, their first calendar will be automatically created for them. They can then create as many new calendars as they like. Each calendar must have a title, and it must me unique. A calendar may be set as "default" and will be the calendar shown upon login or refresh.

![Screen Shot 2022-08-11 at 9 59 18 AM](https://user-images.githubusercontent.com/100314162/184177496-52697cdb-5dc3-4a09-99da-6ef3596ac808.png)

![Screen Shot 2022-08-11 at 10 00 00 AM](https://user-images.githubusercontent.com/100314162/184177793-364e9b2a-4e22-445a-a00c-308c773901ca.png)

### Edit/Delete Calendars
Users may edit the title, description, and default option on any of their calendars. If there is no default selected, the first calendar created will be shown upon login or refresh. Users can delete their calendars, however they must always have one calendar and cannot delete their final calendar.

![Screen Shot 2022-08-11 at 10 04 42 AM](https://user-images.githubusercontent.com/100314162/184178629-4cb2d5b1-704a-45de-9073-b7670568fe87.png)


### Creat Events
Users can add events on any of their calendars by clicking on the calendar date. The start date will auto populate with the date that was clicked, however it can be changed. Each event must have a title. Events details will show up on the sidebar after being created and selected.

![Screen Shot 2022-08-11 at 10 02 00 AM](https://user-images.githubusercontent.com/100314162/184178106-b899638e-03eb-4212-a576-b9c6f23ff9f8.png)

![Screen Shot 2022-08-11 at 10 08 15 AM](https://user-images.githubusercontent.com/100314162/184179278-dd2d36c5-fe7b-4c37-80e1-4fb679b96084.png)

### Edit/Delete Events
Users can edit or delete any of their events by clicking on the small icons on the bottom right of the event details.

![Screen Shot 2022-08-11 at 10 09 05 AM](https://user-images.githubusercontent.com/100314162/184179648-b45046c9-b00f-4515-8669-59b5897680eb.png)

## Future features to implement
- Auto populate sports event data.
- Drag and drop for events
- Background image upload
- Google calendar or iCalendar sync

## Challenges Faced
Figuring out how to create a calendar was tough. Manipulating date and time required a lot of extra steps. The backend stores date objects in GMT so dealing with local timezone offsets and writing special functions to parse time were also a challenge.



# Project installation and setup

## Getting started
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on alpine-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

### Dev Containers (OPTIONAL for M1 Users)
The following instructions detail an *optional* development setup for M1 Mac users having issues with the `psycopg` package.

1. Make sure you have the [Microsoft Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed.
2. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your computer.
3. Clone the repository (only this branch)
   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```
4. Open the repo in VS Code.
5. Click "Open in Container" when VS Code prompts to open container in the bottom right hand corner.
6. **Be Patient!** The initial install will take a LONG time, it's building a container that has postgres preconfigured and even installing all your project dependencies. (For both flask and react!)

   **Note:** This will take much less time on future starts because everything will be cached.

7. Once everything is up, be sure to make a `.env` file based on `.env.example` in both the root directory and the *react-app* directory before running your app. You do not need a `DATABASE_URL` in the `.env` file if you are using this Docker setup for development - the URL is already set in the image (see `.devcontainer/Dockerfile` for the URL).

8. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

9. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

<br>

## Deploy to Heroku
This repo comes configured with Github Actions. When you push to your main branch, Github will automatically pull your code, package and push it to Heroku, and then release the new image and run db migrations.

1. Write your Dockerfile. In order for the Github action to work effectively, it must have a configured Dockerfile. Follow the comments found in this [Dockerfile](./Dockerfile) to write your own!

2. Create a new project on Heroku.

3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres".

4. Configure production environment variables. In your Heroku app settings -> config variables you should have two environment variables set:

   |    Key          |    Value    |
   | -------------   | ----------- |
   | `DATABASE_URL`  | Autogenerated when adding postgres to Heroku app |
   | `SECRET_KEY`    | Random string full of entropy |

5. Generate a Heroku OAuth token for your Github Action. To do so, log in to Heroku via your command line with `heroku login`. Once you are logged in, run `heroku authorizations:create`. Copy the GUID value for the Token key.

6. In your Github Actions Secrets you should have two environment variables set. You can set these variables via your Github repository settings -> secrets -> actions. Click "New respository secret" to create
each of the following variables:

   |    Key            |    Value    |
   | -------------     | ----------- |
   | `HEROKU_API_KEY`  | Heroku Oauth Token (from step 6)|
   | `HEROKU_APP_NAME` | Heroku app name    |

7. Push to your `main` branch! This will trigger the Github Action to build your Docker image and deploy your application to the Heroku container registry. Please note that the Github Action will automatically upgrade your production database with `flask db upgrade`. However, it will *not* automatically seed your database. You must manually seed your production database if/when you so choose (see step 8).

8. *Attention!* Please run this command *only if you wish to seed your production database*: `heroku run -a HEROKU_APP_NAME flask seed all`

## Helpful commands
|    Command            |    Purpose    |
| -------------         | ------------- |
| `pipenv shell`        | Open your terminal in the virtual environment and be able to run flask commands without a prefix |
| `pipenv run`          | Run a command from the context of the virtual environment without actually entering into it. You can use this as a prefix for flask commands  |
| `flask db upgrade`    | Check in with the database and run any needed migrations  |
| `flask db downgrade`  | Check in with the database and revert any needed migrations  |
| `flask seed all`      | Just a helpful syntax to run queries against the db to seed data. See the **app/seeds** folder for reference and more details |
| `heroku login -i`      | Authenticate your heroku-cli using the command line. Drop the -i to authenticate via the browser |
| `heroku authorizations:create` | Once authenticated, use this to generate an Oauth token |
| `heroku run -a <app name>` | Run a command from within the deployed container on Heroku |
