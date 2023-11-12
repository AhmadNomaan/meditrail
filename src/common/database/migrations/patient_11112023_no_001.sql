do $$ begin
	if not exists (
select
	1
from
	information_schema.tables
where
	table_name = 'patient') then
		create table public.patient (
	id uuid not null default gen_random_uuid(),
	firstname varchar not null,
	lastname varchar not null,
	dob date not null,
	email varchar not null,
	phone_no varchar null,
	"type" varchar not null,
	constraint user_pk primary key (id),
	constraint user_un unique (email), 
	constraint user_type check ((type = any (array['patient'::text,
'doctor'::text,
'hospital'::text,
'facility'::text])))
);
end if;
end $$

