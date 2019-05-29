import { Injectable } from '@angular/core';
import * as Store from 'electron-store';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private readonly store: Store;

  constructor() {
    this.store = new Store();
  }

  public set(key: string, value: any): void {
    this.store.set(key, value);
  }
}
