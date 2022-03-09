import db from '../../connection.js'

const response = await db.query(`INSERT INTO users(username, email)
VALUES ('barryshitpeas', 'barry.shitpeas@hotmail.com'),
       ('dannyleafblower', 'danny.leafblower@aol.com'),
       ('mistymoo', 'misty.moo@woofwoof.com');

INSERT INTO place(user_id, lat, lng)
VALUES ((SELECT user_id FROM users WHERE email = 'barry.shitpeas@hotmail.com'),51.545585399817966, -0.5494009347372437),
((SELECT user_id FROM users WHERE email = 'barry.shitpeas@hotmail.com'),51.396331784441024, -0.037297327028535915),
((SELECT user_id FROM users WHERE email = 'danny.leafblower@aol.com'),51.646968059980836, -0.3559174363750419),
((SELECT user_id FROM users WHERE email = 'misty.moo@woofwoof.com'),51.47273644130273, 0.14002693637736469),
((SELECT user_id FROM users WHERE email = 'misty.moo@woofwoof.com'),53.33586381370047, -2.3462119895986087);

INSERT INTO media(loc_id, img_url, title, place, notes)
VALUES ((SELECT loc_id FROM place WHERE user_id = (SELECT user_id FROM users WHERE email = 'barry.shitpeas@hotmail.com') AND lat = (SELECT lat FROM place WHERE lat = 51.545585399817966) AND lng = (SELECT lng FROM place WHERE lng = -0.5494009347372437)), 'https://media.timeout.com/images/105186767/750/422/image.jpg', 'Barrys Telly', 'London', 'A pic of Barrys Telly'),
((SELECT loc_id FROM place WHERE user_id = (SELECT user_id FROM users WHERE email = 'barry.shitpeas@hotmail.com') AND lat = (SELECT lat FROM place WHERE lat = 51.396331784441024) AND lng = (SELECT lng FROM place WHERE lng =   -0.037297327028535915)), 'https://media.timeout.com/images/105237777/image.jpg', 'Barrys Germany', 'Leafton', 'Big barry'),
((SELECT loc_id FROM place WHERE user_id = (SELECT user_id FROM users WHERE email = 'danny.leafblower@aol.com') AND lat = (SELECT lat FROM place WHERE lat = 51.646968059980836) AND lng = (SELECT lng FROM place WHERE lng =    -0.3559174363750419)), 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg', 'Blowing leaves', 'Back Garden', 'In the park'),
((SELECT loc_id FROM place WHERE user_id = (SELECT user_id FROM users WHERE email = 'misty.moo@woofwoof.com')  AND lat = (SELECT lat FROM place WHERE lat = 51.47273644130273) AND lng = (SELECT lng FROM place WHERE lng =   0.14002693637736469)), 'https://www.thetrainline.com/cms/media/1701/torre_pisa_pisa_tower.jpg?mode=crop&width=1080&height=1080&quality=70', 'Staring at cats', 'Back yard', 'Through the fence'),
((SELECT loc_id FROM place WHERE user_id = (SELECT user_id FROM users WHERE email = 'misty.moo@woofwoof.com')  AND lat = (SELECT lat FROM place WHERE lat = 53.33586381370047) AND lng = (SELECT lng FROM place WHERE lng =   -2.3462119895986087)), 'https://media.timeout.com/images/105489544/image.jpg', 'Sniffed a bush', 'The Park', 'Good Bush'),
((SELECT loc_id FROM place WHERE user_id = (SELECT user_id FROM users WHERE email = 'misty.moo@woofwoof.com') AND lat = (SELECT lat FROM place WHERE lat = 53.33586381370047) AND lng = (SELECT lng FROM place WHERE lng =   -2.3462119895986087)), 'https://www.fodors.com/wp-content/uploads/2019/11/HERO_Venice__FloatingCityBuilt_iStock-986940360.jpg', 'Sniffed another bush', 'Hullard Park', 'Another really good bush');`)

console.log(response)

db.end()

// const rework = await db.query(
//   `INSERT INTO users(username, email) VALUES ($1, $2); 
// INSERT INTO place(user_id, lat, lng) VALUES ((SELECT user_id FROM users WHERE email = $2), $3, $4);
// INSERT INTO media(loc_id, img_url, title, place, notes) VALUES (SELECT loc_id FROM place WHERE user_id = (SELECT user_id FROM users WHERE email = $2) AND lat = (SELECT lat FROM place WHERE lat = $3) AND lng = (SELECT lng FROM place WHERE lng = $4), $5, $6, $7, $8`,
//   [username, email, lat, lng, img_url, title, place, notes]
// )
