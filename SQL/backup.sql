--
-- PostgreSQL database dump
--

\restrict QruCZNrhJjKLdxKVHjEFmlWhKEkQvRmnhIfdeCQ2MhihVcVutlOOmbR2tumdNpe

-- Dumped from database version 17.7 (Homebrew)
-- Dumped by pg_dump version 18.0

-- Started on 2025-12-03 21:06:27 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3838 (class 0 OID 16410)
-- Dependencies: 218
-- Data for Name: directores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.directores (id_director, nombre, pais, fecha_nacimiento) FROM stdin;
1	Christopher Nolan	Reino Unido	1970-07-30
2	Steven Spielberg	Estados Unidos	1946-12-18
3	Pedro Almodóvar	España	1949-09-25
4	Quentin Tarantino	Estados Unidos	1963-03-27
5	Martin Scorsese	Estados Unidos	1942-11-17
6	James Cameron	Canadá	1954-08-16
7	Ridley Scott	Reino Unido	1937-11-30
8	Guillermo del Toro	México	1964-10-09
9	Wes Anderson	Estados Unidos	1969-05-01
10	Francis Ford Coppola	Estados Unidos	1939-04-07
11	Denis Villeneuve	Canadá	1967-10-03
\.


--
-- TOC entry 3840 (class 0 OID 16417)
-- Dependencies: 220
-- Data for Name: peliculas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peliculas (id_pelicula, titulo, anio_estreno, duracion_minutos, id_director) FROM stdin;
1	Inception	2010	148	1
2	Interstellar	2014	169	1
3	E.T. el extraterrestre	1982	115	2
4	Parque Jurásico	1993	127	2
5	Todo sobre mi madre	1999	101	3
6	Hable con ella	2002	112	3
7	Pulp Fiction	1994	154	4
8	Kill Bill: Volumen 1	2003	111	4
9	Django desencadenado	2012	165	4
10	Taxi Driver	1976	114	5
11	El lobo de Wall Street	2013	180	5
12	Titanic	1997	195	6
13	Avatar	2009	162	6
14	Alien, el octavo pasajero	1979	117	7
15	Gladiator	2000	155	7
16	El laberinto del fauno	2006	118	8
17	La forma del agua	2017	123	8
18	El gran hotel Budapest	2014	99	9
19	Moonrise Kingdom	2012	94	9
20	El padrino	1972	175	10
21	Apocalypse Now	1979	147	10
22	La llegada	2016	116	11
23	Blade Runner 2049	2017	164	11
24	The Dark Knight	2008	152	1
25	Memento	2000	113	1
26	Tenet	2020	150	1
\.


--
-- TOC entry 3848 (class 0 OID 0)
-- Dependencies: 217
-- Name: directores_id_director_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.directores_id_director_seq', 11, true);


--
-- TOC entry 3849 (class 0 OID 0)
-- Dependencies: 219
-- Name: peliculas_id_pelicula_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.peliculas_id_pelicula_seq', 26, true);


-- Completed on 2025-12-03 21:06:27 CET

--
-- PostgreSQL database dump complete
--

\unrestrict QruCZNrhJjKLdxKVHjEFmlWhKEkQvRmnhIfdeCQ2MhihVcVutlOOmbR2tumdNpe

