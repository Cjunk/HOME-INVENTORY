INSERT INTO users (user_username, user_first_name, user_last_name, user_email, user_hashed_pwd,user_status) VALUES ('usr', 'Jericho', 'Sharman', 'jsharman@hotmail.com.au', '$2b$10$dp2q23Bf0n/70EmQiKXoFedoBbPYa7sGFFQkMywFXBNtnx2uK.xVW',1);

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
INSERT INTO PRIME_LOCATION (userID,location_id, prime_location_name, prime_location_description) 
VALUES 
(2,1, 'Warehouse A', 'Primary storage location'),
(2,2, 'Storefront B', 'Retail location');

-- Inserting dummy data into LOCATION_MASTER
INSERT INTO LOCATION_MASTER (userID,location_id,location_name, location_photo, location_desc) 
VALUES 
(2,'LOC1','Location 1', 'photo_url_1', 'Description of Location 1'),
(2,'LOC2','Location 2', 'photo_url_2', 'Description of Location 2');
-- Inserting more dummy data into LOCATION_MASTER
INSERT INTO LOCATION_MASTER (userID,location_id,location_name, location_photo, location_desc) 
VALUES 
(2,'LOC3','Location 3', 'photo_url_3', 'Description of Location 3'),
(2,'LOC4','Location 4', 'photo_url_4', 'Description of Location 4');
-- Add more locations as needed

-- Inserting dummy data into ITEM_MASTER
INSERT INTO ITEM_MASTER (userID,item_number, item_name,alt_item_number, item_descr, item_barcode, item_weight, item_height, item_width, image_link_ID, item_type, manufacturer_ID, item_files) 
VALUES 
(2,1001, "ITEM001",2001, 'Item Description 1', '1234567890123', 100, 10, 10, 1, 1, 1, 'file1.pdf'),
(2,1002, "ITEM002",2002, 'Item Description 2', '1234567890124', 200, 20, 20, 2, 2, 2, 'file2.pdf'),
(2,1003, "ITEM003",2003, 'Item Description 3', '1234567890125', 150, 15, 15, 3, 1, 1, 'file3.pdf'),
(3,1004, "ITEM004",2004, 'Item Description 4', '1234567890126', 250, 25, 25, 4, 2, 2, 'file4.pdf');

-- Inserting dummy data into ITEM_IMAGES_URLS
INSERT INTO ITEM_IMAGES_URLS (userID,the_item, the_image_url) 
VALUES 
(2,1001, 'http://example.com/image1.jpg'),
(2,1002, 'http://example.com/image2.jpg');

INSERT INTO LOCATION_MASTER (userID, location_id, location_name, location_prime_location, location_photo, location_desc, location_date_last_used, pickpath, capacity, IsAvailable) VALUES (2, 'LOC0000000', 'Warehouse 56', 1, 'http://example.com/photo1.jpg', 'Storage facility', '2023-04-23', 1, 100, True);
INSERT INTO LOCATION_MASTER (userID, location_id, location_name, location_prime_location, location_photo, location_desc, location_date_last_used, pickpath, capacity, IsAvailable) VALUES (2, 'LOC0000001', 'Main Office 29', 2, 'http://example.com/photo2.jpg', 'Administrative building', '2022-02-22', 1, 200, False);
INSERT INTO LOCATION_MASTER (userID, location_id, location_name, location_prime_location, location_photo, location_desc, location_date_last_used, pickpath, capacity, IsAvailable) VALUES (2, 'LOC0000002', 'Branch Office 72', 3, 'http://example.com/photo3.jpg', 'Subsidiary office', '2022-12-20', 5, 150, True);
INSERT INTO LOCATION_MASTER (userID, location_id, location_name, location_prime_location, location_photo, location_desc, location_date_last_used, pickpath, capacity, IsAvailable) VALUES (2, 'LOC0000003', 'Store Room 99', 1, 'http://example.com/photo4.jpg', 'Inventory storage', '2023-08-04', 5, 300, True);
INSERT INTO LOCATION_MASTER (userID, location_id, location_name, location_prime_location, location_photo, location_desc, location_date_last_used, pickpath, capacity, IsAvailable) VALUES (2, 'LOC0000004', 'Garage 65', 2, 'http://example.com/photo1.jpg', 'Vehicle storage', '2022-03-31', 4, 250, True);
INSERT INTO LOCATION_MASTER (userID, location_id, location_name, location_prime_location, location_photo, location_desc, location_date_last_used, pickpath, capacity, IsAvailable) VALUES (3, 'LOC0000000', 'Warehouse 76', 1, 'http://example.com/photo1.jpg', 'Storage facility', '2022-11-12', 2, 100, False);
INSERT INTO LOCATION_MASTER (userID, location_id, location_name, location_prime_location, location_photo, location_desc, location_date_last_used, pickpath, capacity, IsAvailable) VALUES (4, 'LOC0000000', 'Warehouse 25', 1, 'http://example.com/photo1.jpg', 'Storage facility', '2023-07-04', 5, 100, True);

