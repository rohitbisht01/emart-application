## Emart Application

This is a full-stack application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, Redux for state management, Tailwind CSS for styling, and PayPal for payment gateway integration.

## Table of Contents

- [Emart Application](#emart-application)
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)

## Introduction

Our Ecommerce Application provides a platform for users to buy and sell products online. It offers functionalities like user authentication, product browsing, cart management, and payment processing through PayPal. Whether you're a buyer looking for products or a seller wanting to showcase your merchandise, our application caters to both needs.

## Features

- **User authentication**: Users can sign up, log in, and log out securely.
- **Seller functionality**: Users can become sellers, list their products, and manage their inventory.
- **Product browsing**: Users can browse through various products listed on the platform
- **Cart management**: Users can add items to their cart, update quantities, and remove items as needed.
- **Checkout**: Seamless checkout process powered by PayPal for secure payment transactions.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/rohitbisht01/emart-application.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd emart-application
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**

   - Create a `.env` file in the backend directory.
   - Define the following environment variables:
     ```makefile
     PORT=8000
     MONGODB_URL=mongo-url
     JWT_SECRET_KEY=jwt-secret-key
     ACTIVATION_SECRET=activation-key (can be anything)
     SMTP_HOST=refer documentation
     SMTP_PORT=refer documentation
     SMTP_SERVICE=refer documentation
     SMTP_MAIL=your-email
     SMTP_PASSWORD=email-configuration-password
     ```

5. **Start the development server:**

   ```
   npm run start
   npm run dev
   ```
