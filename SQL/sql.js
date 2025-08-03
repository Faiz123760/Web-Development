// SQL Commands: The Complete List (w/ Examples)

// To get a data job, you are going to need to learn SQL. The common SQL commands and operators discussed in this post are a great reference. If you're looking for more details and SQL resources, check out our Complete guide to SQL.

// Below is a comprehensive list of SQL commands, organized by the top-level of each (e.g. SELECT TOP is within the SELECT category).

// If you’re on a journey to learn SQL and you’ve been frustrated by the lack of structure or the dull curriculum, then you may like Dataquest’s interactive SQL skill path. Try it free.

// Here are a few SQL courses:

// Introduction to SQL and Databases
// Filtering and Sorting Data in SQL
// Summarizing Data in SQL
// Combining Tables in SQL
// SQL Subqueries
// List of SQL Commands
// SELECT
// SELECT is probably the most commonly-used SQL statement. You'll use it pretty much every time you query data with SQL. It allows you to define what data you want your query to return.

// For example, in the code below, we’re selecting a column called name from a table called customers.

// SELECT name
// FROM customers;
// SELECT *
// SELECT used with an asterisk (*) will return all of the columns in the table we're querying.

// SELECT * FROM customers;
// SELECT DISTINCT
// SELECT DISTINCT only returns data that is distinct — in other words, if there are duplicate records, it will return only one copy of each.

// The code below would return only rows with a unique name from the customers table.

// SELECT DISTINCT name
// FROM customers;
// SELECT INTO
// SELECT INTO copies the specified data from one table into another.

// SELECT * INTO customers
// FROM customers_backup;
// SELECT TOP
// SELECT TOP only returns the top x number or percent from a table.

// The code below would return the top 50 results from the customers table:

// SELECT TOP 50 * FROM customers;
// The code below would return the top 50 percent of the customers table:

// SELECT TOP 50 PERCENT * FROM customers;
// AS
// AS renames a column or table with an alias that we can choose. For example, in the code below, we’re renaming the name column as first_name:

// SELECT name AS first_name
// FROM customers;
// FROM
// FROM specifies the table we're pulling our data from:

// SELECT name
// FROM customers;
// WHERE
// WHERE filters your query to only return results that match a set condition. We can use this together with conditional operators like =, >, <, >=, <=, etc.

// SELECT name
// FROM customers
// WHERE name = ‘Bob’;
// AND
// AND combines two or more conditions in a single query. All of the conditions must be met for the result to be returned.

// SELECT name
// FROM customers
// WHERE name = ‘Bob’ AND age = 55;
// OR
// OR combines two or more conditions in a single query. Only one of the conditions must be met for a result to be returned.

// SELECT name
// FROM customers
// WHERE name = ‘Bob’ OR age = 55;
// BETWEEN
// BETWEEN filters your query to return only results that fit a specified range.

// SELECT name
// FROM customers
// WHERE age BETWEEN 45 AND 55;
// LIKE
// LIKE searches for a specified pattern in a column. In the example code below, any row with a name that included the characters Bob would be returned.

// SELECT name
// FROM customers
// WHERE name LIKE ‘%Bob%’;
// Other operators for LIKE:

// %x — will select all values that begin with x
// %x% — will select all values that include x
// x% — will select all values that end with x
// x%y — will select all values that begin with x and end with y
// _x% — will select all values have x as the second character
// x_% — will select all values that begin with x and are at least two characters long. You can add additional _ characters to extend the length requirement, i.e. x___%
// IN
// IN allows us to specify multiple values we want to select for when using the WHERE command.

// SELECT name
// FROM customers
// WHERE name IN (‘Bob’, ‘Fred’, ‘Harry’);
// IS NULL
// IS NULL will return only rows with a NULL value.

// SELECT name
// FROM customers
// WHERE name IS NULL;
// IS NOT NULL
// IS NOT NULL does the opposite — it will return only rows without a NULL value.

// SELECT name
// FROM customers
// WHERE name IS NOT NULL;
// CREATE
// CREATE can be used to set up a database, table, index or view.

// CREATE DATABASE
// CREATE DATABASE creates a new database, assuming the user running the command has the correct admin rights.

// CREATE DATABASE dataquestDB;
// CREATE TABLE
// CREATE TABLE creates a new table inside a database. The terms int and varchar(255) in this example specify the datatypes of the columns we're creating.

// CREATE TABLE customers (
//     customer_id int,
//     name varchar(255),
//     age int
// );
// CREATE INDEX
// CREATE INDEX generates an index for a table. Indexes are used to retrieve data from a database faster.

// CREATE INDEX idx_name
// ON customers (name);
// CREATE VIEW
// CREATE VIEW creates a virtual table based on the result set of an SQL statement. A view is like a regular table (and can be queried like one), but it is not saved as a permanent table in the database.

// CREATE VIEW [Bob Customers] AS
// SELECT name, age
// FROM customers
// WHERE name = ‘Bob’;
// DROP
// DROP statements can be used to delete entire databases, tables or indexes.

// It goes without saying that the DROP command should only be used where absolutely necessary.

// DROP DATABASE
// DROP DATABASE deletes the entire database including all of its tables, indexes etc as well as all the data within it.

// Again, this is a command we want to be very, very careful about using!

// DROP DATABASE dataquestDB;
// DROP TABLE
// DROP TABLE deletes a table as well as the data within it.

// DROP TABLE customers;
// DROP INDEX
// DROP INDEX deletes an index within a database.

// DROP INDEX idx_name;
// UPDATE
// The UPDATE statement is used to update data in a table. For example, the code below would update the age of any customer named Bob in the customers table to 56.

// UPDATE customers
// SET age = 56
// WHERE name = ‘Bob’;
// DELETE
// DELETE can remove all rows from a table (using ), or can be used as part of a WHERE clause to delete rows that meet a specific condition.

// DELETE FROM customers
// WHERE name = ‘Bob’;
// ALTER TABLE
// ALTER TABLE allows you to add or remove columns from a table. In the code snippets below, we’ll add and then remove a column for surname. The text varchar(255) specifies the datatype of the column.

// ALTER TABLE customers
// ADD surname varchar(255);
// ALTER TABLE customers
// DROP COLUMN surname;
// AGGREGATE FUNCTIONS (COUNT/SUM/AVG/MIN/MAX)
// An aggregate function performs a calculation on a set of values and returns a single result.

// COUNT
// COUNT returns the number of rows that match the specified criteria. In the code below, we’re using *, so the total row count for customers would be returned.

// SELECT COUNT(*)
// FROM customers;
// SUM
// SUM returns the total sum of a numeric column.

// SELECT SUM(age)
// FROM customers;
// AVG
// AVG returns the average value of a numeric column.

// SELECT AVG(age)
// FROM customers;
// MIN
// MIN returns the minimum value of a numeric column.

// SELECT MIN(age)
// FROM customers;
// MAX
// MAX returns the maximum value of a numeric column.

