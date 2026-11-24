# Dramas & Daydreams

This is my personal blog about K-dramas. I made it to practice building a website with React.

## What the Blog Shows

- The name of the blog at the top
- A logo and a short description about the blog
- A list of articles, each with a title, a date and a short preview

## Screenshots

This is what my blog looks like:

![Blog homepage](screenshots/home.png)

This is the result of my tests. The green ticks mean they passed:

![Tests passing](screenshots/tests.png)

## How to Run the Project

You need Node.js installed on your computer. To check, type node -v in your terminal. If a version number shows up, you have it.

Step 1: Download a copy of the project (this is called cloning).

    git clone https://github.com/YOUR-USERNAME/Personal-blogsite.git

Step 2: Go into the project folder.

    cd Personal-blogsite

Step 3: Download the tools the project needs.

    npm install

Step 4: Start the project.

    npm run dev

Step 5: The terminal will show a link, usually <http://localhost:5173>. Open it in your browser to see the blog.

## How to Run the Tests

A test is a small piece of code that checks that something works. To run mine, type this in the terminal:

    npm test

My tests check that the blog name, article titles, dates and previews show up on the page.

## How the Project Is Built

In React, a website is built from small pieces called components. Each component does one job, like showing the header or one article. Components can pass information to each other. The information they pass is called props.

All my blog information (the name, logo, description and articles) is saved in one file called blog.js. The main component, App, reads that file and passes the information down to the other components.

This is how my components are connected:

    App
    ├── Header
    ├── About
    └── ArticleList
        └── Article

## The Components

App: the main component that holds everything together. It reads blog.js and gives each component the information it needs. Header, About and ArticleList sit inside it.

Header: shows the name of the blog as a big heading. It receives the blog name from App (a prop called name).

About: shows the logo and a short description. It receives the image and the text from App (props called image and about).

ArticleList: shows all the articles. It receives the list of posts from App (a prop called posts) and makes one Article for each post. Article sits inside it.

Article: shows one post with its title, date and preview. It receives them from ArticleList (props called title, date and preview).

## How to Change the Blog

Open the file src/blog.js. You can change the blog name, logo, description and articles there. To add a new article, copy one of the posts in the list, give it a new id number, and change its title, date and preview. When you save, the page updates by itself.

## Author

Terry Wanja
