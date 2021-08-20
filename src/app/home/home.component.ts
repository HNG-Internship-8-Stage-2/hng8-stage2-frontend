import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    successMessage: boolean;
    name: string = "";
    email_address: string = "";
    message: string = "";

    constructor(private dataService: DataService) {
        this.successMessage = false;
    }

    ngOnInit(): void {
    }

    submitForm(formData: any): any {
        const data = formData.form.value;
        this.name = "";
        this.email_address = "";
        this.message = "";

        this.dataService.submitData(data)
            .subscribe(
                res => {
                    this.successMessage = true;
                }
            )
    }
}