// SELECT MAX(age)
// FROM customers;
// GROUP BY
// The GROUP BY statement groups rows with the same values into summary rows. The statement is often used with aggregate functions. For example, the code below will display the average age for each name that appears in our customers table.

// SELECT name, AVG(age)
// FROM customers
// GROUP BY name;
// HAVING
// HAVING performs the same action as the WHERE clause. The difference is that HAVING is used for aggregate functions, whereas WHERE doesn’t work with them.

// The below example would return the number of rows for each name, but only for names with more than 2 records.

// SELECT COUNT(customer_id), name
// FROM customers
// GROUP BY name
// HAVING COUNT(customer_id) > 2;
// ORDER BY
// ORDER BY sets the order of the returned results. The order will be ascending by default.

// SELECT name
// FROM customers
// ORDER BY age;
// DESC
// DESC will return the results in descending order.

// SELECT name
// FROM customers
// ORDER BY age DESC;
// OFFSET
// The OFFSET statement works with ORDER BY and specifies the number of rows to skip before starting to return rows from the query.

// SELECT name
// FROM customers
// ORDER BY age
// OFFSET 10 ROWS;
// FETCH
// FETCH specifies the number of rows to return after the OFFSET clause has been processed. The OFFSET clause is mandatory, while the FETCH clause is optional.

// SELECT name
// FROM customers
// ORDER BY age
// OFFSET 10 ROWS
// FETCH NEXT 10 ROWS ONLY;
// JOINS (INNER, LEFT, RIGHT, FULL)
// A JOIN clause is used to combine rows from two or more tables. The four types of JOIN are INNER, LEFT, RIGHT and FULL.

// INNER JOIN
// INNER JOIN selects records that have matching values in both tables.

// SELECT name
// FROM customers
// INNER JOIN orders
// ON customers.customer_id = orders.customer_id;
// LEFT JOIN
// LEFT JOIN selects records from the left table that match records in the right table. In the below example the left table is customers.

// SELECT name
// FROM customers
// LEFT JOIN orders
// ON customers.customer_id = orders.customer_id;
// RIGHT JOIN
// RIGHT JOIN selects records from the right table that match records in the left table. In the below example the right table is orders.

// SELECT name
// FROM customers
// RIGHT JOIN orders
// ON customers.customer_id = orders.customer_id;
// FULL JOIN
// FULL JOIN selects records that have a match in the left or right table. Think of it as the “OR” JOIN compared with the “AND” JOIN (INNER JOIN).

// SELECT name
// FROM customers
// FULL OUTER JOIN orders
// ON customers.customer_id = orders.customer_id;
// EXISTS
// EXISTS is used to test for the existence of any record in a subquery.

// SELECT name
// FROM customers
// WHERE EXISTS
// (SELECT order FROM ORDERS WHERE customer_id = 1);
// GRANT
// GRANT gives a particular user access to database objects such as tables, views or the database itself. The below example would give SELECT and UPDATE access on the customers table to a user named “usr_bob”.

// GRANT SELECT, UPDATE ON customers TO usr_bob;
// REVOKE
// REVOKE removes a user's permissions for a particular database object.

// REVOKE SELECT, UPDATE ON customers FROM usr_bob;
// SAVEPOINT
// SAVEPOINT allows you to identify a point in a transaction to which you can later roll back. Similar to creating a backup.

// SAVEPOINT SAVEPOINT_NAME;
// COMMIT
// COMMIT is for saving every transaction to the database. A COMMIT statement will release any existing savepoints that may be in use and once the statement is issued, you cannot roll back the transaction.

// DELETE FROM customers
// WHERE name = ‘Bob’;
// COMMIT
// ROLLBACK
// ROLLBACK is used to undo transactions which are not saved to the database. This can only be used to undo transactions since the last COMMIT or ROLLBACK command was issued. You can also rollback to a SAVEPOINT that has been created before.

// ROLLBACK TO SAVEPOINT_NAME;
// TRUNCATE
// TRUNCATE TABLE removes all data entries from a table in a database, but keeps the table and structure in place. Similar to DELETE.

// TRUNCATE TABLE customers;
// UNION
// UNION combines multiple result-sets using two or more SELECT statements and eliminates duplicate rows.

// SELECT name FROM customersUNIONSELECT name FROM orders;

// UNION ALL
// UNION ALL combines multiple result-sets using two or more SELECT statements and keeps duplicate rows.

// SELECT name FROM customers
// UNION
// SELECT name FROM orders;


// 1.   SQL Query for Retrieving Tables
// This query can be run to retrieve the list of tables present in a database where the database is “My_Schema”.

// With the SELECT command, users can define the columns that they want to get in the query output. This command is also useful to get which column users want to see as the output table. The SELECT statement is applied to pick data from a table. The data retrieved is put in a result table, named the result set. The output data is saved in a result table. This output table is also termed the result set.

// 1
// SELECT * FROM My_Schema.Tables;

// 2.   Query for Selecting Columns from a Table
// These are perhaps the most useful SQL query examples. In the example below, we are extracting the “Student_ID” column or attribute from the table “STUDENT”. The select statement is used to select data from the database.

// 1
// SELECT Student_ID FROM STUDENT;
// If you want to display all the attributes from a particular table, this is the right query to use:

// 1
// SELECT * FROM STUDENT;

// 3.   Query for Outputting Data Using a Constraint
// This SQL query retrieves the specified attributes from the table on the constraint Employee ID =0000

// 1
// SELECT EMP_ID, NAME FROM EMPLOYEE_TBL WHERE EMP_ID = '0000';

// 4. Query for Outputting Sorted Data Using ‘Order By’
// This query orders the results with respect to the attribute which is referenced using “Order By” – so for example, if that attribute is an integer data type, then the result would either be sorted in ascending or descending order; likewise, if the data type is a String then the result would be ordered in alphabetical order. The order by clause is used to sort the data from the table. The order by clause should always be used in the last of the SQL query.

// 1
// 2
// SELECT EMP_ID, LAST_NAME FROM EMPLOYEE
// WHERE CITY = 'Seattle' ORDER BY EMP_ID;
// The ordering of the result can also be set manually, using “asc ” for ascending and “desc” for descending.

// Ascending (ASC) is the default condition for the ORDER BY clause. In other words, if users don’t specify ASC or DESC after the column name, then the result will be ordered in ascending order only.

// 1
// 2
// SELECT EMP_ID, LAST_NAME FROM EMPLOYEE_TBL
// WHERE CITY = 'INDIANAPOLIS' ORDER BY EMP_ID asc;

// 5.   SQL Query for Outputting Sorted Data Using ‘Group By’
// The ‘Group By’ property groups the resulting data according to the specified attribute.

// The SQL query below will select Name, Age columns from the Patients table, then will filter them by Age value to include records where Age is more than 40 and then will group records with similar Age value and then finally will output them sorted by Name. The basic rule is that the group by clause should always follow a where clause in a Select statement and must precede the Order by clause.

