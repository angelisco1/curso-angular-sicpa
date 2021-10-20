import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logInfo(msg: string): void {
    console.info(`[INFO] - ${msg}`)
  }

  logError(msg: string): void {
    console.error(`[ERR] - ${msg}`)
  }
}
