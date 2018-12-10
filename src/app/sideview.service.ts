import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideviewService {
  sideviewOpened = new BehaviorSubject<boolean>(false);

  getSideviewOpened(): Observable<boolean> {
    return this.sideviewOpened.asObservable();
  }

  toggleSideviewOpened(): void {
    if (this.sideviewOpened.getValue() === true) {
      return this.sideviewOpened.next(false);
    }
    return this.sideviewOpened.next(true);
  }
}