// 1
// 2
// SELECT Name, Age FROM Patients WHERE Age > 40
// GROUP BY Name, Age ORDER BY Name;
// Another sample of use of Group By: this expression will select records with a price lesser than 70 from the Orders table, will group records with a similar price, will sort the output by price, and will also add the column COUNT(price) that will display how many records with similar price were found:

// 1
// 2
// SELECT COUNT(price), price FROM orders 
// WHERE price < 70 GROUP BY price ORDER BY price
// Note: you should use the very same set of columns for both SELECT and GROUP BY commands, otherwise you will get an error. Many thanks to Sachidannad for pointing it out!

// SQL Queries for Data Manipulation Using Math Functions
// There are a lot of built-in math functions like COUNT and AVG which provide basic functionalities of counting the number of results and averaging them respectively.

// 6. Data Manipulation Using COUNT
// This query displays the total number of customers by counting each customer ID. In addition, it groups the results according to the country of each customer. In count, if users define DISTINCT, then they cal also define the query_partition_clause. This clause is a part of the analytic clause, and other clauses such as order_by_clause and windowing_clause are not permitted.

// Syntax: SELECT COUNT(colname) FROM table name;

// 1
// SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;

// 7. Data Manipulation Using SUM
// SUM calculates the total of the attribute that is given to it as an argument. SUM is an aggregate function and it calculates the sum of all the distinct values. and the sum of all the duplicate values.

// 1
// SELECT SUM(Salary)FROM Employee WHERE Emp_Age < 30;

// 8. Data Manipulation Using AVG
// Simple – an average of a given attribute. Average is also an aggregate function in SQL. The AVG() function computes the average of non-NULL values in a column. It ignores the null values.

// 1
// SELECT AVG(Price)FROM Products;

// 9.   SQL Query for Listing all Views
// This SQL query lists all the views available in the schema.

// 1
// SELECT * FROM My_Schema.views;

// 10. Query for Creating a View
// A view is a tailored table that is formed as a result of a query. It has tables and rows just like any other table. It’s usually a good idea to run queries in SQL as independent views because this allows them to be retrieved later to view the query results, rather than computing the same command every time for a particular set of results.

// 1
// 2
// 3
// 4
// CREATE VIEW Failing_Students AS
// SELECT S_NAME, Student_ID
// FROM STUDENT
// WHERE GPA > 40;

// 11. Query for Retrieving a View
// The standard syntax of selecting attributes from a table is applicable to views as well.

// 1
// SELECT * FROM Failing_Students;

// 12. Query for Updating a View
// This query updates the view named ‘Product List’ – and if this view doesn’t exist, then the Product List view gets created as specified in this query. The view is also called a virtual table. In other words, a view is just a mirrored copy of a table whose data is the result of a stored query.

// A view is a legitimate copy of a different table or sequence of tables. A view obtains its information or data from the tables from previously created tables known as base tables. Base tables are real tables. All procedures implemented on a view really modify the base table. Users can use views just like the real or base tables. In view, users can apply various DDL, DML commands such as update, insert into, and delete.

// 1
// 2
// 3
// 4
// CREATE OR REPLACE VIEW [ Product List] AS
// SELECT ProductID, ProductName, Category
// FROM Products
// WHERE Discontinued = No;

// 13. Query for Dropping a View
// This query will drop or delete a view named ‘V1’. The important thing to remember here is that the DROP VIEW is disallowed if there are any views dependent on the view you are about to drop.

// 1
// DROP VIEW V1;

// 14. Query to Display User Tables
// A user-defined table is a representation of defined information in a table, and it can be used as arguments for procedures or user-defined functions. Because they’re so useful, it’s useful to keep track of them using the following query. User tables explain the relational tables of the current user.

// 1
// SELECT * FROM Sys.objects WHERE Type='u'

// 15. Query to Display Primary Keys
// A primary key uniquely identifies all values within a table. A primary key imposes a NOT NULL restriction and a unique constraint in one declaration. In other words, it prevents various rows from having similar values or sequences of columns. It doesn’t allow null values. The primary key can be defined as a single column or the combination of two columns in a table. It is responsible for all the relationships between the tables.

// The following SQL query lists all the fields in a table’s primary key.

// 1
// SELECT * from Sys.Objects WHERE Type='PK'

// 16. Query for Displaying Unique Keys
// A Unique Key allows a column to ensure that all of its values are different. A unique key also recognizes a different tuple uniquely in relation to or table. A table can have more than one unique key. Unique key constraints can take only one NULL value for the column.

// 1
// SELECT * FROM Sys.Objects WHERE Type='uq'

// 17. Displaying Foreign Keys
// Foreign keys link one table to another – they are attributes in one table which refer to the primary key of another table.

// 1
// SELECT * FROM Sys.Objects WHERE Type='f'
// Primary, Unique, and Foreign are part of the constraints in SQL. Constraints are essential to the scalability, compliance, and sincerity of the data. Constraints implement particular rules, assuring the data adheres to the conditions outlined. For example, these are the laws imposed on the columns of the database tables. These are applied to restrict the kind of data in the table. This assures the efficiency and authenticity of the database.

// 18. Displaying Triggers
// A Trigger is sort of an ‘event listener’ – i.e, it’s a pre-specified set of instructions that execute when a certain event occurs. The list of defined triggers can be viewed using the following query.

// 1
// SELECT * FROM Sys.Objects WHERE Type='tr'

// 19. Displaying Internal Tables
// Internal tables are formed as a by-product of a user action and are usually not accessible. The data in internal tables cannot be manipulated; however, the metadata of the internal tables can be viewed using the following query.

// 1
// SELECT * FROM Sys.Objects WHERE Type='it'

// 20. Displaying a List of Procedures
// A stored procedure is a group of advanced SQL queries that logically form a single unit and perform a particular task. Thus, using the following query you can keep track of them:

// 1
// SELECT * FROM Sys.Objects WHERE Type='p'
 


// 21. Swapping the Values of Two Columns in a table
// In this and subsequent examples, we will use a common company database including several tables that are easily visualized. Our practice DB will include a Customer table and an Order table. The Customers table will contain some obvious columns including ID, Name, Address, zip, and email, for example, where we assume for now that the primary key field for indexing is the Customer_ID field.

// With this in mind, we can easily imagine an Orders table that likewise contains the indexed customer ID field, along with details of each order placed by the customer. This table will include the order Number, Quantity, Date, Item, and Price. In our first one of SQL examples, imagine a situation where the zip and phone fields were transposed and all the phone numbers were erroneously entered into the zip code field. We can easily fix this problem with the following SQL statement:

// 1
// UPDATE Customers SET Zip=Phone, Phone=Zip

// 22. Returning a Column of Unique Values
// Now, suppose that our data entry operator added the same Customers to the Customers table more than once by mistake. As you know, proper indexing requires that the key field contains only unique values. To fix the problem, we will use SELECT DISTINCT to create an indexable list of unique customers:

