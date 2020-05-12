import { MatDialog } from '@angular/material/dialog';
import { TenantDialogComponent } from 'app/pages/tenants/tenant/tenant.dialog.component';
import { TableActionDef } from 'app/types/Table';
import { TenantButtonAction } from 'app/types/Tenant';
import { Observable } from 'rxjs';

import { TableCreateAction } from './table-create-action';

export class TableCreateTenantAction extends TableCreateAction {  public getActionDef(): TableActionDef {
    return {
      ...super.getActionDef(),
      id: TenantButtonAction.CREATE_TENANT,
      action: this.createTenant,
    };
  }

                                                                  private createTenant(dialog: MatDialog, refresh?: () => Observable<void>) {
    super.create(TenantDialogComponent, dialog, refresh);
  }
}