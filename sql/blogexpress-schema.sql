create table authors
(
    id serial primary key,
    name varchar(100),
    email varchar(200)
);

create table posts
(
    id serial primary key,
    title varchar(200),
    content text,
    author_id integer references authors(id)
);

--Test Post --


INSERT INTO authors
    (id, name, email)
VALUES
    (
        1, 'Jamario', 'testespnfan@aol.com');

INSERT INTO posts
    (id, title, author_id, content)
VALUES
    (
        1, 'Test post', 1 , 'This is my test blog post');
