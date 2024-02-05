DROP TABLE IF EXISTS users, database_roles, user_types CASCADE;

CREATE TABLE user_types (
    /*
    User types:
    01  Free user   
    02  basic user  $$ 39
    03  advanced user $$ 70
    04  Premium user  $$ 100
    */
    user_type_id INT AUTO_INCREMENT PRIMARY KEY, user_type_description TEXT, user_type_field1 INT, user_type_field2 INT
);

CREATE TABLE user_status (
    --  0 = not available, 1 = active
    statusID TINYINT PRIMARY KEY DEFAULT 1, status_desc TEXT
);

CREATE TABLE database_roles (
    role_id int AUTO_INCREMENT PRIMARY KEY, role_desc TEXT, role_delete INT, role_add INT
);

CREATE TABLE users (

    userID INT AUTO_INCREMENT PRIMARY KEY,
    user_username varchar(50),
    user_first_name VARCHAR(45),
    user_last_name VARCHAR(45),
    user_email varchar(150),
    user_hashed_pwd varchar(100),
    user_mailing_list tinyINT, -- on the mailing list or not
    user_last_login DATETIME, -- the last time they logged in 
    failed_login_attempts TINYINT, -- how many times a failed attempt / use with user_last_logon field
    user_type INT REFERENCES user_types (user_typeID), -- what type of user used for monetisation tracking
    user_database_role int REFERENCES database_roles (role_id), -- What can they do in the database
    user_creation_date DATETIME,
    user_status TINYINT -- Active/not active/ paused
);