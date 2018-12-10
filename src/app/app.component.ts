import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SideviewService } from './sideview.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideviewOpened$: Observable<
    boolean
  > = this.sideviewService.getSideviewOpened();

  toggleSideview(): void {
    this.sideviewService.toggleSideviewOpened();
  }

  constructor(private sideviewService: SideviewService) {}
}
