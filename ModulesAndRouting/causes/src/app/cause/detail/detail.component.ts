import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { ICause } from 'src/app/shared/interfaces/cause';
import { CausesService } from 'src/app/causes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;

  @Input() selectedCause2: ICause;

  isRouteComponent = false;

  get color() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green';
    }
    if (
      this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount / 3) &&
      this.selectedCause.collectedAmount > (this.selectedCause.neededAmount / 3)
    ) {
      return 'yellow';
    }
    return 'red';
  }

  get selectedCause() { return this.causesService.selectedCause; }

  constructor(
    private causesService: CausesService,
    private activatedRoute: ActivatedRoute
    ) { 
      this.isRouteComponent = this.activatedRoute.snapshot.data.shouldFetchCause;
    }

  ngOnInit() {
    if(this.isRouteComponent){
      this.causesService
        .load(+this.activatedRoute.snapshot.params.id)
        .subscribe(() => {
          this.causesService
          .selectCause(this.causesService.causes[0]);
        })
    } 
  }

  makeDonationhandler() {
    this.causesService.donate(+this.amountInput.nativeElement.value)
        .subscribe(() => {
            this.causesService.load();
            this.amountInput.nativeElement.value = '';
    });
  }

}
