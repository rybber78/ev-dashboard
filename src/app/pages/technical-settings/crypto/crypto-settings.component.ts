import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CentralServerService } from 'services/central-server.service';
import { ComponentService } from 'services/component.service';
import { MessageService } from 'services/message.service';
import { SpinnerService } from 'services/spinner.service';
import { CryptoSettings, CryptoSettingsType } from 'types/Setting';
import TenantComponents from 'types/TenantComponents';

@Component({
    selector: 'app-crypto-settings',
    templateUrl: 'crypto-settings.component.html',
})

export class CryptoSettingsComponent implements OnInit {
    public isActive = false;

    public formGroup!: FormGroup;
    public cryptoSettings: CryptoSettings;

    constructor(
        private centralServerService: CentralServerService,
        private componentService: ComponentService,
        private spinnerService: SpinnerService,
        private messageService: MessageService,
        private router: Router,
    ) {
        this.isActive = this.componentService.isActive(TenantComponents.CRYPTO);
    }

    public ngOnInit(): void {
        // Build the form
        this.formGroup = new FormGroup({});
        // Load the conf
        this.loadConfiguration();
    }

    public loadConfiguration() {
        // this.spinnerService.show();
        // this.componentService.getCryptoSettings().subscribe((settings) => {
        //     this.spinnerService.hide();
        //     // Keep
        //     this.cryptoSettings = settings;
        //     // Init form
        //     this.formGroup.markAsPristine();
        // }, (error) => {
        //     this.spinnerService.hide();
        //     switch (error.status) {
        //         case HTTPError.OBJECT_DOES_NOT_EXIST_ERROR:
        //             this.messageService.showErrorMessage('settings.smart_charging.setting_do_not_exist');
        //             break;
        //         default:
        //             Utils.handleHttpError(error, this.router, this.messageService,
        //                 this.centralServerService, 'general.unexpected_error_backend');
        //     }
        // });
    }
}