drop database if exists cricketalpha;
create database cricketalpha;

\c cricketalpha;



create table users (
    user_id serial primary key,
    user_name varchar (30) not null,
    user_email varchar (30) not null,
    user_password varchar (300),
    isadmin boolean
    
); 