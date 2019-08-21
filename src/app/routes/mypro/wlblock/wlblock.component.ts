import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { tap, map } from 'rxjs/operators';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';

@Component({
  selector: 'app-wlblock',
  templateUrl: './wlblock.component.html',
  styleUrls: ['./wlblock.component.less']
})
export class WlblockComponent implements OnInit {
  private status = [];
  private mystatus;
  constructor(private http:_HttpClient) { }

  ngOnInit() {//初始化时候，异步请求服务器端的首页数据
    let url='http://localhost:4200/assets/myjson/mydata.json';
    this.http.get(url).subscribe((res:any)=>{
      this.status=res.data1
    })
  }
  myclick(e:MouseEvent){
    e.preventDefault();
    console.log(e)
  }
}
