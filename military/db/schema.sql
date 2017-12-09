drop table IF EXISTS helicopter_types CASCADE ;
drop table IF EXISTS  helicopters CASCADE ;
drop TABLE IF EXISTS  login_details CASCADE ;
drop table IF EXISTS  users CASCADE ;
DROP table IF EXISTS user_roles;

create table users (
  id bigserial PRIMARY KEY,
  first_name text NOT NULL ,
  last_name text NOT null,
  email text NOT NULL ,
  phone_number text,
  gender text,
  birth_date text,
  user_id text
);

create table login_details(
  id BIGSERIAL PRIMARY KEY,
  username text NOT NULL,
  password text NOT NULL,
  date_created TIMESTAMP WITH TIME ZONE,
  activation_key text,
  last_login TIMESTAMP WITH TIME ZONE
);

CREATE TABLE user_roles
(
    id BIGSERIAL PRIMARY KEY ,
    user_id BIGINT NOT NULL REFERENCES users(id),
    role    TEXT NOT NULL
);
alter table user_roles add constraint unique_pair unique(user_id, role);


create table helicopter_types(
  id BIGSERIAL PRIMARY KEY NOT NULL,
  name text NOT NULL
);

create table helicopters(
  id BIGSERIAL PRIMARY KEY,
  name text not null,
  type_id BIGINT REFERENCES helicopter_types(id) NOT NULL
);


----------------------------------------------------------------------
