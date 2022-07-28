--psql -U postgres (to login into postgres)
CREATE DATABASE jwtdb;

--\c jwtdb (to connect to db)

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL UNIQUE,
    user_password TEXT NOT NULL
);

--\dt (check if db was created)

INSERT INTO users (user_name,user_email,user_password) 
VALUES ('Saurabh','Saurabh@gmail.com','Saurabh');
INSERT INTO users (user_name,user_email,user_password) 
VALUES ('Saurabh1','Saurabh1@gmail.com','Saurabh1');
INSERT INTO users (user_name,user_email,user_password) 
VALUES ('Saurab2','Saurabh2@gmail.com','Saurabh2');

SELECT * FROM users;

-- \q (to quit db)

--heroku pg:psql