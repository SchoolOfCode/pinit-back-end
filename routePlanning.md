# proposed routes/models:

## user info

### 1. Add a new user ✅

- on sign up, add a new user entry to the user table
- return userID

→ in users-sql.js line 25; adapt to only return user_id

### 2. get a user_id from the user table ✅

- on log in select user from table based on email
- return userID
- WHY?: user_id can then be stored in a "isLoggedIn" state, to access it where ever needed when navigating the app; this will allow us to be more flexible and re-use the user_id for subsequent requests. SQL queries can be simplified

→ needs to be created

## loc info

### 1. Retrieve all locations of a user ✅

- should run on app mount
- re-uses previously returned user_id for selection
- returns lat, lng and loc_id values

→ use to render pins & store loc_id in pin state (loc_id can then be used to select media with that id)

### 2. Add a new location & media for a user ✅

- should use user_id
- add lat/lng values to place table
- return lat/lng & loc_id

→ Automatically run another SQL query to add media

- use returned loc_id and add to media table

### 3.

## media

### 1. get media by loc_id ✅

- loc_id is sent by FE
- run fetch when clicked on marker
- Select everything

### 2. get all media for all loc_ids (of user) (for sidebar?)
- return accordeon values (title & place ) - maybe

### 3. post media
- post media with loc_id (onSubmit)


