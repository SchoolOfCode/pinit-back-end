import db from '../../connection.js'

const response = await db.query(
  `INSERT INTO users(username, email)
    VALUES ('harry', 'harry.walker@hotmail.com'),
    ('dannyleafblower', 'danny.leafblower@aol.com'),
    ('mistymoo', 'misty.moo@woofwoof.com');
       
    INSERT INTO place(user_id, lat, lng)
VALUES (1, 54.436951570145, -2.969584848090621),
       (1, 51.396331784441024, -0.037297327028535915),
       (1, 51.646968059980836, -0.3559174363750419),
       (1, 51.47273644130273, 0.14002693637736469),
       (1, 53.33586381370047, -2.3462119895986087);

INSERT INTO media(loc_id, img_url, title, place, notes)
VALUES (1, 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2208&q=80', 'Camping with friends', 'Lake District', 'Sat around the campfire on the first night, good thing Barry remembered his acoustic guitar!'),
       (1, 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', 'Tent Village', 'Campsite', 'It felt like our own little village!'),
       (1, 'https://images.unsplash.com/uploads/141148589884100082977/a816dbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', 'First day hike', 'Langdale', 'On the first day we took a long hike through Langdale'),
       (1, 'https://images.unsplash.com/photo-1588099631365-aacc6480737b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80', 'Drinks after', 'Old Dungeon Ghyll', 'Ended up in a lovely pub for a well deserved drink at the end of the day'),
       (1, 'https://images.unsplash.com/photo-1612727002301-bafce2446514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', 'On the way back', 'Langdale night', 'Walking back to the tents, it was such a lovely night to be outside.'),
       (4, 'https://www.fodors.com/wp-content/uploads/2019/11/HERO_Venice__FloatingCityBuilt_iStock-986940360.jpg', 'Sniffed another bush', 'Hullard Park', 'Another really good bush');`
)

console.log(response)

db.end()
