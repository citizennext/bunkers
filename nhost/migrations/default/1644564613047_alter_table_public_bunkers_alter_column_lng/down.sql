alter table "public"."bunkers" alter column "lng" drop not null;
ALTER TABLE "public"."bunkers" ALTER COLUMN "lng" TYPE double precision;
