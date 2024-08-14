export type Genre = 'MALE' | 'FEMALE';

export type LoginDTO = {
  username: string;
  password: string;
  genre : Genre;
};
