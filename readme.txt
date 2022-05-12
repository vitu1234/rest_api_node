npm init
npm i express nodemon dotenv mongoose bosy-parser cors bcryptjs jsonwebtoken

in package.json update the scripts key to: 
-> "scripts": {
    "start": "nodemon app.js"
  }


================
****************
dotenv
****************
used to avoid hard coding configs like db connections since JS is visible
================
 
====
****
body-parser 
****
used to convert req.body to JSON
====



======================
**********************
express-validator
**********************
used for validation
======================


=======================
***********************
bcryptjs
***********************
password harshing
=======================
