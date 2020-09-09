# Problem Statement
To create a react web app which lets people compare their Github profiles. Let's call it GithubCompare.
It will be a single page application (SPA) with one input box and a button. Users can enter a github username in the input box and click on the “Compare” button. It will add the user in a list of cards and will show basic statistics of the user like number of followers, following, public repos, public gists.
You can put many Github usernames and it will show cards of each user ranked according to a certain criteria (say total number of followers or total number of public repos) or you can make your own algorithm with weight based calculation.

## DAY 1

Node js, npm and create react app were already installed.

* create-react-app hello-app

Once this stage has been completed, I've changed the directory with cd hello-app/ and enter npm start to check whether everything is working fine or not.

Inside the directory hello-app following packages were installed like index.css, App.css and App.js. Along with that package.json which contains all the useful information of 
the installed packages.

Created a sub-folder components inside src folder. Here created component folders like Button.js, Form.js, ProfileDetails.js and Lists.js.

This is how I've created the structure of my project on Day1.

### Day 2

Started exploring the Button.js file where user's intention is that the button should be clicked! when pressing on Search button.
Next I've installed axios using npm install axios. Axios is used to make HTTP requests i.e. we can fetch an api using HTTP getRequest.
Api was already provided to me and I've used that one to fetch important details like user's profile details, total no of followers, total
following, forks, watchers, user's own repositories and user's starred repositories.

Finally, replaced Search button with a Form.js to allow users to search GitHub by username.

On Day2, just worked on fetching detailed information from the api that is being provided to us using axios call where one can able to request any data from GitHub API and 
display that on their webpage.

### Day 3
Started exploring ProfileDetails.js file where I've pulled various data points of the profile such as Name, Bio, Location, total number of repos, followers, following, total
gists and some others.

Next worked on the list of own and starred repositories.

Finally applied some basic analysis on received information for repositories like for user's own repositories we'll count the number of repositories for each programming languages. Added some styling and adjusted the width and height of the UI to make it user friendly.


### Deployment
https://r1999-ron.github.io/githubCompare/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.




