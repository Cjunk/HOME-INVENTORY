/*  The HOME INVENTORY DATABASE SCHEMA
    Designed & Created  by Jericho Sharman 01/2024
*/
DROP TABLE IF EXISTS PURCHASE_HISTORY,STORES,LOCATION_MASTER,SOH,ITEM_TYPES,PRIME_LOCATION,ITEM_MASTER,MANUFACTURERS,ITEM_IMAGES_URLS CASCADE;

CREATE TABLE ITEM_TYPES (type_id INT PRIMARY KEY);
CREATE TABLE manufacturers (
	manufacturer_ID INT AUTO_INCREMENT PRIMARY KEY,
    manufacturer_name VARCHAR(50),
    manufacturer_description VARCHAR(100),
    manufacturer_number INT  /*  random field, use for anything */
);
CREATE TABLE PRIME_LOCATION (
    location_id INT PRIMARY KEY,
    prime_location_name varchar(32),
    primt_location_description VARCHAR(120)
);
CREATE TABLE LOCATION_MASTER(
	location_id INT AUTO_INCREMENT PRIMARY KEY,
    location_name VARCHAR(25),
    location_photo varchar(150),
    location_desc varchar(150)
);
CREATE TABLE ITEM_MASTER (
    item_number INT PRIMARY KEY,
    alt_item_number INT,
    descr varchar(64),
    barcode varchar(20),
    item_weight INT,
    item_height INT,
    item_width INT,
    image_link_ID INT,
    item_type int REFERENCES ITEM_TYPES (type_id),
    manufacturer_ID INT REFERENCES manufacturers(man_id),
    files varchar(20) /*here you will keep file names such as PDF files etc.    */
);
CREATE TABLE SOH (
	soh_id INT AUTO_INCREMENT PRIMARY KEY,
    soh_item INT REFERENCES ITEM_MASTER(item_number),
    soh_location INT REFERENCES LOCATION_MASTER(location_id)
)
/*The image table.   */

CREATE TABLE ITEM_IMAGES_URLS (
    the_item INT REFERENCES ITEM_MASTER(item_number), /*The item unique identifier (PRIMARY KEY)    */
    the_image_url varchar(112),  /* A web link to the image. Consider using online storage perhaps Cloudinary or similiar*/
    the_image_description varchar(150)
)