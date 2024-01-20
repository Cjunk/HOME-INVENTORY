DROP TABLE IF EXISTS MANUFATURERS CASCADE;
DROP TABLE IF EXiSTS PURCHASE_HISTORY CASCADE;
DROP TABLE IF EXiSTS STORES CASCADE;
DROP TABLE IF EXiSTS LOCATION_MASTER CASCADE;
DROP TABLE IF EXiSTS SOH CASCADE;
DROP TABLE IF EXISTS ITEM_TYPES CASCADE;CREATE TABLE ITEM_TYPES (
    type_id INT PRIMARY KEY
);
DROP TABLE IF EXISTS PRIME_LOCATION CASCADE;

CREATE TABLE PRIME_LOCATION (
    location_id INT PRIMARY KEY,
    prime_location_name varchar(32),
    primt_location_description VARCHAR(120)
);

DROP TABLE IF EXiSTS ITEM_MASTER CASCADE;CREATE TABLE ITEM_MASTER (
    item_number INT PRIMARY KEY,
    alt_item_number INT,
    descr varchar(64),
    barcode varchar(20),
    item_weight INT,
    item_height INT,
    item_width INT,
    image_link_ID INT,
    item_type int REFERENCES ITEM_TYPES (type_id),
    manufacturer_ID INT
);

DROP TABLE IF EXISTS ITEM_IMAGES_URLS CASCADE;CREATE TABLE ITEM_IMAGES_URLS (
    the_item INT REFERENCES ITEM_MASTER(item_number),
    the_image_url varchar(112)
)