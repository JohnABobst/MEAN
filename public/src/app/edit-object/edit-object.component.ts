import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'
@Component({
  selector: 'app-edit-object',
  templateUrl: './edit-object.component.html',
  styleUrls: ['./edit-object.component.css']
})
export class EditObjectComponent implements OnInit {
  object: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this.getObject(params['id'])
    })
    this.object = { name: "" };
  }
  editObject(){
    let observable = this._httpService.updateObject(this.object)
    observable.subscribe((data:any) => {
      this.object = data
    })
  }
  getObject(id) {
    let observable = this._httpService.getDetails(id)
    observable.subscribe((data:any)=>{
      console.log(data)
      this.object = data
    })
  }

}
