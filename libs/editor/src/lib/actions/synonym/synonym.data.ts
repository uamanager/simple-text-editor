import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const SYNONYM_API_URL = 'https://api.datamuse.com';

@Injectable()
export class EditorSynonymDataService {
  constructor (private $http: HttpClient) {}

  get (request: string) {
    return this.$http.get(`${SYNONYM_API_URL}/words?rel_syn=${request}`);
  }
}
