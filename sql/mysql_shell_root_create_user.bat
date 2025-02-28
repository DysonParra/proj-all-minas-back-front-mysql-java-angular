: Add 'C:\Program Files\MySQL\MySQL Server 8.0\bin' to path environmet

:: Write your root pass when ask
mysql -u "root" -p -e ^
"^
    CREATE USER 'guest'@'localhost' IDENTIFIED BY 'Dev@dmin';^
    GRANT ALL PRIVILEGES ON * . * TO 'guest'@'localhost';^
    FLUSH PRIVILEGES;^
"
