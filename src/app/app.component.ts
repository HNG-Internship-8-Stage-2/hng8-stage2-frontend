import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'resume';
    successMessage;

    constructor() {
        this.successMessage = false;
    }

    submitMessage(): any {
        this.successMessage = true;
    }
}
