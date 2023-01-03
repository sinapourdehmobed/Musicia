CREATE TABLE songs (
                       id int NOT NULL PRIMARY KEY,
                       song_title text NOT NULL,
                       artist text NOT NULL,
                       songAlbum text NOT NULL,
                       postOwner text NOT NULL,
                       notes varchar NOT NULL
);

INSERT INTO songs (id, song_title,artist,songAlbum,postOwner,notes)
VALUES (1, 'Ode to Joy (Dubstep Remix)','Beethoven','Classic','Professor', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');
INSERT INTO songs (id, song_title,artist,songAlbum,postOwner,notes)
VALUES (2, 'Decline','Pawel Błaszczak','Dying Light','MyatKyaw121','E4 E2 E3 E2 E4 E2 E3 E2 E4 E2 E3 E2 E4 E2 E3 E2');
INSERT INTO songs (id, song_title,artist,songAlbum,postOwner,notes)
VALUES (3, 'The Following','Pawel Błaszczak','Dying Light (the Following)','MyatKyaw121', 'a2 c3 f3 a2 e3 a2 a2 c3 f3 a2 e3 a2' );
--                                                                                           'a2 a6 a6 c3 f6 f3 g6  a2 e6 f6 e3 e6 a6 a2 g6' ||
--                                                                                           'g6 c3 f6 g6 f3 f6 a2 e6 e3 d6 a2 a6 a2 a6 c3 f6 g6 f3 e6 a2 f6 e3 e6 a2 f6 a2 f6 c3 e6 f6' ||
--                                                                                           'f3 d6 a2 e6 e3 g6 a2');
INSERT INTO songs (id, song_title,artist,songAlbum,postOwner,notes)
VALUES (4, 'Minuet','Mozart','Classic','Eloyf26', 'G4 F4 E4 G4 C5 E5 D5 C5 B4 D5 F5 A5 G5 F5 E5 G5 C6 B5 C6 A5 G6');
INSERT INTO songs (id, song_title,artist,songAlbum,postOwner,notes)
VALUES (5, 'Nokia Ringtone','Nokia','Ringtone','Eloyf26', 'E5 D5 Db5 B4 Ab4 Gb4 E4 D4 B4 A4 Db4 E4 A4');