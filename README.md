# User Registration API

## Endpoint: `/users/register`

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) for authentication.


### HTTP Method
 `POST`

### Request Body:
The request body should be a JSON object with the following fields:

- `firstName` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastName` (string, required): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 5 characters long.

### Example Response:
The request body should be a JSON object with the following fields:

- `user` (object):
    - `fullName` (object):
        - `firstName` (string): The first name of the user. Must be at least 3 characters long.
        - `lastName` (string): The last name of the user. Must be at least 3 characters long.
    - `email` (string): The email address of the user. Must be a valid email format.
    - `password` (string): The password for the user. Must be at least 5 characters long.

- `token` (String): JWT Token

# User Registration API

## Endpoint: `/users/register`

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) for authentication.

### HTTP Method
 `POST`

### Request Body:
The request body should be a JSON object with the following fields:

- `firstName` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastName` (string, required): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 5 characters long.

### Example Response:
The response body will be a JSON object with the following fields:

- `user` (object):
    - `fullName` (object):
        - `firstName` (string): The first name of the user.
        - `lastName` (string): The last name of the user.
    - `email` (string): The email address of the user.
- `token` (string): JWT Token

