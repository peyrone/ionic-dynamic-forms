import { Component, ViewChild, AfterViewInit, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Validators } from "@angular/forms";

import { FieldConfig } from "../../shared/dynamic-form/models/field-config.interface";
import { DynamicFormComponent } from "../../shared/dynamic-form/containers/dynamic-form/dynamic-form.component";
import { TestService } from "../../shared/services/test.service";

@Component({
    selector: "page-home",
    templateUrl: "./home.html"
})
export class HomePage implements OnInit, AfterViewInit {

    constructor(
        public navCtrl: NavController,
        private testService: TestService
    ) {
    }

    @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

    config: FieldConfig[] = [
        {
            type: "input",
            label: "Full name",
            name: "name",
            placeholder: "Enter your name",
            validation: [Validators.required, Validators.minLength(4)]
        },
        // {
        //     type: "select",
        //     label: "Favourite Food",
        //     name: "food",
        //     options: ["Pizza", "Hot Dogs", "Knakworstje", "Coffee"],
        //     placeholder: "Select an option",
        //     validation: [Validators.required]
        // },
        {
            label: "Submit",
            name: "submit",
            type: "button"
        }
    ];

    ngOnInit(): void {
        this.init();
    }

    ngAfterViewInit(): void {
        let previousValid = this.form.valid;
        this.form.changes.subscribe(() => {
            if (this.form.valid !== previousValid) {
                previousValid = this.form.valid;
                this.form.setDisabled("submit", !previousValid);
            }
        });

        this.form.setDisabled("submit", true);
        this.form.setValue("name", "Todd Motto");
    }

    init(): void {
        this.testService.getInputFields().then((inputFields: any) => {
            const len = this.config.length;

            inputFields.forEach((input: any) => {
                this.config.splice(len-1, 0, input);
            });

            const configChanges = JSON.parse(JSON.stringify(this.config));
            this.config = configChanges;
        });
    }

    submit(value: { [name: string]: any }) {
        console.log(value);
    }
}
