import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TestPlanCard } from '../models/test-plan';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private dataSubject = new Subject<any>();

  data$ = this.dataSubject.asObservable();

  sendData(data: TestPlanCard) {
    this.dataSubject.next(data);
  }
}
