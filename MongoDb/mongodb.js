//to show databases
show dbs
//to show collections
show collections

//to create db
use yourDatabaseName
🔹 Example: use myDatabase


//to create and insert data int db
// Insert a document into a collection:

db.users.insertOne({
  name: "Alice",
  age: 25,
  email: "alice@example.com"
})
// 🔹 This will:

// Create a collection named users

// Insert a document into it

// Create the database myDatabase if it doesn't already exist

// ✅ 3. Insert multiple documents (optional):
db.users.insertMany([
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 28, email: "charlie@example.com" }
])
// ✅ 4. View inserted data:
db.users.find()

// 1. Create or switch to a database:
use myDatabase

// ✅ 2. Create a collection and insert a document:
db.myCollection.insertOne({
  name: "John Doe",
  age: 30,
  email: "john@example.com"
})
// 🔹 This will:

// Create a collection named myCollection

// Insert one document

// Implicitly create the database myDatabase if it doesn't already exist

// ✅ 3. Optional: Manually create an empty collection (without inserting data):
db.createCollection("myCollection")
// 🔹 Useful if you want to define collections before adding data.

// ✅ 4. Verify creation:
show dbs             // Lists all databases
use myDatabase       // Switch to your database
show collections     // Lists collections in current database
db.myCollection.find()  // View documents


//drop db and collections
// 1. Drop a Collection
db.myCollection.drop()
🔹 Example:db.users.drop()
// This removes the entire users collection and all its documents.

// ✅ 2. Drop a Database
// To delete the current database:
db.dropDatabase()
🔹 Example:
use myDatabase
db.dropDatabase()
// This deletes the entire myDatabase and all its collections.









