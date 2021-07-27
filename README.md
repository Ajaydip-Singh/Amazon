# Amazon

This is a clone of Amazon that is built using React, React-Redux, and Express. The app runs on the node engine and uses both yarn and npm for managing
dependencies. It is currently hosted on Heroku [here](https://amazon-ecommerce-app.herokuapp.com/) (the app is using Heroku's free plan so it might take a 
while to load the page on the first request).

## Features:

### Normal user features

1. Users can sign in
2. Users can register
3. Update profile
4. Add items to cart
5. Delete items from cart
6. Place an order
7. Search for products
8. Filter products by category, price, and rating.
9. Sort order of products by latest, price, and rating.

### Admin user features:
1. Add products
2. Edit products
3. Edit orders (changing status of orders to paid, and delivered)
4. Edit users
5. Upload images for products

## Contribute:

This is an open source project and any meaningful pull requests are welcome. Please make sure to use [gitmoji](https://gitmoji.dev/) in your commit messages
and follow Udacity's style [guide](https://udacity.github.io/git-styleguide/#:~:text=Subjects%20should%20be%20no%20greater,change%3B%20not%20changed%20or%20changes.) for writing commits.

To get started, clone this repo. Start the backend express server using `npm start` from the root directory. Then `cd amazon-frontend` to move into the 
react frontend directory and run the command `yarn start` to start the react application.

For any contributions and adding of dependencies for backend use `npm` and for frontend use `yarn`. Please don't mix them up as it might lead to some
conflicts.





