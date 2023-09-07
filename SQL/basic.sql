-- https://proglib.io/p/sql-cheat-sheet
-- DEFAULT – устанавливает значение по умолчанию;
-- AUTO_INCREMENT – автоматически инкрементирует значение поля для каждой следующей записи;
-- NOT NULL – запрещает создавать запись с пустым значением поля;
-- UNIQUE – следит, чтобы поле или комбинация полей оставались уникальны в пределах таблицы;
-- PRIMARY KEY – UNIQUE + NOT NULL. Первичный ключ должен однозначно идентифицировать запись таблицы, поэтому он должен быть уникальным и не может оставаться пустым;
-- CHECK – проверяет значение поля на соответствие некоторому условию.
--  age INT CHECK(age > 50)

-- CREATE TABLE table_name (
--     column1 datatype,
--     column2 datatype,
--     column3 datatype,
--    ....
-- );

CREATE TABLE coinses (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	weight INT DEFAULT 0,
	metal VARCHAR(20),
	color VARCHAR(20),
    year INT
);

-- RENAME
ALTER TABLE coinses RENAME TO coins;
-- ADD
ALTER TABLE coins ADD quality INT;
-- DROP COLUMN
ALTER TABLE coins DROP COLUMN color;
-- CHANGE
ALTER TABLE portions CHANGE metal material VARCHAR(20) NOT NULL;

-- удалить таблицу coins
DROP TABLE coins;
-- очистить таблицу coins
TRUNCATE TABLE coins;
-- Операция DELETE блокирует каждую строку, а TRUNCATE — всю таблицу. Операция TRUNCATE не возвращает какого-то осмысленного значения (обычно возвращает 0) в отличие от DELETE, которая возвращает число удаленных строк.
-- DELETE
DELETE FROM coins



--LIKE
-- % any amount of symbols
-- _ any one symbol



SELECT LOWER(title)
FROM movies;


SELECT UPPER(title)
FROM movies;


-- <
-- >
-- =
-- <>
-- <=
-- >=


--MAX
--MIN
--COUNT
--SUM
-- AVG

--GROUP BY


-- DISTINCT

-- IS NULL

-- UNION must have the same number of columns. The columns must also have the same data types. Also, the columns in each SELECT statement must be in the same order.
-- UNION removes the duplicate records.

-- SELECT firstname, lastname, age FROM Customers
-- UNION
-- SELECT firstname, lastname, age FROM Contacts

-- UNION ALL is similar to UNION, but does not remove the duplicates:

-- SELECT firstname, lastname, age FROM Customers
-- UNION ALL
-- SELECT firstname, lastname, age FROM Contacts

-- SELECT name, year FROM Books WHERE year > 1900 UNION SELECT name , 2022 as year FROM new ORDER BY name ASC