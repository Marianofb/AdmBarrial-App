RESTORE DATABASE [Nuevo_AdmBarrial]
FROM DISK = 'C:\Users\maona\OneDrive\Desktop\DAI1_TPO_CODIGO\BackEnd\DUMP_SqlServer\AdmBarrial.bak'
WITH 
    MOVE 'Municipio' TO 'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Nuevo_Municipio.mdf',
    MOVE 'Municipio_log' TO 'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Nuevo_Municipio_log.ldf',
    REPLACE;