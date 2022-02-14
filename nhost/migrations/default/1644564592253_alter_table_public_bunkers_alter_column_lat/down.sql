alter table "public"."bunkers" alter column "lat" drop not null;
ALTER TABLE "public"."bunkers" ALTER COLUMN "lat" TYPE double precision;
