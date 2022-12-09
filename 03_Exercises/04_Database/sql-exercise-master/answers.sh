select * from students
select * from students where Age>30
select * from students where Gender='F' AND age=30
select Points from students where name='Alex'
INSERT INTO students (ID, Name, Age, Gender, Points)
VALUES (7, 'Assala', '22', 'F', '600')
UPDATE students set Points= 350 where Name='Basma'
UPDATE students set Points= 190 where Name='Alex'