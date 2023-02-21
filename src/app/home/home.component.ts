import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Product} from "./Product";
import {findIndex} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck,OnDestroy,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {
  product: Product = new Product(0, "0", "0", 0);
  products: Product[] = [
    new Product(1, "Hàng chiến", "https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-5.jpg", 300),
    new Product(2, "Chất Lượng", "https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-09.jpg", 310),
    new Product(3, "Đỉnh của chóp", "https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-09.jpg", 310)]


  constructor() {
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
  }

  ngOnDestroy() {
  }

  ngAfterContentChecked() {
  }

  ngAfterContentInit() {
  }

  ngAfterViewChecked() {
  }

  ngAfterViewInit() {
  }


  CreateProduct() {
    let productNew = new Product(this.product.id, this.product.name, this.product.img, this.product.price)
    this.products.push(productNew);
  }

  findIndexById(id: number): number {

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        console.log(i)
        return i;
      }
    }
    return -1;

  }

  Delete(id: number) {
    this.products.splice(this.findIndexById(id),1)
    alert("xóa thành công");
  }
  editProduct(id:number):void{
    let productNew = new Product(this.product.id, this.product.name, this.product.img, this.product.price)
    this.products.splice(this.findIndexById(id),1,productNew)
  }



}
