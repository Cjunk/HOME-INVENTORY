INSERT INTO users (user_username, user_first_name, user_last_name, user_email, user_hashed_pwd,user_status) VALUES ('usr', 'Jericho', 'Sharman', 'jsharman@hotmail.com.au', '$2b$10$dp2q23Bf0n/70EmQiKXoFedoBbPYa7sGFFQkMywFXBNtnx2uK.xVW');

-- Inserting dummy data into users
INSERT INTO users (user_username, user_first_name, user_last_name, user_email, user_hashed_pwd,user_status) 
VALUES 
('johnDoe', 'John', 'Doe', 'johndoe@example.com', '$2b$10$dp2q23Bf0n/70EmQiKXoFedoBbPYa7sGFFQkMywFXBNtnx2uK.xVW',1),
('janeDoe', 'Jane', 'Doe', 'janedoe@example.com', '$2b$10$dp2q23Bf0n/70EmQiKXoFedoBbPYa7sGFFQkMywFXBNtnx2uK.xVW',1);
-- Inserting more dummy data into users
INSERT INTO users (user_username, user_first_name, user_last_name, user_email, user_hashed_pwd,user_status) 
VALUES 
('aliceSmith', 'Alice', 'Smith', 'alicesmith@example.com', '$2b$10$dp2q23Bf0n/70EmQiKXoFedoBbPYa7sGFFQkMywFXBNtnx2uK.xVW',1),
('bobJohnson', 'Bob', 'Johnson', 'bobjohnson@example.com', '$2b$10$dp2q23Bf0n/70EmQiKXoFedoBbPYa7sGFFQkMywFXBNtnx2uK.xVW',1),
('carolWhite', 'Carol', 'White', 'carolwhite@example.com', '$2b$10$dp2q23Bf0n/70EmQiKXoFedoBbPYa7sGFFQkMywFXBNtnx2uK.xVW',1);

-- Inserting dummy data into manufacturers
INSERT INTO manufacturers (manufacturer_name, manufacturer_description, manufacturer_number) 
VALUES 
('Acme Corp', 'Description of Acme Corp', 12345),
('Globex', 'Description of Globex', 67890);

-- Inserting dummy data into PRIME_LOCATION
INSERT INTO PRIME_LOCATION (location_id, prime_location_name, primt_location_description) 
VALUES 
(1, 'Warehouse A', 'Primary storage location'),
(2, 'Storefront B', 'Retail location');

-- Inserting dummy data into LOCATION_MASTER
INSERT INTO LOCATION_MASTER (location_name, location_photo, location_desc) 
VALUES 
('Location 1', 'photo_url_1', 'Description of Location 1'),
('Location 2', 'photo_url_2', 'Description of Location 2');
-- Inserting more dummy data into LOCATION_MASTER
INSERT INTO LOCATION_MASTER (location_name, location_photo, location_desc) 
VALUES 
('Location 3', 'photo_url_3', 'Description of Location 3'),
('Location 4', 'photo_url_4', 'Description of Location 4');
-- Add more locations as needed

-- Inserting dummy data into ITEM_MASTER
INSERT INTO ITEM_MASTER (item_number, alt_item_number, descr, barcode, item_weight, item_height, item_width, image_link_ID, item_type, manufacturer_ID, files) 
VALUES 
(1001, 2001, 'Item Description 1', '1234567890123', 100, 10, 10, 1, 1, 1, 'file1.pdf'),
(1002, 2002, 'Item Description 2', '1234567890124', 200, 20, 20, 2, 2, 2, 'file2.pdf');
-- Inserting more dummy data into ITEM_MASTER
INSERT INTO ITEM_MASTER (item_number, alt_item_number, descr, barcode, item_weight, item_height, item_width, image_link_ID, item_type, manufacturer_ID, files) 
VALUES 
(1003, 2003, 'Item Description 3', '1234567890125', 150, 15, 15, 3, 1, 1, 'file3.pdf'),
(1004, 2004, 'Item Description 4', '1234567890126', 250, 25, 25, 4, 2, 2, 'file4.pdf');
-- Add more items as needed


-- Inserting dummy data into SOH (Stock on Hand)
INSERT INTO SOH (soh_item, soh_location) 
VALUES 
(1001, 1),
(1002, 2);

-- Inserting dummy data into ITEM_IMAGES_URLS
INSERT INTO ITEM_IMAGES_URLS (the_item, the_image_url, the_image_description) 
VALUES 
(1001, 'http://example.com/image1.jpg', 'Image description 1'),
(1002, 'http://example.com/image2.jpg', 'Image description 2');
