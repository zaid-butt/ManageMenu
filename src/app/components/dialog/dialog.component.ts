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
    // console.log(g_cat.Category);
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


  itemform: FormGroup = new FormGroup({
    item_name: new FormControl(''),
    item_price: new FormControl(0),
    pass_price: new FormControl(0),
  });
  itemSubmitted = false

  catform: FormGroup = new FormGroup({
    cat_name: new FormControl(''),
  });
  catSubmitted = false


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
      this.appservice.editItemObj = null
      this.appservice.editCatObj = null
    });

    this.itemform = this.formBuilder.group({
        item_name: [''],
        item_price: [''],
        pass_price: [''],
      }        
    );
    if(this.appservice.editItemObj){
      this.cclass = 'add_item'

      this.itemform.patchValue({
        item_name: this.appservice.editItemObj.ItemName,
      })
      this.itemform.patchValue({
        item_price: this.appservice.editItemObj.ItemPrice,
      })
      this.itemform.patchValue({
        pass_price: this.appservice.editItemObj.PassPrice,
      })
    }

    this.catform = this.formBuilder.group({
        cat_name: ['',Validators.required],
      });

    if(this.appservice.editCatObj){
      this.cclass = 'add_category'
      this.catform.patchValue({
        cat_name: this.appservice.editCatObj.Category,
      })
    }

    
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.itemform.controls;
  }

  get c(): { [key: string]: AbstractControl } {
    return this.catform.controls;
  }
  
  onItem(): void {
    this.itemSubmitted = true;
    
    if (this.itemform.invalid) {
      return;
    }

    if(this.appservice.editItemObj){
      let updt = this.appservice.menu[this.appservice.selectedCatIndex].Items[this.appservice.editItemObj.idx];
      updt.ItemName = this.itemform.value.item_name
      updt.ItemPrice = this.itemform.value.item_price
      updt.PassPrice = this.itemform.value.pass_price  
      this.appservice.editItemObj = null
    } else {this.appservice.menu[this.appservice.selectedCatIndex].Items.push({
          ItemName: this.itemform.value.item_name,
          ItemPrice: this.itemform.value.item_price,
          PassPrice: this.itemform.value.pass_price,
          img: "http://localhost:4200/assets/img/temp.jpg",
        })    
    }

    this.itemSubmitted = false;
    this.dialogRef.close();
    // console.log(JSON.stringify(this.form.value, null, 2));
  }

  onCat(): void {
    this.catSubmitted = true;
    
    if (this.catform.invalid) {
      return;
    }

    if(this.appservice.editCatObj){
      this.appservice.editCatObj.Category = this.catform.value.cat_name
      this.appservice.editCatObj = null
    } else { 
      this.appservice.menu.push({
      Category: this.catform.value.cat_name,
        })    
    }

    this.catSubmitted = false;
    this.dialogRef.close();
  }

  onReset(): void {
    // this.itemSubmitted = false;
    // this.itemform.reset();
    // this.appservice.editItemObj = null
  }
  onNoClick(): void {
    this.dialogRef.close();
    // this.itemform.reset();
    // this.appservice.editItemObj = null
  }
}


