import { Component , AfterViewInit} from '@angular/core';
declare var jquery :any;

@Component({
    selector: 'add-new',
    templateUrl: 'app/add-new-form.component.html',
    styleUrls:['app/add-new-form.component.css']
})

export class AddNewComponent implements AfterViewInit{
    ngAfterViewInit() {
        jquery(document).ready(function () {
            jquery('select').material_select();
        });
    }
}