INSERT INTO ITEM_MASTER (userID, item_number, alt_item_number, item_name, item_descr, item_barcode, item_weight, item_height, item_width, image_link_ID, item_type, manufacturer_ID, item_files, item_CreateDate, item_LastModified, item_IsActive, item_uom) VALUES (2, 92856, 36473, 'Item45', 'Description for item Item45', '97212895239098626276', 4.51, 8.15, 14.58, 8, 1, 95, 'manual_92856.pdf', '2024-02-11 10:31:37', '2024-02-11 10:31:37', False, 'kg');
INSERT INTO ITEM_MASTER (userID, item_number, alt_item_number, item_name, item_descr, item_barcode, item_weight, item_height, item_width, image_link_ID, item_type, manufacturer_ID, item_files, item_CreateDate, item_LastModified, item_IsActive, item_uom) VALUES (2, 65493, 42691, 'Item30', 'Description for item Item30', '61011884701793955833', 6.25, 7.9, 9.73, 34, 8, 40, 'manual_65493.pdf', '2024-02-11 10:31:37', '2024-02-11 10:31:37', False, 'pcs');

INSERT INTO ITEM_MASTER (userID, item_number, alt_item_number, item_name, item_descr, item_barcode, item_weight, item_height, item_width, image_link_ID, item_type, manufacturer_ID, item_files, item_CreateDate, item_LastModified, item_IsActive, item_uom) VALUES (3, 59418, 41136, 'Item91', 'Description for item Item91', '79309134954547787172', 16.76, 8.0, 5.66, 86, 2, 91, 'manual_59418.pdf', '2024-02-11 10:31:37', '2024-02-11 10:31:37', True, 'pair');
INSERT INTO ITEM_MASTER (userID, item_number, alt_item_number, item_name, item_descr, item_barcode, item_weight, item_height, item_width, image_link_ID, item_type, manufacturer_ID, item_files, item_CreateDate, item_LastModified, item_IsActive, item_uom) VALUES (3, 93606, 84776, 'Item85', 'Description for item Item85', '82747787670334296495', 13.16, 18.52, 19.18, 86, 3, 74, 'manual_93606.pdf', '2024-02-11 10:31:37', '2024-02-11 10:31:37', False, 'pair');

INSERT INTO ITEM_MASTER (userID, item_number, alt_item_number, item_name, item_descr, item_barcode, item_weight, item_height, item_width, image_link_ID, item_type, manufacturer_ID, item_files, item_CreateDate, item_LastModified, item_IsActive, item_uom) VALUES (4, 75137, 33052, 'Item76', 'Description for item Item76', '66304191440970520537', 11.3, 10.52, 3.64, 66, 1, 67, 'manual_75137.pdf', '2024-02-11 10:31:37', '2024-02-11 10:31:37', True, 'kg');
INSERT INTO ITEM_MASTER (userID, item_number, alt_item_number, item_name, item_descr, item_barcode, item_weight, item_height, item_width, image_link_ID, item_type, manufacturer_ID, item_files, item_CreateDate, item_LastModified, item_IsActive, item_uom) VALUES (4, 90265, 96692, 'Item5', 'Description for item Item5', '17602416867825795479', 12.69, 7.59, 6.49, 41, 1, 79, 'manual_90265.pdf', '2024-02-11 10:31:37', '2024-02-11 10:31:37', False, 'set');

INSERT into SOH (userID,soh_item,soh_locationID,soh_qty) VALUES (2,65493,"LOC0000000",55);
INSERT into SOH (userID,soh_item,soh_locationID,soh_qty) VALUES (2,65493,"LOC0000002",54);



