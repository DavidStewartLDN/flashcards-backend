# Flashcards Backend

## Preinstallation

Make sure you have NodeJS and PostgreSQL installed on your machine.

## Installation and Setup

```
psql -d postgres -U <your_username>
CREATE ROLE my_user WITH LOGIN PASSWORD 'root';
ALTER ROLE my_user CREATEDB;
\q
psql -d postgres -U my_user
CREATE DATABASE flashcards;
\c flashcards;
```