// 1
// SELECT DISTINCT ID FROM Customers

// 23. Making a Top 25 with the SELECT TOP Clause
// Next, imagine that our Customers table has grown to include thousands of records, but we just want to show a sample of 25 of these records to demonstrate the column headings and The SELECT TOP clause allows us to specify the number of records to return, like a Top-25 list. In this example we will return the top 25 from our Customers table:

// 1
// SELECT TOP 25 FROM Customers WHERE Customer_ID<>NULL;

// 24. Searching for SQL Tables with Wildcards
// Wildcard characters or operators like “%” make it easy to find particular strings in a large table of thousands of records. Suppose we want to find all of our customers who have names beginning with “Herb” including Herberts, and Herbertson. The % wildcard symbol can be used to achieve such a result. The following SQL query will return all rows from the Customer table where the Customer_name field begins with “Herb”:

// 1
// SELECT * From Customers WHERE Name LIKE 'Herb%'

// 25. Between Monday and Tuesday
// Today is Wednesday, and we arrive at work and discover that our new data entry clerk in training has entered all new orders incorrectly on Monday and Tuesday. We wish to teach our new trainee to find and correct all erroneous records. What’s the easiest way to get all the records from the Orders table entered on Monday and Tuesday? The Between clause makes the task a breeze:

// 1
// 2
// SELECT ID FROM Orders WHERE
// Date BETWEEN ‘01/12/2018’ AND ‘01/13/2018’

// 26. Finding the Intersection of Two Tables
// Undoubtedly the whole reason that a relational database exists in the first place is to find matching records in two tables! The JOIN statement accomplishes this core objective of SQL and makes the task easy. Here we are going to fetch a list of all records which have matches in the Customers and Orders tables:

// 1
// 2
// SELECT ID FROM Customers INNER
// JOIN Orders ON Customers.ID = Orders.ID
// The point of INNER JOIN, in this case, is to select records in the Customers table which have matching customer ID values in the Orders table and return only those records. Of course, there are many types of JOIN, such as FULL, SELF, and LEFT, but for now, let’s keep things interesting and move on to more diverse types of advanced SQL commands.

// 27. Doubling the Power with UNION
// We can combine the results of two SQL query examples into one naturally with the UNION keyword. Suppose we want to create a new table by combining the Customer_name and phone from Customers with a list of that customer’s recent orders so that we can look for patterns and perhaps suggest future purchases. Here is a quick way to accomplish the task:

// 1
// 2
// SELECT phone FROM Customers 
// UNION SELECT item FROM Orders
// The UNION keyword makes it possible to combine JOINS and other criteria to achieve a very powerful new table generation potential.

// 28. Making Column Labels More Friendly
// Aliasing column labels give us the convenience of renaming a column label to something more readable. There is a tradeoff when naming columns to make them succinct results in reduced readability in subsequent daily use. In our Orders table, the item column contains the description of purchased products. Let’s see how to alias the item column to temporarily rename it for greater user-friendliness:

// 1
// SELECT Item AS item_description FROM Orders

// 29. Always and Everywhere!
// Wouldn’t it be great if there were a set of conditions you could depend on every time? The complex SQL queries using ANY and ALL can make this ideal a reality! Let’s look at how the ALL keyword is used to include records only when a set of conditions is true for ALL records. In the following example, we will return records from the Orders table where the idea is to get a list of high volume orders for a given item, in this case for customers who ordered more than 50 of the product:

// 1
// 2
// 3
// 4
// SELECT Item FROM Orders 
// WHERE id = ALL
// (SELECT ID FROM Orders
// WHERE quantity > 50)

// 30. Writing Developer Friendly SQL
// An often overlooked but very important element of SQL scripting is adding comments to a script of queries to explain what it’s doing for the benefit of future developers who may need to revise and update your SQL queries.

// A SQL script is a collection of SQL elements and commands accumulated as a file in SQL Scripts. This script file can include many SQL commands or PL/SQL codes. One can utilize SQL Scripts to build, edit, design, execute, and delete files.

// The — single line and the /* .. */ multi-line delimiters empower us to add useful comments to scripts, but this is also used in another valuable way. Sometimes a section of code may not be in use, but we don’t want to delete it, because we anticipate using it again. Here we can simply add the comment delimiter to deactivate it momentarily:

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
/* This query below is commented so it won't execute*/
/*
SELECT item FROM Orders 
WHERE date ALL = (SELECT Order_ID FROM Orders
WHERE quantity > 50)
*/
 
/* the SQL query below the will be executed 
ignoring the text after "--"
*/
 
// SELECT item -- single comment  
// FROM Orders -- another single comment
// WHERE id 
// ALL = (SELECT ID FROM Orders
// WHERE quantity > 25)

// 31.  SQL queries for Database Management
// So far we have explored SQL query examples for querying tables and combining records from multiple queries. Now it’s time to take a step upward and look at the database on a structural level. Let’s start with the easiest SQL statement of all which creates a new database. Here, we are going to create the DB as a container for our Customers and Orders tables used in the previous ten examples above:

// 1
// CREATE DATABASE AllSales

// 32. Adding Tables to Our New DB
// Next, we will actually add the Customers table which we’ve been using in previous examples, and then add some of the column labels which we are already familiar with:

// 1
// 2
// 3
// 4
// 5
// 6
// CREATE TABLE Customers (
// ID varchar(80),
// Name varchar(80),
// Phone varchar(20),
// ....
// );
// Although most databases are created using a UI such as Access or OpenOffice, it is important to know how to create and delete databases and tables programmatically via code with SQL statements. This is especially so when installing a new web app and the UI asks new users to enter names for DBs to be added during installation.

// 33. Modifying and Deleting Tables with SQL
// The ALTER statement is used to modify or change the meaning of a table. In the case of the relational tables with columns, ALTER statement is used to update the table to the new or modified rules or definition. Alter belongs to the DDL category of Commands. Data definition language can be described as a pattern for commands through which data structures are represented.

// Imagine that you decide to send a birthday card to your customers to show your appreciation for their business, and so you want to add a birthday field to the Customers table. In these SQL examples, you see how easy it is to modify existing tables with the ALTER statement:

// 1
// ALTER TABLE Customers ADD Birthday varchar(80)
// If a table becomes corrupted with bad data you can quickly delete it like this:

// 1
// DROP TABLE table_name

// 34. The Key to Successful Indexing
// An index is a schema element that includes a record for each content that arrives in the indexed column of the database table or cluster and gives a high-speed path to rows. There are many types of indexes such as Bitmap indexes, Partitioned indexes, Function-based indexes, and Domain indexes.

// Accurate indexing requires that the Primary Key column contains only unique values for this purpose. This guarantees that JOIN statements will maintain integrity and produce valid matches. Let’s create our Customers table again and establish the ID column as the Primary Key:

