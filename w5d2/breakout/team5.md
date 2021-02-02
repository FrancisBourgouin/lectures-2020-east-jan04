## Building an ERD 

### Example of ERD box
Where is zoom ,lol I guess I ve been fush out, lol. We do a client

lol its there
+------------+
| Customer   |
+------------+
|id          |
|name        |
|email       |
|phone       |
|password    |
|address     |
+------------+

+------------+
| Order      |
+------------+
|id          |
|customer_id|
|price       |
|quantity    |
|delivered   |
|            |
+------------+

### Description of your relationship

One customer have an order history with one or many orders

### ERD describing the relationship

Customer X is having a Y order with info about it's order
_customer_id is the foreign key in order that point to the customer table
An order must have a Customer so NOT NULL for this key must be implemented
A customer can have no order history
