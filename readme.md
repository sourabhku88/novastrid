# Project Setup Instructions

I am using Cloud PostgreSQL because I don't have MySQL installed on my system. Follow the steps below to set up your project:

## 1. Modify the `knexfile.js`:

- The `knexfile.js` should be configured to use PostgreSQL. Ensure it contains the correct settings for connecting to your Cloud PostgreSQL database.

## 2. Set Up Your Database:

- Set up your Cloud PostgreSQL instance and create the necessary database.
- Ensure your connection string or credentials (host, user, password, etc.) are correctly entered in the `knexfile.js`.

## 3. Install Dependencies:

Run the following command to install the required packages:

```
npm install
```
## 4. Run the Development Server:
Once the dependencies are installed, start the development server with the following command:

```
npm run dev
```