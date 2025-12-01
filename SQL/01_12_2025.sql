SELECT
	d.nombre AS director,
	COUNT(*) AS total_peliculas
FROM peliculas p
JOIN directores d
	ON p.id_director = d.id_director
GROUP BY director
ORDER BY total_peliculas DESC;

SELECT
	d.nombre AS director,
	COUNT(*) AS total_peliculas
FROM peliculas p
JOIN directores d
	ON p.id_director = d.id_director
GROUP BY d.nombre
ORDER BY total_peliculas DESC;

SELECT
	id_director,
	COUNT(*) AS numero_peliculas
FROM peliculas
GROUP BY id_director
ORDER BY id_director

SELECT
	anio_estreno,
	ROUND(AVG(duracion_minutos), 2) AS duracion_media
FROM peliculas
GROUP BY anio_estreno
ORDER BY anio_estreno

SELECT
	anio_estreno,
	COUNT(*) AS numero_peliculas
FROM peliculas
GROUP BY anio_estreno
ORDER BY anio_estreno 

SELECT
	anio_estreno,
	COUNT(*) AS numero_peliculas
FROM peliculas
GROUP BY anio_estreno
ORDER BY anio_estreno DESC

SELECT
	anio_estreno,
	COUNT(*) AS numero_peliculas
FROM peliculas
GROUP BY anio_estreno
ORDER BY anio_estreno

SELECT
	anio_estreno,
	COUNT(*) AS numero_peliculas
FROM peliculas
GROUP BY anio_estreno

SELECT 
	SUM(duracion_minutos) AS duracion_total
FROM peliculas;

SELECT 
	ROUND(AVG(duracion_minutos), 2) AS duracion_media
FROM peliculas;

SELECT 
	ROUND(AVG(duracion_minutos)) AS duracion_media
FROM peliculas;

SELECT 
	ROUND(AVG(duracion_minutos), 2) AS duracion_media
FROM peliculas;

SELECT 
	AVG(duracion_minutos) AS duracion_media
FROM peliculas;

SELECT 
	MIN(duracion_minutos) AS duracion_minima,
	MAX(duracion_minutos) AS duracion_maxima
FROM peliculas;

SELECT COUNT(DISTINCT pais) AS paises_unicos
FROM directores

SELECT COUNT(*) AS total_peliculas_antes_2000
FROM peliculas
WHERE anio_estreno < 2000;

SELECT COUNT(*) AS total_peliculas_2000
FROM peliculas
WHERE anio_estreno = 2000;