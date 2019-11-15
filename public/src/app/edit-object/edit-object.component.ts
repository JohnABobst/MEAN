import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'
@Component({
  selector: 'app-edit-object',
  templateUrl: './edit-object.component.html',
  styleUrls: ['./edit-object.component.css']
})
export class EditObjectComponent implements OnInit {
  objectToEdit: any;
  name: any; 
  price: any; 
  quantity: any;
  errors= [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {   
    this._route.params.subscribe((params: Params) => {
      this.getObject(params['id'])      
    })
   
  }
  resetValues(){
    this.objectToEdit.name = this.name 
    this.objectToEdit.quantity = this.quantity 
    this.objectToEdit.price = this.price
  }
  getObject(id) {
    let observable = this._httpService.getDetails(id)
    observable.subscribe((data:any)=>{
      this.objectToEdit = data
      this.name = this.objectToEdit.name;
      this.price = this.objectToEdit.price;
      this.quantity = this.objectToEdit.quantity;
   
    })
  }
  editObject(){
    let observable = this._httpService.updateObject(this.objectToEdit)
    observable.subscribe(data => {
      console.log(data)
      this.errors = [];
      if (data["errors"]) {
        console.log(data["errors"]);
        for (let key in data["errors"]) {
          this.errors.push(data["errors"][key]["message"]);
        }
      } 
    });
  }
}

  