import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICause } from 'src/app/shared/interfaces/cause';
import { CausesService } from 'src/app/causes.service';


@Component({
  selector: 'app-left',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  get causes() {
     return this.causesService.causes;
     }

  @Output() selectCause: EventEmitter<ICause> = new EventEmitter();

  constructor(private causesService: CausesService) {

   }

  ngOnInit() {
    this.causesService.loadCauses();
  }

  selectCauseHandler(cause: ICause) {
    // this.selectCause.emit(cause);
    this.causesService.selectedCause = cause;
  }
}
