import { Injectable } from "@angular/core";
import { FieldConfig } from "../../shared/dynamic-form/models/field-config.interface";

@Injectable()
export class TestService {

    constructor() {}

    public getInputFields(): Promise<{}> {
        const p = new Promise((resolve) => {
            setTimeout(() => {
                const inputFields: FieldConfig[] = [
                    {
                        type: "select",
                        label: "Favourite Food",
                        name: "food",
                        options: ["Pizza", "Hot Dogs", "Knakworstje", "Coffee"],
                        placeholder: "Select an option"
                        // ,
                        // validation: [Validators.required]
                    }
                ];

                resolve(inputFields);
            }, 2000);
        });

        return p;
    }
}
