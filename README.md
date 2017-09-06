# NodeJS + Express + Pug Boilerplate
Node.js application boilerplate for rapid prototyping and development.


## About
An opinionated Node.JS boilerplate environment for quickly spinning up and deploying NodeJS runtimes.

Please note: This repo. does NOT include unit tests, bundlers, or any other tools used during the build process

This is for rapid prototyping and development. If requests come in I will consider adding simple 200/404 unit tests as well as a webpack config file, but for my needs this is sufficient.

## Usage
1. `git clone` this repo (or download as zip and exctract)
2. `npm install`
3. Modify to suit your needs

# Features

## Heroku
[Heroku](https://www.heroku.com) is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps. Our platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market.

The repo. includes a procfile which makes it easy to deploy to Heroku. See Usage for more details.

## Back-End
### Express
[Express](http://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Pug
This application boilerplate is registered with [Pug](https://pugjs.org/api/getting-started.html)(ex Jade) view engine.

### Compression
[Compression](https://www.npmjs.com/package/compression) Node.js compression middleware. Standard app.use() usage.


Base.pug has been extensively marked up for easy extending and including.
To rapidly add to the base.pug file, extend bodyContent (assumes pug knowledge)

## Front-End
### jQuery
[jQuery](https://jquery.com/) is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

Served via Google CDN with local fallback options in the /js/vendor folder

### Bootstrap 4
[Bootstrap](http://getbootstrap.com/) is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.

Served via cdnjs with local fallback in the /css/vendor folder

### Modernizr, Normalize.CSS, Console.Shim, etc.
Includes many popular tools for cross-browser compatibility. Feel free to add and remove as you wish, these are my most common GO-TO's

### Opinionated Analytics and SaaS Suggestions
GA, Mixpanel, Mailchimp, Clicky, Stripe, etc. etc. etc. (go look :P)

## Meta Content
### Sharing
Contains all the OG and Twitter sharing tags needed for rapid social sharing. Also includes meta_image.png (/images/sharing) which provides an opinionated-ly sized template for an og:image. Edit to your suiting.

### Icons
MS-App icons, Apple touch icons, Favicons, all templated and correctly sized/included in the view
(can be found at /images/icons)

# Scripts
### Usage
`node app` or `nodemon app` (for hot reloading)
### Deploy to Heroku
`heroku create` or `heroku create ______(#{appName})`

`git add .` or `git add --all`

`git commit -m "Heroku Push"`

`git push heroku master`
