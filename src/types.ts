export enum HTTPMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  HEAD = 'HEAD',
  OTIONS = 'OPTIONS',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
}

export type User = SpotifyApi.CurrentUsersProfileResponse;

export interface SessionInfo {
  user: SpotifyApi.CurrentUsersProfileResponse;
  token: string;
  tokenExpires: number;
}

export type Song = {
  album: string;
  artist: string;
  title: string;
};

export type Playlist = Song[];
