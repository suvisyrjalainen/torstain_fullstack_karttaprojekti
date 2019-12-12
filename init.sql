CREATE TABLE torstain_paikat (
  ID SERIAL PRIMARY KEY,
  paikka VARCHAR(30),
  arvostelu VARCHAR(30),
  longitude VARCHAR(30),
  latitude VARCHAR(30));

INSERT INTO torstain_paikat (paikka, arvostelu, longitude, latitude)
VALUES ('Levi', 'Hyvät laskusäät', '24.8082', '67.8040'),('Helsinki', 'ihan jeba', '24.9384', '60.1699');