// 1
// 2
// 3
// 4
// 5
// CREATE TABLE Customers (
// ID int NOT NULL,
// Name varchar(80) NOT NULL,
// PRIMARY KEY (ID)
// );
// We can extend the functionality of the Primary Key so that it automatically increments from a base. Change the ID entry above to add the AUTO_INCREMENT keyword as in the following statement:

// 1
// ID int NOT NULL AUTO_INCREMENT

// 35. Advanced Concepts For Improving Performance
// Whenever practical, is always better to write the column name list into a SELECT statement rather than using the * delimiter as a wildcard to select all columns. SQL Server has to do a search and replace operation to find all the columns in your table and write them into the statement for you (every time the SELECT is executed). For example:

// 1
// SELECT * FROM Customers
// Would actually execute much faster on our database as:

// 1
// 2
// SELECT Name, Birthday, Phone, 
// Address, Zip FROM Customers
// Performance pitfalls can be avoided in many ways. For example, avoid the time sinkhole of forcing SQL Server to check the system/master database every time by using only a stored procedure name, and never prefix it with SP_. Also setting NOCOUNT ON reduces the time required for SQL Server to count rows affected by INSERT, DELETE, and other commands. Using INNER JOIN with a condition is much faster than using WHERE clauses with conditions. We advise developers to learn SQL server queries to an advanced level for this purpose. For production purposes, these tips may be crucial to adequate performance. Notice that our tutorial examples tend to favor the INNER JOIN.

// 36. Conditional Subquery Results
// The SQL operator EXISTS tests for the existence of records in a subquery and returns a value TRUE if a subquery returns one or more records. Have a look at this query with a subquery condition:

// 1
// 2
// 3
// SELECT Name FROM Customers WHERE EXISTS 
// (SELECT Item FROM Orders 
// WHERE Customers.ID = Orders.ID AND Price < 50)
// In this example above, the SELECT returns a value of TRUE when a customer has orders valued at less than $50.

// 37. Copying Selections from Table to Table
// There are a hundred and one uses for this SQL tool. Suppose you want to archive your yearly Orders table into a larger archive table. This next example shows how to do it.

// 1
// 2
// 3
// INSERT INTO Yearly_Orders 
// SELECT * FROM Orders 
// WHERE Date<=1/1/2018
// This example will add any records from the year 2018 to the archive.

// 38. Catching NULL Results
// The NULL is the terminology applied to describe an absent value. Null does not mean zero. A NULL value in a column of a table is a condition in a domain that seems to be empty. A column with a NULL value is a domain with an absent value. It is essential to recognize that a NULL value is distinct from a zero.

// In cases where NULL values are allowed in a field, calculations on those values will produce NULL results as well. This can be avoided by the use of the IFNULL operator. In this next example, a value of zero is returned rather than a value of NULL when the calculation encounters a field with a NULL value:

// 1
// 2
// 3
// SELECT Item, Price * 
// (QtyInStock + IFNULL(QtyOnOrder, 0)) 
// FROM Orders

// 39. HAVING can be Relieving!
// The problem was that the SQL WHERE clause could not operate on aggregate functions. The problem was solved by using the HAVING clause. As an example, this next query fetches a list of customers by the region where there is at least one customer per region:

// 1
// 2
// 3
// 4
// SELECT COUNT(ID), Region
// FROM Customers
// GROUP BY Region
// HAVING COUNT(ID) > 0;

// 40. Tie things up with Strings!
// Let’s have a look at processing the contents of field data using functions. Substring is probably the most valuable of all built-in functions. It gives you some of the power of Regex, but it’s not so complicated as Regex. Suppose you want to find the substring left of the dots in a web address. Here’s how to do it with an SQL Select query:

// 1
// SELECT SUBSTRING_INDEX("www.bytescout.com", ".", 2);
// This line will return everything to the left of the second occurrence of “. ” and so, in this case, it will return

// 1
// <a href="https://bytescout.com">www.bytescout.com</a>
// Check this video to learn about every SQL query:



 

// .. and 20 more useful SQL Queries examples!!

// 41. Use COALESCE to return the first non-null expression
// The SQL Coalesce is used to manage the NULL values of the database. In this method, the NULL values are substituted with the user-defined value. The SQL Coalesce function assesses the parameters in series and always delivers the first non-null value from the specified argument record.

// Syntax
// 1
// SELECT COALESCE(NULL,NULL,'ByteScout',NULL,'Byte')
// Output
// ByteScout

// 42. Use Convert to transform any value into a particular datatype
// This is used to convert a value into a defined datatype. For example, if you want to convert a particular value into int datatype then a convert function can be used to achieve this. For example,

// Syntax
// 1
// SELECT CONVERT(int, 27.64)
// Output
// 27

// 43. DENSE_RANK()Analytical query
// It is an analytic query that computes the rank of a row in an arranged collection of rows. An output rank is a number starting from 1. DENSE_RANK is one of the most important SQL queries. It returns rank preferences as sequential numbers. It does not jump rank in event of relations. For example, the following query will give the sequential ranks to the employee.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// SELECT eno,
// dno,
// salary,
// DENSE_RANK() OVER (PARTITION BY dno ORDER BY salary) AS ranking
// FROM employee;
 
// ENO  DNO SALARY RANKING
// ---------- ---------- ---------- ----------
// 7933  10 1500   1
// 7788  10 2650   2
// 7831  10 6000   3
// 7362  20 900    1
// 7870  20 1200   2
// 7564  20 2575   3
// 7784  20 4000   4
// 7903  20 4000   4
// 7901  30 550    1
// 7655  30 1450   2
// 7522  30 1450   2
// 7844  30 1700   3
// 7493  30 1500   4
// 7698  30 2850   5

// 44. Query_partition_clause
// The query_partition_clause breaks the output set into distributions, or collections, of data. The development of the analytic query is limited to the confines forced by these partitions, related to the process a GROUP BY clause modifies the performance of an aggregate function. If the query_partition_clause is eliminated, the entire output collection is interpreted as a separate partition.

// The following query applies an OVER clause, so the average displayed is based on all the records of the output set.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// SELECT eno, dno, salary,
// AVG(salary) OVER () AS avg_sal
// FROM employee;
 
// EO  DNO SALARY AVG_SAL
// ---------- ---------- ---------- ----------
// 7364 20 900 2173.21428
// 7494 30 1700 2173.21428
// 7522 30 1350 2173.21428
// 7567 20 3075 2173.21428
// 7652 30 1350 2173.21428
// 7699 30 2950 2173.21428
// 7783 10 2550 2173.21428
// 7789 20 3100 2173.21428
// 7838 10 5100 2173.21428
// 7845 30 1600 2173.21428
// 7877 20 1200 2173.21428
// 7901 30 1050 2173.21428
// 7903 20 3100 2173.21428
// 7935 10 1400 2173.21428

// 45. Finding the last five records from the table
// Now, if you want to fetch the last eight records from the table then it is always difficult to get such data if your table contains huge information. For example, you want to get the last 8 records from the employee table then you can use rownum and a union clause. The rownum is temporary in SQL.

