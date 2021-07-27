import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ProductService } from './api/product.service';
import { UserService } from './api/user.service';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title: String = '';
  input = [2,2,7,4,3,5,8];
  products$: Observable<Product[]> = of([]);
  private user ='John';

  constructor(
    private userService: UserService,
    private productService: ProductService,
  ) {}

  ngAfterViewInit(): void {
    this.userService.getGreeting(this.user).subscribe((res) => this.title = res.content);
    this.products$ = this.productService.getProductsAsObservable();
    this.productService.getProducts().subscribe(() => console.log('Products updated.'));
  }

  @ViewChild('someInput') someInput?: ElementRef;

  onCreateComponent() {
    console.log(`App: Creating ${this.someInput?.nativeElement.value} Product...`);
    const product = new Product();
    product.productId=this.someInput?.nativeElement.value;
    product.inputs = this.input;
    this.productService.create(product).subscribe(() => console.log('Products updated.'));
  }
}