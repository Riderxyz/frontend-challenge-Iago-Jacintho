import { NgModule } from "@angular/core";
//Form
import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { PasswordModule } from "primeng/password";
import { RadioButtonModule } from "primeng/radiobutton";
import { SelectButtonModule } from "primeng/selectbutton";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ListboxModule } from "primeng/listbox";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import { CheckboxModule } from "primeng/checkbox";

//Panel
import { PanelModule } from "primeng/panel";
import { CardModule } from "primeng/card";
import { ToolbarModule } from "primeng/toolbar";
import { FieldsetModule } from "primeng/fieldset";
import { AccordionModule } from "primeng/accordion";
import { DividerModule } from "primeng/divider";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { TabViewModule } from "primeng/tabview";

//Dialog
import { DialogModule } from "primeng/dialog";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { ToastModule } from "primeng/toast";

//Menus
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
//button
import { ButtonModule } from "primeng/button";
import { SplitButtonModule } from "primeng/splitbutton";

//Misc
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ProgressBarModule } from "primeng/progressbar";
import { BlockUIModule } from "primeng/blockui";

// Directive
import { RippleModule } from "primeng/ripple";

const formModules = [
  InputTextModule,
  PasswordModule,
  InputNumberModule,
  RadioButtonModule,
 // SelectButtonModule,
 // ToggleButtonModule,
  //ListboxModule,
  // InputTextareaModule,
  //DropdownModule,
  InputMaskModule,
  CheckboxModule,
];

const PanelModules = [
 // PanelModule,
  CardModule,
  ToolbarModule,
 // AccordionModule,
  //FieldsetModule,
  DividerModule,
 // ScrollPanelModule,
  //TabViewModule,
];

const dialog = [DialogModule, DynamicDialogModule, ToastModule];

const menuModules = [
  //MenuModule,
   MenubarModule
  ];

const ButtonModules = [ButtonModule, SplitButtonModule];

const miscModules = [ProgressSpinnerModule, BlockUIModule, ProgressBarModule];

const directiveModules = [RippleModule];
@NgModule({
  imports: [
    ...formModules,
    ...PanelModules,
    ...dialog,
    ...menuModules,
    ...ButtonModules,
    ...directiveModules,
    ...miscModules,
  ],
  exports: [
    ...formModules,
    ...PanelModules,
    ...dialog,
    ...menuModules,
    ...ButtonModules,
    ...directiveModules,
    ...miscModules,
  ],
})
export class PrimeNGModule {}
