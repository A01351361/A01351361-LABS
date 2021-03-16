SET DATEFORMAT dmy; 
-- Consulta de una tabla completa
select * from materiales
select * from proyectos
select * from entregan
select * from proveedores
-- Selecci�n
select * from materiales
where clave=1000

-- Proyecci�n
select clave,rfc,fecha from entregan

-- Reuni�n Natural
select * from materiales,entregan
where materiales.clave = entregan.clave

--Si alg�n material no ha se ha entregado �Aparecer�a en el resultado de esta consulta?
-- Si porque muestra solo las entregas no tiene condicional si no se entrega.

-- Reuni�n con criterio espec�fico
select * from entregan,proyectos
where entregan.numero < = proyectos.numero

--Uni�n (se ilustra junto con selecci�n)
(select * from entregan where clave=1450)
union
(select * from entregan where clave=1300)
--�Cu�l ser�a una consulta que obtuviera el mismo resultado sin usar el operador Uni�n? Compru�balo.
-- select * from entregan where clave=1450 XOR clabe=1300

-- Intersecci�n (se ilustra junto con selecci�n y proyecci�n)
(select clave from entregan where numero=5001)
intersect
(select clave from entregan where numero=5018)

-- Diferencia (se ilustra con selecci�n )
(select * from entregan)
except
(select * from entregan where clave=1000)

-- Producto cartesiano
select * from entregan,materiales
-- �C�mo est� definido el n�mero de tuplas de este resultado en t�rminos del n�mero de tuplas de entregan y de materiales?
-- El numero de tuplas de este resultado es de forma ASC

--Construcci�n de consultas a partir de una especificaci�n
--Plantea ahora una consulta para obtener las descripciones de los materiales entregados en el a�o 2000.
select materiales.Descripcion from entregan,materiales where YEAR(Fecha) = 2000
--�Por qu� aparecen varias veces algunas descripciones de material?
-- Por que ense�a todas las entregas que se hicieron en el 2000, es decir se puede repetir el producto.
select distinct materiales.Descripcion from entregan,materiales where YEAR(Fecha) = 2000
--�Qu� resultado obtienes en esta ocasi�n? 
-- Se obtienen las descripci�nes sin que se repitan.
select proyectos.numero, proyectos.denominacion, entregan.cantidad, entregan.fecha from proyectos, entregan order by  numero asc,Fecha asc

--Operadores de cadena
SELECT * FROM materiales where Descripcion LIKE 'Si%'
-- Un error porque era materiales, pero con materiales me arroja los que empiecen con Si.

--Explica que hace el s�mbolo '%'.
-- Toma las primeras siglas y esconde lo demas para las consultas.
--�Qu� sucede si la consulta fuera : LIKE 'Si' ?
-- Solo tomaria las descripciones que digan Si
--�Qu� resultado obtienes?
-- Ninguno
--Explica a qu� se debe este comportamiento.
-- Por que estas pidiendo como si fuera un where que necesita que tener exactamente lo mismo.

SELECT (Apellido + ', ' + Nombre) as Nombre FROM Personas;

DECLARE @foo varchar(40);
DECLARE @bar varchar(40);
SET @foo = '�Que resultado';
SET @bar = ' ���??? '
SET @foo += ' obtienes?';
PRINT @foo + @bar;


--�Qu� resultado obtienes de ejecutar el siguiente c�digo?
-- Obtendria la concatenaci�n de dos atributos
--�Para qu� sirve DECLARE?
-- para declarar m�s variables.
--�Cu�l es la funci�n de @foo?
-- es una variables donde guarda lo que se le declaro que en este caso es �Que resultado obtienes?
--�Que realiza el operador SET?
-- Declara la variable


SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';
-- Busca los RFC que empiecen con A a la D
SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';
--Busca los RFC que no contengan A al principio
SELECT Numero FROM Entregan WHERE Numero LIKE '___6';
--Busca los RFC que contengan 6 en el cuarto caracter o en el ultimo.

SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;

--�C�mo filtrar�as rangos de fechas?
--WHERE YEAR(fECHA) Between 2000 and 2002;

SELECT RFC,Cantidad, Fecha,Numero
FROM [Entregan]
WHERE [Numero] Between 5000 and 5010 AND
Exists ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )

