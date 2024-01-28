const bcrypt = require('bcrypt');

// Password to hash
const password = 'Quest35#';

// Generate a salt with a cost factor of 10
const saltRounds = 10;

// Hash the password with the generated salt
bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    throw err;
  }

  console.log('Hashed Password:', hash);
});
