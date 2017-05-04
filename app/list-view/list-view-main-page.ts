import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
    <StackLayout>
        <Button text="ListView" [nsRouterLink]="'commonTemplate'"></Button>
        <Button text="ListViewCustomTemplate" [nsRouterLink]="'customTemplate'"></Button>
        <Button text="ListViewAsyncPipe" [nsRouterLink]="['/listView','asyncPipeTemplate']"></Button>
        <Button text="NestedTemplate" [nsRouterLink]="['/listView','nestedTemplate']"></Button>
     </StackLayout>
    `,
})
export class ListViewMainPageComponent { }