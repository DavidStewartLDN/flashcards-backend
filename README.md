# Flashcards Backend

## Pre-installation

Make sure you have NodeJS and PostgreSQL installed on your machine.

## Installation and Setup

Set up database
```
psql -d postgres -U <your_username>
CREATE ROLE my_user WITH LOGIN PASSWORD 'root';
ALTER ROLE my_user CREATEDB;
\q
psql -d postgres -U my_user
CREATE DATABASE flashcards;
\c flashcards;
CREATE TABLE russian( id SERIAL PRIMARY KEY, english VARCHAR(200), native VARCHAR(200), latin_script VARCHAR(200) );
INSERT INTO russian (english, native, latin_script) VALUES ('hello', 'привет', 'privet');

CREATE TABLE mandarin( id SERIAL PRIMARY KEY, english VARCHAR(200), native VARCHAR(200), latin_script VARCHAR(200) );
INSERT INTO mandarin (english, native, latin_script) VALUES ('hello', '你好', 'Nǐ hǎo');

CREATE TABLE italian( id SERIAL PRIMARY KEY, english VARCHAR(200), native VARCHAR(200), latin_script VARCHAR(200) );
INSERT INTO italian (english, native) VALUES ('hello', 'ciao');
```
Install dependancies
```
npm install
```
Run server
```
node index.js
```