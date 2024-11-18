# Github Repositories Viewer
A React application that fetches repositories data and displays information about repositories from the GitHub API.

## Features
Fetches GitHub repository data using the GitHub API
Displays repositories in a paginated list (10 per page).
Search functionality to find repositories by name.
Detailed view for each repository, including
  -Name
  -Description
  -Language
  -Forks
  -Open issues
  -Watchers
  -Link to GitHub page.

## Tech Stack
 React Js (Vite), Typescript, Tailwind Css

 ## Installation
  git clone https://github.com/prashilak/github_repos.git
  cd github_repos
  npm install
  npm run dev

  Open your browser and navigate to http://localhost:3000

  Check .env file if it not available then create it
  with VITE_BASE_URL = 'https://api.github.com/'

  ## Testing
  We add some test cases for files like RepoList, ListItem, RepoDetails.
  to run test cases npm run test and check code coverage in coverage folder in
  root directory.