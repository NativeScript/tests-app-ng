import { Component } from "@angular/core";
import { DatePicker } from "ui/date-picker";
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: "input-fields",
    moduleId: module.id,
    templateUrl: "./input-fields.components.html",
})
export class InputFieldsComponents {
    switch = true;
    dataPicker;
    slider = 10;
    segmentedBar;
    textField;
    timePicker;

    public items: Array<SegmentedBarItem>;

    constructor() {
        this.items = [];
        for (let i = 1; i < 4; i++) {
            const item = new SegmentedBarItem();
            item.title = "Tab " + i;
            this.items.push(item);
        }
    }
}
