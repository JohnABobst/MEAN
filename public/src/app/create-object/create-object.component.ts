import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
@Component({
  selector: "app-create-object",
  templateUrl: "./create-object.component.html",
  styleUrls: ["./create-object.component.css"]
})
export class CreateObjectComponent implements OnInit {
  newProduct: any = {
    name: "",
    quantity: 0,
    price: 0.0
  };
  name ="";
  price =0;
  quantity =0;
  errors: any;
  @Input() parentObjects: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this.newProduct = { name: "", quantity: 0, price: 0.0 };
  }
  resetValues() {
    this.newProduct.name = this.name 
    this.newProduct.quantity = this.quantity 
    this.newProduct.price = this.price
  }
  onSubmit() {
    let observable = this._httpService.createObject(this.newProduct);
    observable.subscribe(data => {
      this.errors = [];
      if (data["errors"]) {
        for (let key in data["errors"]) {
          this.errors.push(data["errors"][key]["message"]);
        }
      } else {
        this._router.navigate(["/products"]);
      }
    });
  }
  getObjectsFromService() {
    let observable = this._httpService.getObjects();
    observable.subscribe((data: any) => {
      this.parentObjects = data;
    });
  }
}
