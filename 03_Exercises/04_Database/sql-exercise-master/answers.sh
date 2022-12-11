select * from students
select * from students where Age>30
select * from students where Gender='F' AND age=30
select Points from students where name='Alex'
INSERT INTO students (ID, Name, Age, Gender, Points)
VALUES (7, 'Assala', '22', 'F', '600')
UPDATE students set Points= 350 where Name='Basma'
UPDATE students set Points= 190 where Name='Alex'

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