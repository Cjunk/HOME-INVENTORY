/*  The HOME INVENTORY DATABASE SCHEMA
 Designed & Created  by Jericho Sharman 01/2024
 */
DROP TABLE IF EXISTS PURCHASE_HISTORY,
STORES,
LOCATION_MASTER,
SOH,
ITEM_TYPES,
PRIME_LOCATION,
ITEM_MASTER,
MANUFACTURERS,
ITEM_IMAGES_URLS,
users,
categories CASCADE;

DROP TABLE IF EXISTS ITEM_TYPES,USER_TYPES,
TRANSACTION_HISTORY,
transaction_types CASCADE;



CREATE TABLE ITEM_TYPES (
    userID INT REFERENCES usrs(userID),
    type_id INT PRIMARY KEY,
    type_name VARCHAR(20),
    type_description VARCHAR(150)
);


CREATE TABLE transaction_types (
    userID INT REFERENCES usrs(userID),
    tran_typeID INT AUTO_INCREMENT PRIMARY KEY,
    tran_name VARCHAR(20),
    tran_descr VARCHAR(45)
);
CREATE TABLE TRANSACTION_HISTORY (
    userID INT REFERENCES usrs(userID),
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_type INT REFERENCES transaction_types(tran_typeID),
    tran_date DATETIME,
    item_id INT REFERENCES ITEM_MASTER(item_number),
    tran_qty INT
);

CREATE TABLE categories (
    userID INT REFERENCES usrs(userID),
    idcategories int AUTO_INCREMENT,
    cat_name varchar(45) DEFAULT NULL,
    cat_description varchar(200) DEFAULT NULL,
    categoriescol varchar(45) DEFAULT NULL,
    PRIMARY KEY (`idcategories`),
    UNIQUE KEY `idcategories_UNIQUE` (`idcategories`)
);



CREATE TABLE manufacturers (
    userID INT REFERENCES usrs(userID),
    manufacturer_ID INT AUTO_INCREMENT PRIMARY KEY,
    manufacturer_name VARCHAR(50),
    manufacturer_description TEXT,
    manufacturer_number INT
    /*  random field, use for anything */
);

CREATE TABLE PRIME_LOCATION (
    userID INT REFERENCES usrs(userID),
    location_id INT PRIMARY KEY,
    prime_location_name TEXT,
    primt_location_description TEXT
);

CREATE TABLE LOCATION_MASTER(
    userID INT REFERENCES users(userID),
    location_id INT AUTO_INCREMENT PRIMARY KEY,
    location_name VARCHAR(25),
    location_photo varchar(200),
    location_desc TEXT,
    location_date_last_used DATE,
    pickpath INT,
    capacity INT,
    IsAvailable BOOLEAN DEFAULT true
);

CREATE TABLE ITEM_MASTER (
    userID INT REFERENCES users(userID),
    item_number INT PRIMARY KEY,
    alt_item_number INT,
    descr TEXT,
    barcode varchar(20),
    item_weight DECIMAL(10, 2),
    item_height DECIMAL(10, 2),
    item_width DECIMAL(10, 2),
    image_link_ID INT,
    item_type int REFERENCES ITEM_TYPES (type_id),
    manufacturer_ID INT REFERENCES manufacturers(manufacturer_ID),
    files varchar(20),
    CreateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LastModified TIMESTAMP,
    IsActive BOOLEAN DEFAULT true,
    /*here you will keep file names such as PDF files etc.    */
    uom VARCHAR(20)
);

CREATE TABLE ITEM_IMAGES_URLS (
    userID INT REFERENCES users(userID),
    the_item INT REFERENCES ITEM_MASTER(item_number),
    /*The item unique identifier (PRIMARY KEY)    */
    the_image_url varchar(112),
    /* A web link to the image. Consider using online storage perhaps Cloudinary or similiar*/
    the_image_description varchar(150)
);

CREATE TABLE SOH (
    userID INT REFERENCES users(userID),
    soh_id INT AUTO_INCREMENT PRIMARY KEY,
    soh_item INT REFERENCES ITEM_MASTER(item_number),
    soh_location INT REFERENCES LOCATION_MASTER(location_id),
    soh_qty INT,
    soh_date_added DATETIME,
    soh_last_updated DATETIME
);

/*The image table.   */
- - Create a trigger to record INSERTs in SOH table into TRANSACTION_HISTORY DELIMITER $ $ CREATE TRIGGER after_soh_insert
AFTER
INSERT
    ON SOH FOR EACH ROW BEGIN
INSERT INTO
    TRANSACTION_HISTORY (
        userID,
        transaction_type,
        tran_date,
        item_id,
        tran_qty
    )
VALUES
    (1, 1, NOW(), NEW.soh_item, NEW.soh_qty);

- - Assuming transaction_type ID for inserts is 1
END;

$ $ DELIMITER;

- - Create a trigger to record DELETEs in SOH table into TRANSACTION_HISTORY DELIMITER $ $ CREATE TRIGGER after_soh_delete
AFTER
    DELETE ON SOH FOR EACH ROW BEGIN
INSERT INTO
    TRANSACTION_HISTORY (
        userID,
        transaction_type,
        tran_date,
        item_id,
        tran_qty
    )
VALUES
    (1, 2, NOW(), OLD.soh_item, - OLD.soh_qty);

- - Assuming transaction_type ID for deletes is 2
END;
<<<<<<< HEAD
$$
DELIMITER ;
CREATE VIEW View_AllUserSOH AS
SELECT 
    u.userID,
    u.user_username,
    im.item_number,
    im.descr AS item_description,
    im.barcode,
    im.item_weight,
    im.item_height,
    im.item_width,
    im.uom AS unit_of_measure,
    m.manufacturer_name,
    lm.location_name,
    lm.location_desc,
    soh.soh_qty AS quantity_on_hand,
    soh.soh_date_added,
    soh.soh_last_updated
FROM 
    users u
INNER JOIN 
    SOH soh ON u.userID = soh.userID
INNER JOIN 
    ITEM_MASTER im ON soh.soh_item = im.item_number
LEFT JOIN 
    manufacturers m ON im.manufacturer_ID = m.manufacturer_ID
LEFT JOIN 
    LOCATION_MASTER lm ON soh.soh_location = lm.location_id;


=======

$ $ DELIMITER;

CREATE VIEW user_specific_soh AS
SELECT
    s.userID,
    s.soh_item,
    i.descr as item_description,
    s.soh_location,
    s.soh_qty,
    s.soh_date_added,
    s.soh_last_updated
FROM
    SOH s
    JOIN ITEM_MASTER i ON s.soh_item = i.item_number
WHERE
    s.userID = i.userID;

