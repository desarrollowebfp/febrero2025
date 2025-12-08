SELECT
	p.titulo,
	a.nombre AS actor,
	pa.papel
FROM peliculas AS p
INNER JOIN pelicula_actor AS pa
	ON p.id_pelicula = pa.id_pelicula
INNER JOIN actores AS a
	ON pa.id_actor = a.id_actor

    SELECT * FROM pelicula_actor

INSERT INTO pelicula_actor(id_pelicula, id_actor, papel) VALUES
(12, 1, 'Protagonista'),
(12, 2, 'Protagonista'),
(1, 1, 'Protagonista')

INSERT INTO actores (nombre, pais, fecha_nacimiento) VALUES
('Leonardo DiCaprio', 'USA', '1974-11-11'),
('Kate Winslet', 'Reino Unido', '1975-10-05'),
('Morgan Freeman', 'USA', '1937-06-01')

CREATE TABLE pelicula_actor (
	id_pelicula INT NOT NULL REFERENCES peliculas(id_pelicula),
	id_actor INT NOT NULL REFERENCES actores(id_actor),
	papel VARCHAR(70),
	PRIMARY KEY (id_pelicula, id_actor)
)

SELECT
	d.nombre,
	d.pais,
	p.titulo
FROM directores AS d
INNER JOIN peliculas AS p
	ON d.id_director = p.id_director

SELECT
	d.nombre,
	d.pais,
	p.titulo
FROM directores AS d
JOIN peliculas AS p
	ON d.id_director = p.id_director

SELECT
	d.nombre,
	d.pais,
	p.titulo
FROM directores AS d
LEFT JOIN peliculas AS p
	ON d.id_director = p.id_director

    SELECT 
	p.id_pelicula,
	p.titulo,
	p.anio_estreno,
	d.nombre AS nombre_director,
	d.pais AS pais_director
FROM peliculas AS p
LEFT JOIN directores AS d
	ON p.id_director = d.id_director

INSERT INTO directores(nombre, pais, fecha_nacimiento) 
VALUES
('Antonio Rosales', 'España', '1990-10-26')

SELECT 
	p.id_pelicula,
	p.titulo,
	p.anio_estreno,
	d.nombre AS nombre_director,
	d.pais AS pais_director
FROM peliculas AS p
INNER JOIN directores AS d
	ON p.id_director = d.id_director

    SELECT 
	p.id_pelicula,
	p.titulo,
	p.anio_estreno,
	d.nombre AS nombre_director,
	d.pais AS pais_director
FROM peliculas AS p
INNER JOIN directores AS d
	ON p.id_director = d.id_director