import db from '../../connection.js'

const response = await db.query(`INSERT INTO users(username, email)
VALUES ('barryshitpeas', 'barry.shitpeas@hotmail.com'),
       ('dannyleafblower', 'danny.leafblower@haol.com'),
       ('mistymoo', 'misty.moo@woofwoof.com');

INSERT INTO location(user_id, location, lat, lng)
VALUES (1, 'Germany', 45.345, 76.245),
       (1, 'Germany', 42.345, 79.245),
       (2, 'Leafton', 23.345, 98.245),
       (3, 'Back Garden', 09.345, 73.245),
       (4, 'The Park', 25.345, 87.245);

INSERT INTO media(loc_id, img_url, title, notes)
VALUES (1, 'image url', 'Barrys Telly', 'A pic of Barrys Telly'),
       (1, 'image url', 'Barry in Germany', 'Big barry'),
       (2, 'image url', 'Blowing leaves', 'In the park'),
       (3, 'image url', 'Staring at cats', 'Through the fence'),
       (4, 'image url', 'Sniffed a bush', 'Good Bush'),
       (4, 'image url', 'Sniffed another bush', 'Another really good bush');`);

       console.log(response);

       db.end();