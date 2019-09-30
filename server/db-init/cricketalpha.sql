drop database if exists cricketalpha;
create database cricketalpha;

\c cricketalpha;

create table delivery
(
    match_id int,
    inning int,
    overs float,
    striker int,
    non_striker int,
    bowler int,
    batsman_run int,
    extra_id int,
    wicket_id int
);

create table extras
(
    extras_id serial,
    extras_type varchar(255),
    extras_run int
);

create table match
(
    match_id serial primary key,
    match_type varchar(255),
    toss_winner varchar(255),
    toss_decision varchar(255),
    team_one int,
    team_two int,
    outcome varchar(255),
    player_of_the_match int
    [],
    gender varchar
    (255),
    winner int,
    summary varchar
    (8000)
);

    create table match_date
    (
        match_id int,
        match_date date
    );

    create table match_player
    (
        match_id int,
        player_id int
    );

    create table match_team
    (
        match_id int,
        team_id int
    );

    create table match_type
    (
        match_type_id serial primary key,
        match_type varchar(255)
    );

    create table match_umpire
    (
        match_id int,
        umpire_id int
    );

    create table match_venue
    (
        match_id int,
        venue_id int
    );

    create table news
    (
        news_id serial,
        news_content varchar(8000),
        news_title varchar(500),
        news_date date
    );

    create table player
    (
        player_id serial primary key,
        player_name varchar(255),
        player_type varchar(255),
        batting_style varchar(255),
        bowling_style varchar(255),
        player_dob date,
        player_role varchar(255),
        debut_odi_match varchar(255),
        debut_test_match varchar(255),
        debut_t20_match varchar(255)
    );

    create table player_stats
    (
        player_id int,
        match_type_id int,
        stat_id int
    );

    create table stats
    (
        stat_id serial primary key,
        stat_name varchar(255),
        stat_value varchar(255)
    );

    create table team
    (
        team_id serial primary key,
        team_name varchar(255)
    );

    create table team_player
    (
        team_id int,
        player_id int
    );

    create table umpire
    (
        umpire_id serial primary key,
        umpire_name varchar(255)
    );

    create table users
    (
        user_id serial primary key,
        user_name varchar(255),
        user_email varchar(255),
        user_password varchar(255),
        isAdmin boolean
    );

    create table users_team
    (
        user_id int,
        team_id int
    );

    create table venue
    (
        venue_id serial,
        venue_name varchar(255),
        venue_city varchar(255)
    );

    create table wickets
    (
        wicket_id serial,
        wicket_type varchar(255),
        fielder_one int,
        fielder_two int,
        player_out int
    );
