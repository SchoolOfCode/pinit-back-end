import db from '../../connection.js'

const response = await db.query(`INSERT INTO users(username, email)
VALUES ('barryshitpeas', 'barry.shitpeas@hotmail.com'),
       ('dannyleafblower', 'danny.leafblower@aol.com'),
       ('mistymoo', 'misty.moo@woofwoof.com');

INSERT INTO place(user_id, lat, lng)
VALUES (1, 51.545585399817966, -0.5494009347372437),
       (1, 51.396331784441024, -0.037297327028535915),
       (2, 51.646968059980836, -0.3559174363750419),
       (3, 51.47273644130273, 0.14002693637736469),
       (4, 53.33586381370047, -2.3462119895986087);

INSERT INTO media(loc_id, img_url, title, place, notes)
VALUES (1, 'https://media.timeout.com/images/105186767/750/422/image.jpg', 'Barrys Telly', 'London', 'A pic of Barrys Telly'),
       (1, 'https://media.timeout.com/images/105237777/image.jpg', 'Barry in Germany', 'Leafton', 'Big barry'),
       (2, 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg', 'Blowing leaves', 'Back Garden', 'In the park'),
       (3, 'https://www.thetrainline.com/cms/media/1701/torre_pisa_pisa_tower.jpg?mode=crop&width=1080&height=1080&quality=70', 'Staring at cats', 'Back yard', 'Through the fence'),
       (4, 'https://media.timeout.com/images/105489544/image.jpg', 'Sniffed a bush', 'The Park', 'Good Bush'),
       (4, 'https://www.fodors.com/wp-content/uploads/2019/11/HERO_Venice__FloatingCityBuilt_iStock-986940360.jpg', 'Sniffed another bush', 'Hullard Park', 'Another really good bush');`)

console.log(response)

db.end()
