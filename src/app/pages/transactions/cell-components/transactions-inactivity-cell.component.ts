import { Component, Input } from '@angular/core';
import { Transaction } from 'app/types/Transaction';
import { CellContentTemplateComponent } from '../../../shared/table/cell-content-template/cell-content-template.component';

@Component({
  template: `
    <span>
      <ng-container>
        <span [ngClass]="(row.stop ? row.stop.inactivityStatus : row.currentInactivityStatus) | appColorByStatus">
          {{(row.stop ? row.stop.totalInactivitySecs : row.currentTotalInactivitySecs) | appInactivity:(row.stop ? row.stop.totalDurationSecs : row.currentTotalDurationSecs)}}
        </span>
      </ng-container>
    </span>
  `,
})
export class TransactionsInactivityCellComponent extends CellContentTemplateComponent {
  @Input() public row!: Transaction;
}
