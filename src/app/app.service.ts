import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
public selectedCatIndex:any = null
public selectedCat:any=null
public menu:any = [
  {
    Id: '1',
    Category: 'Burgers',
    Items: [
      {
      ItemName: "Cheese Burger",
      ItemPrice: 200,
      PassPrice: 123,
      img: "https://www.shutterstock.com/shutterstock/photos/313906544/display_1500/stock-photo-tasty-and-appetizing-hamburger-on-a-yellow-background-313906544.jpg",
    },
    {
      ItemName: "Chicken burger",
      ItemPrice: 250,
      PassPrice: 100,
      img: "https://www.shutterstock.com/shutterstock/photos/154462136/display_1500/stock-photo-fast-food-with-big-tasty-traditional-double-cheeseburger-or-hamburger-154462136.jpg",
    },
    {
      ItemName: "Veggie burger",
      ItemPrice: 150,
      PassPrice: 50,
      img: "https://www.shutterstock.com/shutterstock/photos/81497311/display_1500/stock-photo-double-cheeseburger-with-tomatoes-and-lettuce-on-blue-background-81497311.jpg",
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
        img: "https://www.shutterstock.com/shutterstock/photos/1514037083/display_1500/stock-photo-pizza-margherita-on-black-stone-background-top-view-pizza-margarita-with-tomatoes-basil-and-1514037083.jpg",
      },
      {
        ItemName: "Pepperoni Pizza ",
        ItemPrice: 200,
        PassPrice: 100,
        img: "https://www.shutterstock.com/shutterstock/photos/1514037083/display_1500/stock-photo-pizza-margherita-on-black-stone-background-top-view-pizza-margarita-with-tomatoes-basil-and-1514037083.jpg",
      },
      {
      ItemName: "Meat Pizza ",
      ItemPrice: 300,
      PassPrice: 100,
      img: "https://www.shutterstock.com/shutterstock/photos/1514037083/display_1500/stock-photo-pizza-margherita-on-black-stone-background-top-view-pizza-margarita-with-tomatoes-basil-and-1514037083.jpg",
    },
    {
      ItemName: "BBQ Chicken Pizza ",
      ItemPrice: 125,
      PassPrice: 75,
      img: "https://www.shutterstock.com/shutterstock/photos/1514037083/display_1500/stock-photo-pizza-margherita-on-black-stone-background-top-view-pizza-margarita-with-tomatoes-basil-and-1514037083.jpg",
    },
    {
      ItemName: "Supreme Pizza ",
      ItemPrice: 100,
      PassPrice: 50,
      img: "https://www.shutterstock.com/shutterstock/photos/1514037083/display_1500/stock-photo-pizza-margherita-on-black-stone-background-top-view-pizza-margarita-with-tomatoes-basil-and-1514037083.jpg",
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
    //   img: "https://b2cappassetscdn.theentertainerme.com/v7/standard/DXB-Standard-359x404.png",
    // },
    // {
    //   ItemName: "Bavarian Cream ",
    //   ItemPrice: 200,
    //   PassPrice: 100,
    //   img: "https://b2cappassetscdn.theentertainerme.com/v7/standard/DXB-Standard-359x404.png",
    // },
    // {
    //   ItemName: "Chocolate Donuts ",
    //   ItemPrice: 200,
    //   PassPrice: 100,
    //   img: "https://b2cappassetscdn.theentertainerme.com/v7/standard/DXB-Standard-359x404.png",
    // },
  ]
  },
  
];
  constructor() { }
}
