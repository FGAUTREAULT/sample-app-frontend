import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IProduct } from "../product.model";
import { HTTPService } from "./http.service";

@Injectable({
    providedIn: 'root'
})
export class ProductService extends HTTPService {

    context = '/products';
    private _products$ = new BehaviorSubject<IProduct[]>([]);

    constructor(private http: HttpClient){
        super();
    }

    getProductsAsObservable(): Observable<IProduct[]> {
      return this._products$.asObservable();
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.getAPI()}${this.buildContext()}`).pipe(
            map((res) => {
                this._products$.next(res);
                return res;
            })
        );
    }

    create(product: IProduct): Observable<IProduct> {
        // let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', }), responseType: 'text' as 'json' }
        return this.http.post<IProduct>(`${this.getAPI()}${this.buildContext()}/create`, product).pipe(
            map((res) => {
                const products = this._products$.value;
                products.push(res);
                this._products$.next(products);
                return product;
            })
        );
    }

}