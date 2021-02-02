## Building an ERD

### Example of ERD box

+-----------------+  
| HOUSE           |
+-----------------+
| ID    (SERIAL PRIMARY KEY NOT NULL)  |
| City  (Text)                         |
| Neighbourhood VARCHAR(255)           |
| Postal Code VARCHAR(6)               |
| Owner ID VARCHAR(6)                  |
| Square ft. INTEGER                   |
| Type    TEXT                         |
| Price   INTEGER                      |
| Listing date   DATE                  |
+-----------------+
|OWNER        |
+-------------+
|ID   (Serial)          |
|name VARCHAR(200)      |
|income (bigint)        |
|credit_score (integer) |
|                       |
|                        |
+-------------+

### Description of your relationship

- Houses:
A house can be owned by one person/household/family/whatever
A person can own multiple houses

House       Address
________    ________
ID          Street #
Square ft.  Stree



### ERD describing the relationship


