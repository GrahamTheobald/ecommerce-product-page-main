# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./Screenshot%202022-11-06%20at%2014.37.01.png)

## My process

I mapped out my components taking careful consideration regarding how to layer them in order to make the website both mobile and desktop responsive.
I kept the cart state at the top so that it could be passed down into the cart through use of contexts.

### Built with

- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to make components respond to the screen width by setting up a resize event listener on the window and having that update a windowWidth state which determines whether requisite components are rendered. I needed to use this so that the gallery lightbox would close when the screen became narrow.
