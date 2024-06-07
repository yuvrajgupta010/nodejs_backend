# Node Shop

Node Shop is a shopping application where users can buy and sell products. This dynamic static site is built with a variety of powerful technologies and services to provide a seamless shopping experience.

## Technologies Used

- **ExpressJS**: Serves as the web application framework.
- **EJS**: Used as the template engine for server-side rendering.
- **AWS S3**: Provides file storage capabilities.
- **Stripe**: Integrates payment processing.
- **MongoDB**: Acts as the primary database.
- **PDFKit**: Used for invoice generation.

## Key Features
- **Security**: Helmet is used to secure HTTP headers.
- **Validation**: Express-validator ensures robust request validation.
- **Session Management**: Express-session with Redis for session management.
- **Template Engine**: EJS is used for server-side rendering.
- **PDF Generation**: PDFKit enables dynamic PDF creation.
- **Development Tools**: Nodemon for automatic server restarts during development.

## Key Features

- **Dynamic Static Site**: Combines the best of both static and dynamic web technologies.
- **Buy and Sell**: Allows users to list products for sale and make purchases.
- **File Storage**: Utilizes AWS S3 for storing product images and other files.
- **Payment Integration**: Processes payments securely with Stripe.
- **Database Management**: Uses MongoDB to manage product listings, user data, and transactions.
- **Invoice Generation**: Generates PDF invoices for purchases using PDFKit.

## Installation

To get started, clone the repository and install the dependencies:

```sh
git clone https://github.com/yuvrajgupta010/nodejs_backend.git
cd nodejs_backend
yarn install
```

## Setup
Add .env file with own keys:
```bash
# DB related
MONGO_DB_USERNAME=
MONGO_DB_PASSWORD=

# Email related
SENDGRID_API_KEY=
EMAIL_ADDRESS=

# Stripe related
STRIPE_SECERT_API_KEY=

#AWS related
AWS_ACCESS_KEY=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_BUCKET_NAME=
```

## Usage
To start the server in development mode:
```bash
npm run start:dev
```

To start the server in production mode:
```bash
npm start
```

## Health Check of server
After server start, just to check the start successfully 
Open up your browser and just go on localhost:8080/health-check
