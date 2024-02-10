import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
public selectedCatIndex:any = null
public selectedCat:any=null
public editItemObj:any=null
public editCatObj:any=null
public menu:any = [
  {
    Id: '1',
    Category: 'Burgers',
    Items: [
      {
      ItemName: "Cheese Burger",
      ItemPrice: 200,
      PassPrice: 123,
      img: "http://localhost:4200/assets/img/temp.jpg",
    },
    {
      ItemName: "Chicken burger",
      ItemPrice: 250,
      PassPrice: 100,
      img: "http://localhost:4200/assets/img/temp.jpg",
    },
    {
      ItemName: "Veggie burger",
      ItemPrice: 150,
      PassPrice: 50,
      img: "http://localhost:4200/assets/img/temp.jpg",
    },]
  },
  {
    Id: '2',
    Category: 'Pizza',
    Items: [
      {
        ItemName: "Cheese Pizza ",
        ItemPrice: 100,
        PassPrice: 50,
        img: "http://localhost:4200/assets/img/temp.jpg",
      },
      {
        ItemName: "Pepperoni Pizza ",
        ItemPrice: 200,
        PassPrice: 100,
        img: "http://localhost:4200/assets/img/temp.jpg",
      },
      {
      ItemName: "Meat Pizza ",
      ItemPrice: 300,
      PassPrice: 100,
      img: "http://localhost:4200/assets/img/temp.jpg",
    },
    {
      ItemName: "BBQ Chicken Pizza ",
      ItemPrice: 125,
      PassPrice: 75,
      img: "http://localhost:4200/assets/img/temp.jpg",
    },
    {
      ItemName: "Supreme Pizza ",
      ItemPrice: 100,
      PassPrice: 50,
      img: "http://localhost:4200/assets/img/temp.jpg",
    },]
  },
  {
    Id: '3',
    Category: 'Donuts',
    Items: [
    //   {
    //   ItemName: "Baked Raspberry ",
    //   ItemPrice: 200,
    //   PassPrice: 100,
    //   img: "http://localhost:4200/assets/img/temp.jpg",
    // },
    // {
    //   ItemName: "Bavarian Cream ",
    //   ItemPrice: 200,
    //   PassPrice: 100,
    //   img: "http://localhost:4200/assets/img/temp.jpg",
    // },
    // {
    //   ItemName: "Chocolate Donuts ",
    //   ItemPrice: 200,
    //   PassPrice: 100,
    //   img: "http://localhost:4200/assets/img/temp.jpg",
    // },
  ]
  },
  
];
  constructor() { }
}
