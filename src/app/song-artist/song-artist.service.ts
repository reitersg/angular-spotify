import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SongArtistService {
  constructor() {}

  processSongs(songs: Object[]): Object {
    let finalSongs = {
      nodes: [
        {
          id: '0',
          label: songs[0]['artistName'],
        },
      ],
      links: [],
    };
    songs.forEach((song, i) => {
      finalSongs.nodes.push({
        id: `${i + 1}`,
        label: song['trackName'],
      });
      finalSongs.links.push({
        source: '0',
        target: `${i + 1}`,
      });
    });
    return finalSongs;
  }

  processFeatureArtists(parentObj: Object[]): Object {
    const artistsObject = this.convertArtistNodes(parentObj['artistNodes']);
    const songs = parentObj['songLinks'];
    let finalSongs = {
      nodes: [
        {
          id: '0',
          label: artistsObject[songs[0]['primaryArtistId']],
        },
      ],
      links: [],
    };
    songs.forEach((song, i) => {
      finalSongs.nodes.push({
        id: `${i + 1}`,
        label: song['songName'],
      });
      finalSongs.nodes.push({
        id: song['featureArtistId'],
        label: artistsObject[song['featureArtistId']],
      });
      finalSongs.links.push({
        source: '0',
        target: `${i + 1}`,
      });
      finalSongs.links.push({
        source: `${i + 1}`,
        target: song['featureArtistId'],
      });
    });
    return finalSongs;
  }

  convertArtistNodes(artists: Object[]): Object {
    let artistIdToName = {};
    artists.forEach((artist) => {
      artistIdToName[artist['id']] = artist['artistName'];
    });
    return artistIdToName;
  }
}
