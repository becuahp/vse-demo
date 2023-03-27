import { Component, OnInit  } from '@angular/core';
import { Information } from 'src/app/models/information.model';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-information-details',
  templateUrl: './information-details.component.html',
  styleUrls: ['./information-details.component.css']
})
export class InformationDetailsComponent implements OnInit {
  dataInfor: any[] = [];
  id : string = '';
  constructor(private infomationService: InformationService) { }
  ngOnInit(): void {
  }

  getInforById(){
    //const id = 'EpwJE9K26m4wwYBrQrFJ';
    this.infomationService.getInforById(this.id).subscribe(data => {
      this.dataInfor = [data];
      console.log(this.dataInfor)
      if(data==null){
        alert("Khong co du lieu");
      }
      return data;
    });
  }
}

  

  