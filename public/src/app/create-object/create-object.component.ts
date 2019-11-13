import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";
@Component({
  selector: "app-create-object",
  templateUrl: "./create-object.component.html",
  styleUrls: ["./create-object.component.css"]
})
export class CreateObjectComponent implements OnInit {
  newObject: any;
  error: any;
  @Input() parentObjects: any;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newObject = { name: "" };
  }
  onSubmit() {
    let observable = this._httpService.createObject(this.newObject);
    observable.subscribe(() => {
      this.newObject = { name: "" };
    });
  }
  getObjectsFromService() {
    let observable = this._httpService.getObjects();
    observable.subscribe((data: any) => {
      console.log(data);
      this.parentObjects = data;
    });
  }
}
