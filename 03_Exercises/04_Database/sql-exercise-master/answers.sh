#Basic Queries
select Name from students;
select * from students where Age>30;
select * from students where Gender='F' AND age=30;
select Points from students where name='Alex';
INSERT INTO students (ID, Name, Age, Gender, Points);
VALUES (7, 'Assala', '22', 'F', '600');
UPDATE students set Points=(Points+50) where Name='Basma';
UPDATE students set Points=(POints-10) where Name='Alex';

#Creating table
create table graduates(
ID INTEGER Not Null Primary key AUTOINCREMENT,
Name varchar(255) Not Null Unique,
Age int,
Gender varchar(255),
Points int,
Graduation varchar(255));

INSERT INTO graduates (ID,Name,Age,Gender,Points)
SELECT ID,Name,Age, Gender, Points FROM students where name='Layal';

UPDATE graduates
SET Graduation = '08/09/2018'
WHERE name="Layal";

DELETE FROM students WHERE name='Layal';

#Joins
SELECT employees.Name, employees.Company, companies.Date
FROM employees
INNER JOIN companies ON employees.Company=companies.name;

SELECT employees.Name 
from employees
 INNER JOIN companies ON employees.Company=companies.Name AND Date<2000

SELECT companies.Name
FROM companies
INNER JOIN employees on companies.Name=employees.Company 
WHERE employees.Role='Graphic Designer';

#count&filter

SELECT name, MAX(Points) from students;
SELECT AVG(Points) FROM students;
SELECT COUNT(Name) FROM students where Points=500;
SELECT name from students where name LIKE ('%S%');
SELECT Name FROM students ORDER BY points DESC;