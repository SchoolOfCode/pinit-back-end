import db from '../../connection.js'

const response = await db.query(`INSERT INTO users(username, email)
VALUES ('barryshitpeas', 'barry.shitpeas@hotmail.com'),
       ('dannyleafblower', 'danny.leafblower@haol.com'),
       ('mistymoo', 'misty.moo@woofwoof.com');

INSERT INTO location(user_id, location, lat, lng)
VALUES (1, 'Germany', 52.520, 13.405),
       (1, 'Germany', 51.053, 13.737),
       (2, 'Leafton', 51.507, 0.127),
       (3, 'Back Garden', 53.481, 2.242),
       (4, 'The Park', 51.752, 1.257);

INSERT INTO media(loc_id, img_url, title, notes)
VALUES (1, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fexcitedcats.com%2Fcan-cats-see-tv%2F&psig=AOvVaw0vkAPrVWB6pcJA-kIMIKtX&ust=1646487373176000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiHlM_JrPYCFQAAAAAdAAAAABAD', 'Barrys Telly', 'A pic of Barrys Telly'),
       (1, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deutschland.de%2Fen%2Ftopic%2Flife%2Fmore-tourists-in-germany-than-ever-in-2018&psig=AOvVaw1ZOz_tJEHm_8HGSIRujgLX&ust=1646487419143000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD-pOfJrPYCFQAAAAAdAAAAABAD', 'Barry in Germany', 'Big barry'),
       (2, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Ffunny-dog-jack-russell-terrier-sitting-leaves-park-fall-day-animal-sweater-street-square-autumn-mood-dog-parson-terrier-plays-maple-red-yellow-leaves_20737220.htm&psig=AOvVaw1XBsNcOTqdQl8ceGZ7LoDL&ust=1646487478527000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDFw_3JrPYCFQAAAAAdAAAAABAe', 'Blowing leaves', 'In the park'),
       (3, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.co.uk%2Fnews%2Fbusiness-56362987&psig=AOvVaw2svA0dIcF47qsdH3PpJ0Gw&ust=1646487982632000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC-iu_LrPYCFQAAAAAdAAAAABAK', 'Staring at cats', 'Through the fence'),
       (4, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdog-sniffing-bush&psig=AOvVaw2CxfDSRWisyasgw37V_vGv&ust=1646487912904000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjp3czLrPYCFQAAAAAdAAAAABAD', 'Sniffed a bush', 'Good Bush'),
       (4, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Flifeandstyle%2F2021%2Fmay%2F15%2Fhe-grabbed-the-lead-and-said-give-me-the-dog-can-pet-detectives-stop-the-rise-in-animal-theft&psig=AOvVaw1vICSjLB4JmiRFfmgsUWJQ&ust=1646487708501000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCLhOrKrPYCFQAAAAAdAAAAABAE', 'Sniffed another bush', 'Another really good bush');`);

       console.log(response);

       db.end();


       