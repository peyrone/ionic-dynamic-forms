import { NgModule, ModuleWithProviders } from "@angular/core";
import { TestService } from "./test.service";

@NgModule({
    imports: [
    ],
    providers: [
        TestService
    ],
    exports: [
    ]
})
export class SharedServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedServicesModule,
            providers: [
                TestService
            ]
        };
    }
}