// For example,

// 1
// 2
// 3
// Select * from Employee A where rownum <=8
// union
// select * from (Select * from Employee A order by rowid desc) where rownum <=8;
// The above SQL query will give you the last eight records from the employee table where rownum is a pseudo column. It indexes the data in an output set.

// 46. LAG
// The LAG is applied to get data from a prior row. This is an analytical function. For example, the following query gives the salary from the prior row to compute the difference between the salary of the current row and that of the prior row. In this query, the ORDER BY of the LAG function is applied. The default is 1 if you do not define offset. The arbitrary default condition is given if the offset moves past the range of the window. The default is null if you do not define default.

// Syntax
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// SELECT dtno,
//        eno,
//        emname,
//        job,
//        salary,
//        LAG(sal, 1, 0) OVER (PARTITION BY dtno ORDER BY salary) AS salary_prev
// FROM   employee;
// Output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// DTNO ENO ENAME JOB SAL SAL_PREV
// ---------- ---------- ---------- --------- ---------- ----------
// 10 7931 STEVE CLERK 1300 0
// 10 7783 JOHN MANAGER 2450 1300
// 10 7834 KING PRESIDENT 5000 2450
// 20 7364 ROBIN CLERK 800 0
// 20 7876 BRIAN CLERK 1100 800
// 20 7567 SHANE MANAGER 2975 1100
// 20 7784 SCOTT ANALYST 3000 2975
// 20 7908 KANE ANALYST 3000 3000
// 30 7900 JAMES CLERK 950 0
// 30 7651 CONNER SALESMAN 1250 950
// 30 7522 MATTHEW SALESMAN 1250 1250
// 30 7843 VIVIAN SALESMAN 1500 1250
// 30 7494 ALLEN SALESMAN 1600 1500
// 30 7695 GLEN MANAGER 2850 1600

// 47. LEAD
// The LEAD is also an analytical query that is applied to get data from rows extra down the output set. The following query gives the salary from the next row to compute the deviation between the salary of the prevailing row and the subsequent row. The default is 1 if you do not define offset. The arbitrary default condition is given if the offset moves past the range of the window. The default is null if you do not define default.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// SELECT eno,
//        empname,
//        job,
//        salary,
//        LEAD(salary, 1, 0) OVER (ORDER BY salary) AS salary_next,
//        LEAD(salary, 1, 0) OVER (ORDER BY salary) - salary AS salary_diff
// FROM   employee;
 
// ENO EMPNAME JOB SALARY SALARY_NEXT SALARY_DIFF
// ---------- ---------- --------- ---------- ---------- ----------
// 7369 STEVE CLERK 800 950 150
// 7900 JEFF CLERK 950 1100 150
// 7876 ADAMS CLERK 1100 1250 150
// 7521 JOHN SALESMAN 1250 1250 0
// 7654 MARK SALESMAN 1250 1300 50
// 7934 TANTO CLERK 1300 1500 200
// 7844 MATT SALESMAN 1500 1600 100
// 7499 ALEX SALESMAN 1600 2450 850
// 7782 BOON MANAGER 2450 2850 400
// 7698 BLAKE MANAGER 2850 2975 125
// 7566 JONES MANAGER 2975 3000 25
// 7788 SCOTT ANALYST 3000 3000 0
// 7902 FORD ANALYST 3000 5000 2000
// 7839 KING PRESIDENT 5000 0 -5000

// 48. PERCENT_RANK
// The PERCENT_RANK analytic query. The ORDER BY clause is necessary for this query. Excluding a partitioning clause from the OVER clause determines the entire output set is interpreted as a separate partition. The first row of the standardized set is indicated 0 and the last row of the set is indicated 1. For example, the SQL query example gives the following output.

// Syntax
// 1
// 2
// 3
// 4
// 5
// 6
// SELECT
//      prdid, SUM(amount),
//      PERCENT_RANK() OVER (ORDER BY SUM(amount) DESC) AS percent_rank
//      FROM sales
//      GROUP BY prdid
//      ORDER BY prdid;
// Output
// 1
// 2
// 3
// 4
// PRDID        SUM(AMOUNT)  PERCENT_RANK
// ----------- ----------- ------------
//           1    22623.5            0
//           2   223927.08           1

// 49. MIN
// Utilizing a blank OVER clause converts the MIN into an analytic function. This is also an analytical query. In this, the entire result set is interpreted as a single partition. It gives you the minimum salary for all employees and their original data. For example, the following query is displaying the use of MIN in the Select query.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// SELECT eno,
//        empname,
//        dtno,
//        salary,
//        MIN(salary) OVER (PARTITION BY dtno) AS min_result
// FROM   employee;
 
//      ENO   EMPNAME          DTNO     SALARY MIN_RESULT
// ---------- ---------- ---------- ---------- ---------------
//       7782 CLARK              10       2450            1300
//       7839 KING               10       5000            1300
//       7934 MILLER             10       1300            1300
//       7566 JONES              20       2975             800
//       7902 FORD               20       3000             800
//       7876 ADAMS              20       1100             800
//       7369 SMITH              20        800             800
//       7788 SCOTT              20       3000             800
//       7521 WARD               30       1250             950
//       7844 TURNER             30       1500             950
//       7499 ALLEN              30       1600             950
//       7900 JAMES              30        950             950
//       7698 BLAKE              30       2850             950
//       7654 MARTIN             30       1250             950

// 50. MAX
// Using a blank row OVER clause converts the MAX into an analytic function. The lack of a partitioning clause indicates the entire output set is interpreted as a separate partition. This gives the maximum salary for all employees and their original data. For example, the following query displays the use of MAX in the select query.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// SELECT eno,
//        empname,
//        dtno,
//        salary,
//        MAX(salary) OVER () AS max_result
// FROM   employee;
 
//      ENO   EMPNAME          DTNO       SALARY    MAX_RESULT
// ---------- ---------- ---------- ---------- ----------
//       7369 SMITH              20        800       3000
//       7499 ALLEN              30       1600       3000
//       7521 WARD               30       1250       3000
//       7566 JONES              20       2975       3000
//       7654 MARTIN             30       1250       3000
//       7698 BLAKE              30       2850       3000
//       7782 CLARK              10       2450       3000
//       7788 SCOTT              20       3000       3000
//       7839 KING               10       5000       3000
//       7844 TURNER             30       1500       3000
//       7876 ADAMS              20       1100       3000
//       7900 JAMES              30        950       3000
//       7902 FORD               20       3000       3000
//       7934 MILLER             10       1300       3000

// 51. Top- N queries
// Top-N queries give a process for restricting the number of rows delivered from organized assemblages of data. They are remarkably beneficial when users want to give the top or bottom number of rows from a table.

// For example, the following query gives the 20 rows with 10 different values:

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// SELECT price
// FROM   sales_order
// ORDER BY price;
 
