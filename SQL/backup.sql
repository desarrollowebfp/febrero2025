--
-- PostgreSQL database dump
--

\restrict wk81Fm6XCMGbc3HicSDeHjhi3sT2mPxBUC6JFidHT76b0LaQK1yhXPc8ZYWyXre

-- Dumped from database version 17.7 (Homebrew)
-- Dumped by pg_dump version 18.0

-- Started on 2025-12-01 21:16:18 CET

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16410)
-- Name: directores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.directores (
    id_director integer NOT NULL,
    nombre character varying(100) NOT NULL,
    pais character varying(50),
    fecha_nacimiento date
);


ALTER TABLE public.directores OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16409)
-- Name: directores_id_director_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.directores_id_director_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.directores_id_director_seq OWNER TO postgres;

--
-- TOC entry 3846 (class 0 OID 0)
-- Dependencies: 217
-- Name: directores_id_director_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.directores_id_director_seq OWNED BY public.directores.id_director;


--
-- TOC entry 220 (class 1259 OID 16417)
-- Name: peliculas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.peliculas (
    id_pelicula integer NOT NULL,
    titulo character varying(150) NOT NULL,
    anio_estreno integer,
    duracion_minutos integer,
    id_director integer NOT NULL
);


ALTER TABLE public.peliculas OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16416)
-- Name: peliculas_id_pelicula_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.peliculas_id_pelicula_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.peliculas_id_pelicula_seq OWNER TO postgres;

--
-- TOC entry 3847 (class 0 OID 0)
-- Dependencies: 219
-- Name: peliculas_id_pelicula_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.peliculas_id_pelicula_seq OWNED BY public.peliculas.id_pelicula;


--
-- TOC entry 3685 (class 2604 OID 16413)
-- Name: directores id_director; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.directores ALTER COLUMN id_director SET DEFAULT nextval('public.directores_id_director_seq'::regclass);


--
-- TOC entry 3686 (class 2604 OID 16420)
-- Name: peliculas id_pelicula; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peliculas ALTER COLUMN id_pelicula SET DEFAULT nextval('public.peliculas_id_pelicula_seq'::regclass);


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


--
-- TOC entry 3688 (class 2606 OID 16415)
-- Name: directores directores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.directores
    ADD CONSTRAINT directores_pkey PRIMARY KEY (id_director);


--
-- TOC entry 3690 (class 2606 OID 16422)
-- Name: peliculas peliculas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peliculas
    ADD CONSTRAINT peliculas_pkey PRIMARY KEY (id_pelicula);


--
-- TOC entry 3691 (class 2606 OID 16423)
-- Name: peliculas fk_peliculas_directores; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peliculas
    ADD CONSTRAINT fk_peliculas_directores FOREIGN KEY (id_director) REFERENCES public.directores(id_director);


-- Completed on 2025-12-01 21:16:18 CET

--
-- PostgreSQL database dump complete
--

\unrestrict wk81Fm6XCMGbc3HicSDeHjhi3sT2mPxBUC6JFidHT76b0LaQK1yhXPc8ZYWyXre

