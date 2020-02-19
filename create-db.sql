CREATE TABLE public.Users
(   user_id serial NOT NULL,
    full_name character(100) COLLATE pg_catalog."default" NOT NULL,
    phone_no character varying COLLATE pg_catalog."default" NOT NULL,
    password character(100) COLLATE pg_catalog."default" NOT NULL,
    email_id character(100) COLLATE pg_catalog."default" NOT NULL,
    roles_id character(100) COLLATE pg_catalog."default" NOT NULL,
    address character varying(250) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


-- Table: public.Roles
CREATE TABLE public.Roles
(
    id serial NOT NULL,
    title character varying(240) COLLATE pg_catalog."default" NOT NULL,
    details text COLLATE pg_catalog."default",
    
    CONSTRAINT roles_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.roles
    OWNER to postgres;
COMMENT ON TABLE public.roles
    IS 'The roles is the department ';
