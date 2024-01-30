CREATE TABLE user_types { user_type_id INT AUTO INCREMENT PRIMARY KEY,
user_type_description TEXT,
user_type_field1 INT,
user_type_field2 INT };

CREATE TABLE database_roles (
    role_id int AUTO INCREMENT PRIMARY KEY,
    role_desc TEXT,
    role_delete INT,
    role_add INT,
);

CREATE TABLE users (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    user_username varchar(50),
    user_first_name VARCHAR(45),
    user_last_name VARCHAR(45),
    user_email varchar(150),
    user_hashed_pwd varchar(100),
    user_mailing_list tinyINT,
    user_last_login DATETIME,
    user_status TINYINT, -- Active/not active/ paused
    user_type INT REFERENCES user_types (user_typeID) user_database_role int REFERENCES database_roles (role_id),
    failed_login_attempts TINYINT
);