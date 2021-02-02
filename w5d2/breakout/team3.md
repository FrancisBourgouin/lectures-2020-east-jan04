# COPYRIGHT TEAM 3
## Building an ERD 

### Example of ERD box

+----------------------+
| REGION               |
+----------------------+
|id (PK) SERIAL        |
|name VARCHAR          |
|location TEXT         |
|dish_id (FK) INTEGER  |
|                      |
|                      |
+----------------------+

### Description of your relationship

#### FOODS seperated by culture
#### Table for culture
#### Many dishes per culture
#### Main ingredient per dish (ingredients are shared among dishes)
#### 


### ERD describing the relationship
+----------------------+
|    DISH              |
+----------------------+
|id (PK) SERIAL        |
|name VARCHAR          |
|origin_date DATE      |
|spicy_level scoville  |
|protein_source        |
|diet                  |
|main_ingredient               
|    |
+----------------------+

+-------------+
| RECIPE       |
+-------------+
|id(PK) SERIAL |
|dish_id (FK)  |
|               |
|             |
|             |
|             |
+-------------+


+-------------+
| INGREDIENT  |
+-------------+
|id(PK) SERIAL      |
|name VARCHAR        |
|price             |
|             |
|             |
|             |
+-------------+