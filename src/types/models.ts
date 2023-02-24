/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface Job {
  title: string;
  salary: number;
  description: string,
  stillHiring: boolean,
  profile: { id: number },
  id: number;
  createdAt: string;
  updatedAt: string;
}