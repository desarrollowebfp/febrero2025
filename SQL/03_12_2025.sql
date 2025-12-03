SELECT
	p.titulo,
	d.nombre AS director
FROM peliculas p
JOIN directores d
	ON p.id_director = d.id_director
ORDER BY director ASC, p.titulo DESC
LIMIT 10 OFFSET 10

SELECT
	p.titulo,
	d.nombre AS director
FROM peliculas p
JOIN directores d
	ON p.id_director = d.id_director
ORDER BY director ASC, p.titulo DESC
LIMIT 10

SELECT
	p.titulo,
	d.nombre AS director
FROM peliculas p
JOIN directores d
	ON p.id_director = d.id_director
ORDER BY director ASC, p.titulo DESC

SELECT
	p.titulo,
	d.nombre AS director
FROM peliculas p
JOIN directores d
	ON p.id_director = d.id_director
ORDER BY p.titulo ASC, director DESC

SELECT titulo, anio_estreno
FROM peliculas
WHERE anio_estreno >= 2000
ORDER BY anio_estreno DESC
LIMIT 5 OFFSET 5

SELECT titulo, anio_estreno
FROM peliculas
WHERE anio_estreno >= 2000
ORDER BY anio_estreno DESC
LIMIT 10 

SELECT titulo, anio_estreno
FROM peliculas
WHERE anio_estreno >= 2000
ORDER BY anio_estreno DESC
LIMIT 5 OFFSET 5

SELECT titulo, anio_estreno
FROM peliculas
WHERE anio_estreno >= 2000
ORDER BY anio_estreno DESC
LIMIT 5

SELECT titulo, anio_estreno
FROM peliculas
WHERE anio_estreno >= 2000
ORDER BY anio_estreno DESC

SELECT titulo, duracion_minutos
FROM peliculas
ORDER BY duracion_minutos DESC, titulo ASC

SELECT titulo, anio_estreno
FROM peliculas
ORDER BY duracion_minutos DESC, titulo ASC

SELECT titulo, anio_estreno
FROM peliculas
ORDER BY anio_estreno DESC, titulo ASC

SELECT titulo, anio_estreno
FROM peliculas
ORDER BY titulo ASC, anio_estreno

SELECT titulo, anio_estreno
FROM peliculas
ORDER BY anio_estreno ASC, titulo ASC

SELECT titulo, anio_estreno
FROM peliculas
ORDER BY titulo ASC, anio_estreno ASC

SELECT * 
FROM peliculas
ORDER BY anio_estreno

SELECT * 
FROM peliculas
ORDER BY titulo

SELECT * 
FROM peliculas
ORDER BY titulo DESC

SELECT * 
FROM peliculas
ORDER BY titulo ASC