--�Qu� hace la consulta?
-- Toma los numeros entre 5000 y 5010 mientras exista en los proveedores y la razon social contra La en los primeros caracteres y esten en la tabla de entrega y proveedores.
--�Qu� funci�n tiene el par�ntesis ( ) despu�s de EXISTS?
-- Regresa un TRUE en caso de que lo encuentre.

SELECT RFC, Cantidad, Fecha, Numero
FROM [Entregan]
WHERE [Numero] Between 5000 and 5010 AND
RFC in ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )

--Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado, pero usando el operador NOT IN Realiza un ejemplo donde apliques alg�n operador : ALL, SOME o ANY.
SELECT RFC, Cantidad, Fecha, Numero
FROM [Entregan]
WHERE [Numero] Between 5000 and 5010 AND
RFC not in ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial not LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )


SELECT TOP 2 * FROM Proyectos
--�Qu� hace la siguiente sentencia? Explica por qu�.
-- Arroja los primeros 2 filas de la tabla proyectos

SELECT TOP Numero FROM Proyectos
-- Arroja un error ya que el numero es un atributo y no puede mandar el de arriba.

ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);
UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;

--�Qu� consulta usar�as para obtener el importe de las entregas es decir, el total en dinero de lo entregado, basado en la cantidad de la entrega y el precio del material y el impuesto asignado?
SELECT entregan.cantidad, materiales.Costo, (cantidad*costo) as 'Dineroentregado' , (cantidad*costo + PorcentajeImpuesto) as 'Dinero con Impuestos'
FROM entregan, Materiales


--    Los materiales (clave y descripci�n) entregados al proyecto "M�xico sin ti no estamos completos".
SELECT materiales.clave, materiales.Descripcion 
FROM materiales,entregan, proyectos 
WHERE [Materiales].[clave] = [Entregan].[clave]
and Entregan.numero = (SELECT Proyectos.numero
FROM Proyectos
WHERE Proyectos.Denominacion = 'Mexico sin ti no estamos completos' )

--      Los materiales (clave y descripci�n) que han sido proporcionados por el proveedor "Acme tools".

SELECT materiales.clave, materiales.Descripcion 
FROM materiales,entregan, proyectos 
WHERE [Materiales].[clave] = [Entregan].[clave]
and Entregan.RFC = (SELECT Proveedores.RFC
FROM Proveedores
WHERE Proveedores.RazonSocial = 'Acme tools' )

--      El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.

SELECT distinct Proveedores.RFC
FROM materiales,entregan,Proveedores
WHERE Proveedores.[RFC] = [Entregan].[RFC] and YEAR(Entregan.Fecha)=2000
and Entregan.Cantidad > 300

--      El Total entregado por cada material en el a�o 2000.
SELECT  materiales.descripcion, sum(costo) as 'Total entregado'
FROM materiales,entregan
WHERE YEAR(Entregan.Fecha)=2000
GROUP BY Descripcion

--      La Clave del material m�s vendido durante el 2001. (se recomienda usar una vista intermedia para su soluci�n)

SELECT  materiales.clave
FROM materiales,entregan
WHERE YEAR(Entregan.Fecha)=2001 and MAX(entregan.cantidad)
GROUP BY materiales.clave


--      Productos que contienen el patr�n 'ub' en su nombre.

SELECT * FROM materiales where Descripcion LIKE '%ub%'

--      Denominaci�n y suma del total a pagar para todos los proyectos.

--      Denominaci�n, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acci�n que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas).

--      Denominaci�n, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acci�n que no se encuentran apoyando al proyecto Educando en Coahuila (Sin usar vistas, utiliza not in, in o exists).

--      Costo de los materiales y los Materiales que son entregados al proyecto Televisa en acci�n cuyos proveedores tambi�n suministran materiales al proyecto Educando en Coahuila.

SELECT distinct materiales.costo, materiales.Descripcion 
FROM materiales,entregan, proyectos, Proveedores
WHERE [Materiales].[clave] = [Entregan].[clave]
and Entregan.numero = (SELECT Proyectos.numero
FROM Proyectos
WHERE Proyectos.Denominacion = 'Televisa en acci�n' )

and Proveedores.RFC = (SELECT entregan.rfc
FROM entregan
WHERE Entregan.numero = (SELECT Proyectos.numero
FROM Proyectos
WHERE (Proyectos.Denominacion = 'Educando en Coahuila' )))