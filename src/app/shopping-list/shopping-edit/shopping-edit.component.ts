import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInputref: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputref: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  handleAdd() {
    // Saved the values from the form as constants.
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputref.nativeElement.value;
    // Imported the Ingredient model and passed the name and amount variables to make a new instance.
    const newIngredient = new Ingredient(ingName, ingAmount);

    // emit a new event to send to the parent component w/ new ingredient instance.
    this.ingredientAdded.emit(newIngredient);
  }
}
