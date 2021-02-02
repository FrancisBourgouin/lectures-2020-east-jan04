## Building an ERD 

### Example of ERD box

+------------+  
| Dealership |
+------------+
|   id       |
|  name      |
| address    |
| make_id    |
|            |
|            |
+------------+


+------------+  
| Make       |
+------------+
|  id        |
|  name      |
|  model_id  |
|  origin    |
|            |
|            |
+------------+
    

+------------+  
| Model      |
+------------+
|  id        |
|  Year      |
|  color_id  |
|  Package   |
|  Fuel Info |       
|            |
+------------+

+------------+  
| Color      |
+------------+
|  id        |
|  name      |
|            |
|            |
|            |       
|            |
+------------+

### Description of your relationship

dealership 1 -> M Make
make 1 (Ex. BMW) -> M Model (Ex. 5 Series)

### ERD describing the relationship

- Overview: Dealership will have several makes which will have many models
