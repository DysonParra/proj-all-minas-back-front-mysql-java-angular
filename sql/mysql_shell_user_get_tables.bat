: Add 'C:\Program Files\MySQL\MySQL Server 8.0\bin' to path environmet

:: Write your guest pass when ask
mysql -u "guest" -p -e ^
"^
    USE minas;^
    show tables;^
"
