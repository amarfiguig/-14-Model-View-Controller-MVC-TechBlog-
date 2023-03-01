const router = require('express').Router(); // Import the Router method from Express
const { User, Post, Comment, Vote } = require('../../models'); // Import the models we need for this router

// get all users
router.get('/', (req, res) => {
  User.findAll({ // Find all Users
    attributes: { exclude: ['password'] } // Exclude the password attribute from the result
  })
    .then(UserData => res.json(UserData)) // Send the result as JSON
    .catch(err => {
      console.log(err); // Log any errors
      res.status(500).json(err); // Send the error status and message as JSON
    });
});

router.get('/:id', (req, res) => {
  User.findOne({ // Find one User
    attributes: { exclude: ['password'] }, // Exclude the password attribute from the result
    where: {
      id: req.params.id // Find the User with the matching ID
    },
    include: [ // Include related models
      {
        model: Post, // Include Posts model
        attributes: ['id', 'title', 'post_url', 'created_at'] // Include specific attributes
      },
      {
        model: Comment, // Include Comments model
        attributes: ['id', 'comment_text', 'created_at'], // Include specific attributes
        include: { // Include related model
          model: Post, // Include Posts model
          attributes: ['title'] // Include specific attribute
        }
      },
      {
        model: Post, // Include Posts model
        attributes: ['title'], // Include specific attribute
        through: Vote, // Include through model
        as: 'voted_posts' // Use the alias 'voted_posts'
      }
    ]
  })
    .then(UserData => {
      if (!UserData) { // If no User is found, send an error message
        res.status(404).json({ message: 'No user found with the provided ID.' });
        return;
      }
      res.json(UserData); // Send the result as JSON
    })
    .catch(err => {
      console.log(err); // Log any errors
      res.status(500).json(err); // Send the error status and message as JSON
    });
});

router.post('/', (req, res) => {
  User.create({ // Create a new User
    username: req.body.username, // Get the username from the request body
    email: req.body.email, // Get the email from the request body
    password: req.body.password // Get the password from the request body
  })
    .then(UserData => {
      req.session.save(() => { // Save the session
        req.session.user_id = UserData.id; // Set the user ID session variable
        req.session.username = UserData.username; // Set the username session variable
        req.session.loggedIn = true; // Set the loggedIn session variable
    
        res.json(UserData); // Send the result as JSON
      });
    })
});

router.post('/login', (req, res) => {
  User.findOne({ // Find one User
    where: {
      email: req.body.email // Find the User with the matching email
    }
  }).then(UserData => {
    if (!UserData) { // If no User is found, send an error message
      res.status(400).json({ message: 'No user was found with that email address.' });
      return;
    }

    const validPassword = UserData.checkPassword(req.body.password); // Check if the password is valid

    if (!validPassword) { // If the password is not valid, send an error message
     res.status(400).json({ message: 'Invalid password!' });
      return;
    }
// Saves user session data and responds with success message
req.session.save(() => {
  // declare session variables
  req.session.user_id = UserData.id;
  req.session.username = UserData.username;
  req.session.loggedIn = true;

  res.json({ user: UserData, message: 'You have successfully logged in!' });
});

// Update user with specified ID
router.put('/:id', (req, res) => {

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(UserData => {
      if (!UserData[0]) {
        res.status(404).json({ message: 'There is no user associated with this id' });
        return;
      }
      res.json(UserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete user with specified ID
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(UserData => {
      if (!UserData) {
        res.status(404).json({ message: 'There is no user associated with this id' });
        return;
      }
      res.json(UserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Export router for use in other files
module.exports = router;
