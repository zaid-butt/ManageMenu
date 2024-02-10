import {Component, Inject, OnInit} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, RequiredValidator} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

import { AbstractControl, FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppService } from '../../app.service';
export interface DialogData {
  
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-dialog',
  template: '',
  styleUrl: './dialog.component.css',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class DialogOverviewExample {
  constructor(public dialog: MatDialog, public appservice:AppService) {}
  
  public openDialog(g_cat:any, idx:any): void {
    this.dialog.open(DialogOverviewExampleDialog);
    console.log(g_cat.Category);
    this.appservice.selectedCatIndex = idx;
    this.appservice.selectedCat = g_cat;
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class DialogOverviewExampleDialog implements OnInit{


  form: FormGroup = new FormGroup({
    item_name: new FormControl(''),
    item_price: new FormControl(0),
    pass_price: new FormControl(0),
  });
  submitted = false


  cclass = "selecteditem"
  addbtns = "add_item"
  
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    public appservice:AppService
  ) {}

  ngOnInit(): void {
    this.dialogRef.afterClosed().subscribe(result => {
      this.appservice.editItemjObj = null
    });
    this.form = this.formBuilder.group(
      {
        item_name: [''],
        item_price: [
          ''
        ],
        pass_price: [
          ''
        ],
      }        
    );
    if(this.appservice.editItemjObj){
      this.cclass = 'add_item'

      this.form.patchValue({
        item_name: this.appservice.editItemjObj.ItemName,
      })
      this.form.patchValue({
        item_price: this.appservice.editItemjObj.ItemPrice,
      })
      this.form.patchValue({
        pass_price: this.appservice.editItemjObj.PassPrice,
      })
      
    }
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  
  onSubmit(): void {
    this.submitted = true;
    
    
    
    if (this.form.invalid) {
      return;
    }

    

    if(this.appservice.editItemjObj){
      let updt = this.appservice.menu[this.appservice.selectedCatIndex].Items[this.appservice.editItemjObj.idx];
      updt.ItemName = this.form.value.item_name
      updt.ItemPrice = this.form.value.item_price
      updt.PassPrice = this.form.value.pass_price  
      this.appservice.editItemjObj = null
    } else {

      this.appservice.menu[this.appservice.selectedCatIndex].Items.push(
        {
          ItemName: this.form.value.item_name,
          ItemPrice: this.form.value.item_price,
          PassPrice: this.form.value.pass_price,
          img: "https://www.shutterstock.com/shutterstock/photos/313906544/display_1500/stock-photo-tasty-and-appetizing-hamburger-on-a-yellow-background-313906544.jpg",
        }
      )    
    }

    this.submitted = false;
    this.dialogRef.close();
    

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    console.info("easdf")
    this.submitted = false;
    this.form.reset();
    this.appservice.editItemjObj = null
  }
  onNoClick(): void {
    this.dialogRef.close();
    this.form.reset();
    this.appservice.editItemjObj = null
  }
}


