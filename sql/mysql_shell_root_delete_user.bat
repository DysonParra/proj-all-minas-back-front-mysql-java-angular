: Add 'C:\Program Files\MySQL\MySQL Server 8.0\bin' to path environmet

:: Write your root pass when ask
mysql -u "root" -p -e ^
"^
    DROP USER IF EXISTS 'guest'@'localhost';^
"
