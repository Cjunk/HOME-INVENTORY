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