// PRICE
// ----------
// 100
// 100
// 200
// 200
// 300
// 300
// 400
// 400
// 500
// 500
// 600
 
// PRICE
// ----------
// 600
// 700
// 700
// 800
// 800
// 900
// 900
// 1000
// 1000
 
// 20 rows selected.

// 52. CORR Analytic Query
// The CORR analytic function is utilized to determine the coefficient of correlation. This query is also used to calculate the Pearson correlation coefficient. The function calculates the following on rows in the table with no null values. This query always returns the values between +1 and -1, which describe the following:

// Syntax: CORR(exp1, exp2) [ OVER (analytic_clause) ]

// Example
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// SELECT empid,
//        name,
//        dno,
//        salary,
//        job,
//        CORR(SYSDATE - joiningdate, salary) OVER () AS my_corr_val
// FROM   employee;

// 53. NTILE Analytic Query
// The NTILE enables users to split a sequence set into a detailed number of relatively similar groups, or containers, rows sanctioning. If the number of rows in the collection is less than the number of containers defined, the number of containers will be decreased. The basic syntax is as displayed below:

// NTILE(exp) OVER ([ partition_clause ] order_by)

// Example
// 1
// 2
// 3
// 4
// 5
// 6
// SELECT empid,
//        name,
//        dno,
//        salary,
//        NTILE(6) OVER (ORDER BY salary) AS container_no
// FROM   employee;

// 54. VARIANCE, VAR_POP, and VAR_SAMP Query
// The VARIANCE, VAR_POP, and VAR_SAMP are aggregate functions. These are utilized to determine the variance, group variance, and sample variance of a collection of data individually. As aggregate queries or functions, they decrease the number of rows, therefore the expression “aggregate”. If the data isn’t arranged we change the total rows in the Employee table to a separate row with the aggregated values. For example, the following query is displaying the use of these functions:

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// SELECT VARIANCE(salary) AS var_salary,
//        VAR_POP(salary) AS pop_salary,
//        VAR_SAMP(salary) AS samp_salary
// FROM   employee;
 
// VAR_SALARY   POP_SALARY   SAMP_SALARY
// ------------ ----------- ------------
// 1479414.97  1588574.81   1388717.27

// 55. STDDEV, STDDEV_POP, and STDDEV_SAMP Queries
// The STDDEV, STDDEV_POP, and STDDEV_SAMP aggregate queries or functions are applied to determine the standard deviation, population standard deviation, and cumulative sample standard deviation individually. As aggregate queries, they decrease the number of rows, therefore the expression “aggregate”. If the data isn’t arranged we convert all the rows in the EMPLOYEE table to a separate row. For example, the following query is displaying the use of all these functions.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// SELECT STDDEV(salary) AS stddev_salary,
//        STDDEV_POP(salary) AS pop_salary,
//        STDDEV_SAMP(salary) AS samp_salary
// FROM   employee;
 
// STDDEV_SALARY POP_SALARY SAMP_SALARY
// ---------- -------------- ---------------
// 1193.50     1159.588      1193.603
// If there is more than one account after dropping nulls, the STDDEV function gives the result of the STDDEV_SAMP. Using an empty OVER clause converts the STDDEV query result into an analytic query. The absence of a partitioning indicates the entire output set is interpreted as a particular partition, so we accept the standard deviation of the salary and the primary data.

// 56. Pattern Matching
// The pattern matching syntax adds various alternatives. Data must be treated precisely and in a proper form. The PARTITION BY and ORDER BY conditions of all SQL analytic queries is applied to split the data into accumulations and within each group. If no partitions are specified, it is considered the entire sequence set is one huge partition.

// For example,

// The MEASURES clause specifies the column result that will be provided for each match.

// Syntax
// 1
// 2
// 3
// MEASURES  STRT.tstamp AS initial_tstamp,
//           LAST(UP.tstamp) AS first_tstamp,
//           LAST(DOWN.tstamp) AS finished_tstamp
// Example
// 1
// 2
// 3
// 4
// DEFINE
//   UP AS UP.products_sold > PREV(UP.products_sold),
//   FLAT AS FLAT.products_sold = PREV(FLAT.products_sold),
//   DOWN AS DOWN.products_sold < PREV(DOWN.products_sold)

// 57. FIRST_VALUE
// The simplest way to get analytic functions is to begin by studying aggregate functions. An aggregate function collects or gathers data from numerous rows into a unique result row. For instance, users might apply the AVG function to get an average of all the salaries in the EMPLOYEE table. Let’s take a look at how First_Value can be used. The primary explanation for the FIRST_VALUE analytic function is displayed below.

// Syntax:
// 1
// 2
// 3
// 4
// 5
// FIRST_VALUE 
//   { (expr) [NULLS ]
//   | (expr [NULLS ])
//   }
//   OVER (analytic clause)
// Example
// 1
// 2
// 3
// 4
// 5
// 6
// SELECT eno,
//        dno,
//        salary,
//        FIRST_VALUE(salary) IGNORE NULLS 
//          OVER (PARTITION BY dno ORDER BY salary) AS lowest_salary_in_dept
// FROM   employee;
// The above query will ignore null values.

// 58. LAST_VALUE
// The primary explanation for the LAST_VALUE analytic query or function is displayed below.

// 1
// 2
// 3
// 4
// Syntax: LAST_VALUE
//   { (expr) [ { NULLS ]
//   | (expr [ NULLS ])
//   OVER (analytic clause)
// The LAST_VALUE analytic query is related to the LAST analytic function. The function enables users to get the last output from an organized column. Applying the default windowing to the output can be surprising. For example,

// 1
// 2
// 3
// 4
// 5
// 6
// SELECT eno,
//        dno,
//        salary,
//        LAST_VALUE(salary) IGNORE NULLS
//          OVER (PARTITION BY dno ORDER BY salary) AS highest_salary_in_dept
// FROM   employee;

// 59. Prediction
// The design sample foretells the gender and age of clients who are most expected to adopt an agreement card (target = 1). The PREDICTION function takes the price matrix correlated with the design and applies for marital status, and house size as predictors. The syntax of the PREDICTION function can also apply a piece of arbitrary GROUPING information when getting a partitioned model.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// SELECT client_gender, COUNT(*) AS ct, ROUND(AVG(age)) AS average_age
//    FROM mining_data_shop
//    WHERE PREDICTION(sample COST MODEL
//       USING client_marital_status, house_size) = 1
//    GROUP BY client_gender
//    ORDER BY client_gender;
    
// CUST_GENDER         CNT    AVG_AGE
// ------------ ---------- ----------
// F                   270         40
// M                   585         41

// 60. CLUSTER_SET
// CLUSTER_SET can get the data in one of the couple steps: It can use a mining type object to the information, or it can mine the data by performing an analytic clause that creates and uses one or more moving mining patterns.

