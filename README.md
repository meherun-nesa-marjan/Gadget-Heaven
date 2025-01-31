# Gadget Heaven

Welcome to **Gadget Heaven**! Your ultimate destination for tech accessories, gadgets, and smart devices. Explore our collection of the latest accessories to take your tech experience to the next level.

## Live Website Link
You can visit the live version of the website here:https://gadgetheaven-app.netlify.app/


## Requirement Document Link
The detailed requirement document for this project is available at:
[**file:///D:/projects/B10-A8-gadget-heaven-main/B10-A8-gadget-heaven-main/Batch-10_Assignment-08.pdf**]()

## React Fundamentals Used in the Project

The following **React** fundamental concepts have been utilized in this project:

1. **JSX**: Used to create dynamic and reusable UI components.
2. **Components**: The app is built using functional components for modularity.
3. **State Management**: State is managed using `useState` and updated dynamically in the UI.
4. **Effect Hook (`useEffect`)**: Used to perform side effects such as fetching data from APIs or local storage when the component mounts.
5. **React Router**: Used to implement navigation and routing between different pages and components.
6. **Props**: Props are passed to child components for dynamic data rendering.
7. **Conditional Rendering**: Render components based on conditions (like checking if a cart has products or if a user is logged in).
8. **Forms**: Forms for handling user input (for reviews, sign-in forms, etc.).

## Data Handling and Management

For managing and handling data in this project, the following technologies have been used:

1. **Local Storage**: All cart and favorite items are stored and managed in the browser's local storage, ensuring persistence across page reloads.
   - Functions like `allCart()`, `addCart()`, `removeCart()`, and similar ones are used to interact with the local storage.
2. **State Management (React `useState`)**: React's `useState` is used for managing state within the components for data such as product details, total price, and modal visibility.

## Features of the Website

Here are **5 key features** of the **Gadget Heaven** project:

1. **Product Catalog**: Users can browse through a variety of gadgets and accessories, with detailed descriptions, specifications, and pricing.
   
2. **Search and Filters**: Implemented a search feature that allows users to filter products based on categories or specific keywords, making it easier to find the perfect accessory.
   
3. **Product Reviews**: Users can submit reviews for each product, and view ratings from other users, helping them make informed purchase decisions.
   
4. **Shopping Cart**: A fully functional shopping cart that allows users to add products, remove them, and view the total price. The cart persists even after the page reloads, thanks to local storage.
   
5. **Wishlist**: Users can add their favorite products to a wishlist for future purchases. The wishlist also persists across sessions using local storage.


## Technologies Used

- **React**: The core library for building the UI.
- **React Router**: For routing and page navigation.
- **Local Storage**: To persist cart and wishlist data.
- **React Icons**: For adding icons like the shopping cart and favorite buttons.
- **Tailwind CSS**: For fast and responsive styling.
