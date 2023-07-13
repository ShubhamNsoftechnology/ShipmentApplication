const express = require('express');
const router = express.Router();
const connection = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(express.json());
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.use(express.static('public'));
const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

router.post('/Registration',upload.fields([
  { name: 'Aadharcard', maxCount: 1 },
  { name: 'Pancard', maxCount: 1 },
  { name: 'DrivingLicience', maxCount: 1 },
  { name: 'OtherDocument', maxCount: 1 }
]),(req, res) => {
  const newUser = req.body;

  connection('registrationtable')
    .insert(newUser)
    .then(() => {
      return connection('registrationtable').select().where(newUser);
    })
    .then((result) => {
      newUser.id = result[0].id;
      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.use('/', router);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get user by firstname for editing information 
router.get('/registration/:firstname', (req, res) => {
  const user = req.params.firstname;
  connection('registrationtable')
    .select()
    .where('firstname', user)
    .then((results) => {
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(results[0]);
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// Editing the user by valiting name,email and role
router.put('/registration/:firstname/:email/:role', (req, res) => {
  const username = req.params.firstname;
  const email = req.params.email;
  const role = req.params.role;
  const updatedUser = req.body;
  const fullName = String(req.body.name) + ' ' + String(req.body.lastName);
  console.log(username);
  console.log(role);
  console.log(email);
  connection('registrationtable')
    .where('fullName', username)
    .andWhere('Email',email)
    .andWhere('role',role)
    .update({fullName , ...updatedUser})
    .then((affectedRows) => {
      if (affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json({ message: 'User updated successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
    
});

// Deleting the user by validating name,email and role;
router.delete('/registration/:name/:email/:role', (req, res) => {
  const userName = req.params.name;
  const email = req.params.email;
  const role = req.params.role;
  
  connection('registrationtable')
  .where('fullName', userName)
  .andWhere('Email', email)
  .andWhere('role', role)
  .del()
  .then((affectedRows) => {
      if (affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json({ message: 'User deleted successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// getting oders details for displaying
router.get('/orders/:name/:email/:role', (req, res) => {
  const username = req.params.name;
  const Email = req.params.email;
  const role = req.params.role;
  
  connection('ordertable')
    .select()
    .where('orderpersonname', username)
    .andWhere('email', Email)
    .andWhere('role', role)
    .then((results) => {
      if (results.length === 0) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.json(results);
        console.log(results);
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});


// Define a route to delete a user by Id
router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  connection('users').where('id', userId).del().then((affectedRows) => {
      if (affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json({ message: 'User deleted successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to update a users by Id
router.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  connection('users')
    .where('id', userId)
    .update(updatedUser)
    .then((affectedRows) => {
      if (affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json({ message: 'User updated successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to get all users
router.get('/userss', (req, res) => {
  connection('users')
    .select()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to get a specific user by ID
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  connection('users')
    .select()
    .where('id', userId)
    .then((results) => {
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(results[0]);
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to create a new user
router.post('/users', (req, res) => {
  const newUser = req.body;

  connection('users')
    .insert(newUser)
    .then((result) => {
      newUser.id = result[0];
      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});






//ProductTable routes
// Define a route to delete a product by ID
router.delete('/product/:id', (req, res) => {
  const productId = req.params.id;

  connection('producttable')
    .where('product_Id', productId)
    .del()
    .then((result) => {
      if (result === 0) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.status(200).json({ message: 'Product deleted successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to update a product by ID
router.put('/product/:id', (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  const query = 'UPDATE producttable SET ? WHERE product_id = ?';

  connection.query(query, [updatedProduct, productId], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    res.status(200).json({ message: 'Product updated successfully' });
  });
});
// Define a route to get all product
router.get('/product', (req, res) => {
  connection('producttable')
    .select()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to get a specific product by ID
router.get('/product/:id', (req, res) => {
  const userId = req.params.id;

  connection('producttable')
    .select()
    .where('product_Id', userId)
    .then((results) => {
      if (results.length === 0) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.json(results[0]);
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to create a new product
router.post('/product', (req, res) => {
  const newUser = req.body;

  connection('producttable')
    .insert(newUser)
    .then((result) => {
      newUser.id = result[0];
      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});



//ordertables routes
// Define a route to delete order by Id
router.delete('/order/:id', (req, res) => {
  const productId = req.params.id;

  connection('ordertable')
    .where('orderId', productId)
    .del()
    .then((result) => {
      if (result === 0) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.status(200).json({ message: 'Order deleted successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to update a order by ID
router.put('/order/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  connection('ordertable')
    .where('orderId', userId)
    .update(updatedUser)
    .then((affectedRows) => {
      if (affectedRows === 0) {
        res.status(404).json({ error: 'Order not found' });
      } else {
        res.status(200).json({ message: 'Order updated successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to get all order
router.get('/order', (req, res) => {
  connection('ordertable')
    .select()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to get order by Id
router.get('/order/:id', (req, res) => {
  const userId = req.params.id;

  connection('ordertable')
    .select()
    .where('orderId', userId)
    .then((results) => {
      if (results.length === 0) {
        res.status(404).json({ error: ' Order not found' });
      } else {
        res.json(results[0]);
      }
    })
    
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to create a new order
router.post('/order', (req, res) => {
  const newUser = req.body;

  connection('ordertable')
    .insert(newUser)
    .then((result) => {
      newUser.id = result[0];
      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
router.post('/orderitem', (req, res) => {
  const newUser = req.body;

  connection('orderitem')
    .insert(newUser)
    .then((result) => {
      newUser.id = result[0];
      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});




//categoryTables routes
router.delete('/category/:id', (req, res) => {
  const productId = req.params.id;

  connection('categorytable')
    .where('categoryId', productId)
    .del()
    .then((result) => {
      if (result === 0) {
        res.status(404).json({ error: 'Category not found' });
      } else {
        res.status(200).json({ message: 'Category deleted successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to update a category by ID
router.put('/category/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  connection('categorytable')
    .where('categoryId', userId)
    .update(updatedUser)
    .then((affectedRows) => {
      if (affectedRows === 0) {
        res.status(404).json({ error: 'Category not found' });
      } else {
        res.status(200).json({ message: 'Category updated successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to get all category
router.get('/category', (req, res) => {
  connection('categorytable')
    .select()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to get a specific category by ID
router.get('/category/:id', (req, res) => {
  const userId = req.params.id;

  connection('categorytable')
    .select()
    .where('categoryId', userId)
    .then((results) => {
      if (results.length === 0) {
        res.status(404).json({ error: 'Category not found' });
      } else {
        res.json(results[0]);
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to create a category user
router.post('/category', (req, res) => {
  const newUser = req.body;

  connection('categorytable')
    .insert(newUser)
    .then((result) => {
      newUser.id = result[0];
      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});




//subcatergory routes
// route to delete subcagtegory by Id
router.delete('/subcategory/:id', (req, res) => {
  const subcategoryId = req.params.id;

  connection('subcategorytable')
    .where('subcategoryId', subcategoryId)
    .del()
    .then((result) => {
      if (result === 0) {
        res.status(404).json({ error: 'SubCategory not found' });
      } else {
        res.status(200).json({ message: 'SubCategory deleted successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to update a subcategory by ID
router.put('/subcategory/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  connection('subcategorytable')
    .where('subcategoryId', userId)
    .update(updatedUser)
    .then((affectedRows) => {
      if (affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json({ message: 'User updated successfully' });
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to get all subcategory
router.get('/subcategory', (req, res) => {
  connection('subcategorytable')
    .select()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to get a specific subcategory by ID
router.get('/subcategory/:id', (req, res) => {
  const userId = req.params.id;

  connection('subcategorytable')
    .select()
    .where('subcategoryId', userId)
    .then((results) => {
      if (results.length === 0) {
        res.status(404).json({ error: 'Subcategory not found' });
      } else {
        res.json(results[0]);
      }
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});
// Define a route to create a subcategory
router.post('/subcategory', (req, res) => {
  const newUser = req.body;

  connection('subcategory')
    .insert(newUser)
    .then((result) => {
      newUser.id = result[0];
      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});


module.exports = router;
