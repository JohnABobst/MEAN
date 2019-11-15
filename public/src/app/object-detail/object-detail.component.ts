import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.css']
})
export class ObjectDetailComponent implements OnInit {

  object: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.object = {name:"", quantity: 0, price: 0};
    this._route.params.subscribe((params: Params) => {
      this.getObject(params['id'])
      
    })
    
  }
  getObject(id) {
    let observable = this._httpService.getDetails(id)
    observable.subscribe((data:any)=>{
      this.object = data
      console.log(this.object)
    })
  }
  deleteProduct(id){
    console.log("deleting")
    let observable = this._httpService.destroyObject(id)
    observable.subscribe(()=>{
      console.log("routing")
      this._router.navigate(["/products"]);
     
    })
  }

}