// This example enumerates the properties that have the biggest influence on cluster distribution for client ID 1000. The query requests the CLUSTER_DETAILS and CLUSTER_SET functions, which use the clustering model my_sample.

// Example
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// SELECT S.cluster_id, prob,
//        CLUSTER_DETAILS(my_sample, S.cluster_id, 7 USING T.*) kset
// FROM
//   (SELECT v.*, CLUSTER_SET(my_sample, USING *) nset
//     FROM mining_data
//    WHERE client_id = 1000) T,
//   TABLE(T.nset) Q
// ORDER BY 2 DESC;  
// A cluster is a group table that distributes the corresponding data blocks i.e. all the tables are actually put together. For example, EMPLOYEE and DEPARTMENT tables are connected to the DNO column. If you cluster them, it will actually store all rows in the same data blocks.

// .. and TEN More Advanced SQL Queries for our Users!

// 61. WITH (Common Table Expressions)
// A common table expression (CTE) is a defined short result set that endures within the range of a particular statement and that can be called later within that statement, perhaps on many occasions. The following query is describing the CTE:

// Syntax
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// WITH all_emp
// AS
// (
// SELECT empId, BossId, FirstName, LastName
// FROM Emp
// WHERE BossId is NULL
 
// UNION ALL
 
// SELECT e.empId, e.BossId, e.FirstName, e.LastName
// FROM Emp e INNER JOIN all_emp r
// ON e.BossId = r.Id
// )
// SELECT * FROM all_emp

// 62. NANVL
// This function is utilized to deliver an optional value n1 if the inserted value n2 is NaN (not a number), and gives n2 if n2 is not a number. This function is used only for type BINARY_FLOAT. The following query is displaying its use:

// Example
// 1
// 2
// SELECT bin_float, NANVL(bin_float,0)
// FROM my_demo_table;

// 63. WIDTH_BUCKET
// This function is used to obtain the bucket number. In this, it gives the value of the expression that would come under after being assessed. The following query is displaying its use:

// Example
// 1
// 2
// 3
// 4
// 5
// SELECT emp_id, first_name,last_name,dept_id,mgr_id,
// WIDTH_BUCKET(department_id,20,40,10) "Exists in Dept"
// FROM emp
// WHERE mgr_id < 300
// ORDER BY "Exists in Dept";

// 64. COSH
// This function is used to deliver the hyperbolic cosine of a number. It accepts all numeric or non-numeric data types as an argument. The following query is displaying its use:

// Example
// 1
// SELECT COSH(0) "COSH of 0" FROM DUAL;

// 65. SOUNDEX
// The SOUNDEX function delivers a character string comprising the description of char. It allows users to match words that are spelled antagonistically, but sound similar in English. It does not support CLOB. The following query is displaying its use:

// Example
// 1
// 2
// 3
// 4
// SELECT last_name, first_name
// FROM hr.emp
// WHERE SOUNDEX(last_name)
// = SOUNDEX('SCOTTY');

// 66. TZ_OFFSET
// The TZ_OFFSET gives the time zone offset identical to the case based on the date the statement is given. The following query is displaying its use:

// Example
// 1
// SELECT TZ_OFFSET('US/Eastern') FROM DUAL;

// 67. CARDINALITY
// CARDINALITY is utilized to obtain the number of components in a nested table. It is supported in different versions. The following query is displaying its use:

// Example
// 1
// 2
// SELECT product_id, CARDINALITY(ad_mydocs_get)
// FROM my_media_table;

// 68. DUMP
// DUMP is one of the important string/char functions. It is utilized to get a VARCHAR2 value. The value delivered defines the data type code. The following query is displaying its use:

// Example
// 1
// 2
// SELECT DUMP('pqr', 1033)
// FROM DUAL;

// 69. PATH
// PATH is applied simply with the UNDER_PATH and EQUALS_PATH requirements. It gives the corresponding path that points to the resource defined in the main state. The following query is displaying its use:

// Example
// 1
// 2
// SELECT ANY_PATH FROM RESOURCE_VIEW
// WHERE EQUALS_PATH(res, '/sys/schemas/OE/www.pqr.com')=3;

// 70. UNISTR
// UNISTR accepts an expression that determines character data and delivers it in the general character set. It gives support to the Unicode string literals by allowing users to define the Unicode value. The following query is displaying its use:

// Example
// 1
// SELECT UNISTR('pqr\00e4\00f3\00f9') FROM DUAL;
 

// Database Queries in SQL
// These are some of the commonly used database queries in SQL.

// SELECT – database query used to extract data from a table.
// CREATE DATABASE – database query used to create a new database.
// DROP DATABASE – database query used to delete a database.
// CREATE TABLE – database query used to create a table in the specified database.
// ALTER TABLE – database query used to modify an existing table in the specified database
// DROP TABLE – database query used to delete an existing table in the specified database
// CREATE INDEX – Index creation query.
// CREATE VIEW – View creation query.
// DROP VIEW – View deletion query.
// CREATE PROCEDURE – Procedure creation query.
// CREATE FUNCTION – Function creation query.
// DROP PROCEDURE – Procedure deletion query.
// DROP FUNCTION – Function deletion query.
// Example of Query in a Database
// We will be looking at some SELECT examples of a query in a database, as this is the most common command.

// SELECT * FROM employeeTable WHERE emp_no = ‘12’;

// This query filters out results that do not match a specified search.

// SELECT * FROM sys.objects WHERE object_id=object_id(‘<table name>’);

// This database query will list all the columns of the table whose name matches the argument.

// Database Queries Examples
// The following are some database queries examples that deal with creating tables, in a bit more advanced fashion.

// Create a table with a primary key called “ID”.
// CREATE TABLE table_name (
// PRIMARY KEY(column_name)
// );
// Create a table with a non-unique index called “IDX” on column_name.
// CREATE INDEX idx_name ON table_name (column_name);
// Create a view with the name “VIEW1” that can be used to query data from table1. The view is created on columns column1 and column2. It must return the same number of rows as the underlying table, and it must return the same data type. In this case, we will return the maximum value for each column in the underlying table when queried against the view. The following query will be used to populate our view:
// CREATE VIEW view1 AS SELECT MAX(column1), MAX(column2) FROM table1;
// Common Database Queries
// Some more common database queries you will need are:

// 1)    The Maximum Value for a Column.

// SELECT MAX(column_name) FROM table_name
// 2)    The Minimum Value for a Column.

// SELECT MIN(column_name) FROM table_name
// 3)    The Count of Rows in a Table.

// SELECT COUNT(*) FROM table_name;
// DBMS Queries with Examples
// DBMS stands for DataBase Management System. Following are some DBMS queries with examples; these are very important for developers and database admins alike.

// 1. The List of Values for a Column.

// SELECT column_name, column_commalist FROM table_name;
// 2. The Difference between two Column Values.

// SELECT column_name(+) FROM table_name WHERE column_name(+) != value;
// III.         The List of Unique Values for a Column.

// SELECT DISTINCT column_name FROM table_name;
