# Blog Nest

Blog Nest is a MERN stack web application that allows authorized users to create and edit their posts. The application includes authentication using JWT, utilizes Quill.js for rich text editing, and is implemented as a Progressive Web App (PWA).

![Airbnb Screenshot](https://github.com/FALAK097/Airbnb-clone/raw/main/screenshots/landing_page.png)

## Features

- User Registration and Login: Users can register and log in to the application securely using JSON Web Tokens (JWT).
- Secure Authentication: Passwords are securely hashed before being stored in the database.
- Create and Edit Posts: Authorized users can create new posts with rich text content using Quill.js. They can also edit their own posts.
- PWA Functionality: The application is designed as a Progressive Web App, offering mobile access and add-to-home-screen feature and fast loading.
- Responsive Design: The UI is responsive and optimized for various screen sizes.

## Technologies Used

- Frontend:

  - React: JavaScript library for building user interfaces.
  - React Router DOM: Handles routing and navigation within the application.
  - Quill.js: Rich text editor for creating and editing posts.
  - Service Worker: Enables Progressive Web App functionality for add-to-home-screen feature, fast loading, and caching.
  - Fetch API: Used for making API requests to the backend.

- Backend:
  - Express.js: Web application framework.
  - MongoDB: NoSQL database for storing user information and posts.
  - Mongoose: ODM (Object Data Modeling) library for MongoDB.
  - JSON Web Tokens (JWT): Used for secure user authentication and authorization.
  - Bcrypt.js: Library for hashing and salting user passwords.
  - Nodemon: Used for automatic server restart during development.

## Getting Started

1. Clone the repository: `git clone https://github.com/FALAK097/Blog-Nest.git`
2. Navigate to the project directory: `cd Blog-Nest`
3. Install dependencies for both client and server: `cd client && yarn install && cd ../api && yarn install && cd ..`
4. Configure environment variables in `api/.env` for MongoDB connection, JWT secret, etc.
5. Start the server: `cd api && nodemon index.js`
6. Start the client: `cd client && yarn start`

## Contributing

Contributions are welcome! If you encounter any bugs, have feature suggestions, or would like to contribute to the project, please feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy Blogging with Blog Nest!
