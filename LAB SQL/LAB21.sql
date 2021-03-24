--Erick Gerardo Calderon Reyes
--A01351361
 
/* La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.*/
SELECT SUM(Cantidad) as 'Total Unidades', SUM(Cantidad*(Costo + Costo *PorcentajeImpuesto)) as 'Ingresos Totales'
FROM Entregan E, Materiales M
WHERE E.Clave=M.Clave

/*Resultado
Total Unidades Ingresos Totales
48262			36705084.74*/

/* Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.*/
select RazonSocial, count(*) as 'Numero de entregas', sum(Cantidad * (Costo + Costo * PorcentajeImpuesto/100)) as 'Ingresos totales'
from Proveedores P, Entregan E, Materiales M
where E.RFC=P.RFC and M.clave=E.clave
group by RazonSocial
order by 'Ingresos totales' desc

/*Resultado
RazonSocial	Numero de entregas	Ingresos Totales
La fragua	18					2301675.69
Tubasa		15					2278398.993*/

/* Por cada material obtener la clave y descripción del material, 
la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, 
el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400. */

SELECT M.Clave, descripcion, sum(Cantidad) as 'total entregado',  min(Cantidad) as 'minimo entregado', max(Cantidad) as 'maximo entregado', sum(cantidad * ( costo + ( costo * porcentajeimpuesto / 100))) as 'ingresos totales'
FROM Entregan as E inner join  Materiales as M
ON E.clave=M.clave
GROUP BY M.clave, Descripcion
HAVING avg(Cantidad) > 400

/*Resultado
clave	descripcion		total entregado	Min Entregado	Max Entregado Ingresos Totales
1010	Varilla 4/32	1718			523				667				201560.91

*/

/* Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, 
detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio 
sea menor a 500.*/

SELECT RazonSocial, AVG(Cantidad) as 'Promedio Entregado', M.Clave, Descripcion
FROM entregan as E, materiales as M, Proveedores as P
WHERE E.Clave=M.Clave and E.rfc=P.rfc
GROUP BY RazonSocial, M.Clave, Descripcion
HAVING AVG(Cantidad) > 500
ORDER BY Clave

/*Resultado
RazonSocial	Promedio Entregado	Clave	Descripcion
Oviedo		572.66				1010	Varilla 4/32	
La Ferre	562.666666			1100	Block
*/

/*Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: 
aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio 
entregada sea mayor a 450.*/

SELECT RazonSocial, AVG(Cantidad) as 'Promedio Entregado',  M.Clave, Descripcion
FROM entregan as E, materiales as M, Proveedores as P
WHERE E.Clave=M.Clave and E.RFC=P.RFC
GROUP BY RazonSocial, M.Clave, Descripcion
HAVING AVG(Cantidad) not between (370) and (450)
order by 'Promedio Entregado' desc

/*Resultado
RazonSocial	Promedio Entregado	Clave	Descripcion
Oviedo		572.66				1010	Varilla 4/32	
La Ferre	562.666666			1100	Block
Oviedo		509.666666			1410	Pintura B1021
*/

--Parte 2 - INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;

/*Considerando que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstrofes, los valores numéricos 
se escriben directamente y los de fecha, como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales.*/

INSERT INTO Materiales VALUES (1440, 'Soldadura 1020', 70, 2.5);
INSERT INTO Materiales VALUES (1450, 'Soldadura 1030', 90, 2.4);
INSERT INTO Materiales VALUES (1460, 'Microfibra', 100, 2.46);
INSERT INTO Materiales VALUES (1470, 'Disco 1010', 200, 2.17);
INSERT INTO Materiales VALUES (1480, 'Dsico 1030', 325, 2.7);

-- Parte 3 - Con base en lo que se explica en la lectura sobre consultas con roles y subconsultas, plantea y ejecuta las siguientes consultas:


/* Clave y descripción de los materiales que nunca han sido entregados.*/

SELECT DISTINCT M.clave, descripcion
FROM entregan as E, Materiales as M
WHERE M.Clave not in (Select Clave from Entregan)

/*Resultado
Clave	descripcion
1440	Soldadura
1450	Soldadura 1030
1460	Microfibra
*/

/* Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.*/

SELECT DISTINCT Descripcion
FROM Materiales as M, Entregan as E, Proyectos as P
where M.Clave = E.Clave
and P.Numero = E.Numero
and Denominacion = 'CIT Yucatan'

/*Resultado
Descripcion
Cantera gris
Recubrimiento P1019
Tubería 3.8
Varilla 3/18
*/

/* Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada 
es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.*/

SELECT RazonSocial, AVG(Cantidad) as 'Promedio Cantidad'
FROM Proveedores as P, Entregan as E
Where P.RFC = E.RFC
Group by RazonSocial
HAVING AVG(Cantidad) < (SELECT AVG(Cantidad) from Entregan where RFC = 'VAGO780901')

/*RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades 
totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.*/

CREATE VIEW view1 AS
select Cantidad from Entregan where fecha between '20000101' and '20010101'

CREATE VIEW view2 AS
select Cantidad from Entregan where fecha between '20010101' and '20020101'

Select distinct Proveedores.RFC, RazonSocial
from Proveedores, entregan, Proyectos, view1, view2
Where Proveedores.RFC = Entregan.RFC and Proyectos.Numero = Entregan.Numero and Denominacion = 'Infonavit Durango' and view1.Cantidad > view2.Cantidad

/*Resultado
RFC			RazonSocial
BBBB800101  Oviedo
FFFF800101  Comex
GGGG800101  Tabiquera del centro
*/
