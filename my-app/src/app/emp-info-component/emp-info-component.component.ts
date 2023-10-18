import { Component, OnInit } from '@angular/core';
import { EmpInfo } from '../EmpInfo';
import * as _ from 'lodash';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-info-component',
  templateUrl: './emp-info-component.component.html',
  styleUrls: ['./emp-info-component.component.css']
})

export class EmpInfoComponentComponent implements OnInit {

  constructor() { }

  getDropDownText(id, object){
    const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.id));
    });
    return selObj;
  }


  ngOnInit() {
    
  }
  selectedOption = 0;
  actions = [{ id: 0, name: '請選擇縣市' },
  { id: 1, name: '桃園市' },
  { id: 2, name: '屏東縣' },
  { id: 3, name: '南投市' },
  { id: 4, name: '高雄市' },]

  housingLocationList: EmpInfo[] = [
    {
      EmpID: "A001",
      EmpName: "滷夫",
      BirthDate: "1990/1/1",
      Address: "桃園市平鎮區平安路30號",
      Enabled: "Y",
      HRDeptID: "AAA0000"
    }
    ,
    {
      EmpID: "A002",
      EmpName: "索龍",
      BirthDate: "1999/5/4",
      Address: "屏東縣屏東市園西街13號",
      Enabled: "Y",
      HRDeptID: "IAA0000"
    }
    ,
    {
      EmpID: "A003",
      EmpName: "那美",
      BirthDate: "1982/10/15",
      Address: "新北市五股區水錐一路17號",
      Enabled: "N",
      HRDeptID: "BFR0000"
    }
    ,
    {
      EmpID: "A004",
      EmpName: "大熊",
      BirthDate: "2000/6/5",
      Address: "南投縣草屯鎮順山路25號",
      Enabled: "Y",
      HRDeptID: "AAA0000"
    }
    ,
    {
      EmpID: "A005",
      EmpName: "胖唬",
      BirthDate: "2001/5/2",
      Address: "嘉義市西區福義街23號",
      Enabled: "N",
      HRDeptID: "CBD0000"
    }
    ,
    {
      EmpID: "A006",
      EmpName: "白湖子",
      BirthDate: "1988/7/14",
      Address: "高雄市仁武區永昌四街28號",
      Enabled: "Y",
      HRDeptID: "CBD0000"
    }
    ,
    {
      EmpID: "A007",
      EmpName: "巴奇",
      BirthDate: "1995/8/9",
      Address: "高雄市湖內區福生二街5號",
      Enabled: "Y",
      HRDeptID: "CBD0000"
    }
  ]

  
}
