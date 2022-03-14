import db from '../../connection.js'

const response = await db.query(
  `INSERT INTO users(username, email)
    VALUES ('harry', 'harry.walker@hotmail.com');
       
    INSERT INTO place(user_id, lat, lng)
VALUES (1, 54.436951570145, -2.969584848090621),
       (1, 41.91228848917103, 12.51019969707996),
       (1, 44.82725979321712, -0.560874261904363),
       (1, 51.47273644130273, 0.14002693637736469),
       (1, 53.33586381370047, -2.3462119895986087);

INSERT INTO media(loc_id, img_url, title, place, notes)

VALUES (1, 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2208&q=80', 'Camping with friends', 'Lake District', 'Sat around the campfire on the first night, good thing Barry remembered his acoustic guitar!'),
       (1, 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', 'Tent Village', 'Campsite', 'It felt like our own little village!'),
       (1, 'https://images.unsplash.com/uploads/141148589884100082977/a816dbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', 'First day hike', 'Langdale', 'On the first day we took a long hike through Langdale'),
       (1, 'https://images.unsplash.com/photo-1588099631365-aacc6480737b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80', 'Drinks after', 'Old Dungeon Ghyll', 'Ended up in a lovely pub for a well deserved drink at the end of the day'),
       (1, 'https://images.unsplash.com/photo-1612727002301-bafce2446514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', 'On the way back', 'Langdale night', 'Walking back to the tents, it was such a lovely night to be outside.'),
       (2, 'https://images.unsplash.com/photo-1542820229-081e0c12af0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80', 'View from the streets', 'West of the City', 'You can make out the coliseum in the distance'),
       (2, 'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80', 'River Tiber', 'South of the city', 'A lovely day to rest on the river'),
       (2, 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80', 'Coliseum', 'Old Town', 'An amazing view of the coliseum, apparently its really old!'),
       (2, 'https://images.unsplash.com/photo-1491566102020-21838225c3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80', 'Inside Coliseum', 'Old Town', 'An amazing view of the coliseum, apparently its really old!'),
       (2, 'https://images.unsplash.com/photo-1569230516306-5a8cb5586399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Pizza', 'Old Town', 'Stopped off for pizza'),
       (2, 'https://images.unsplash.com/photo-1569416078500-3857b00616f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80', 'Small back street', 'City centre', 'These streets are full of little wonders');`
)

console.log(response)

db.end()
