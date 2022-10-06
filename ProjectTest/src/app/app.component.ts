import { Component, OnInit } from '@angular/core';
import { ProblemParentData } from './shared/model/ProblemParentData ';
import { ProblemServices } from './shared/services/ProblemServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProjectTest';
  problemParentDataList: ProblemParentData[];
  
  constructor(private problemService: ProblemServices) { }

  ngOnInit(): void {
    this.problemParentDataList = this.problemService.getData();
    for (let i = 0; i < this.problemParentDataList.length; i++)
    {
      if (this.problemParentDataList[i].totalDiff.startsWith('-') && this.problemParentDataList[i].totalDiff.length > 1) {
        this.problemParentDataList[i].class = 'negativeData'
      }
      else if (!this.problemParentDataList[i].totalDiff.startsWith('-') && this.problemParentDataList[i].totalDiff.length > 1) {
        this.problemParentDataList[i].class = 'positiveData'
      }

      for (let j = 0; j < this.problemParentDataList[i].problemDataList.length; j++) {
        if (this.problemParentDataList[i].problemDataList[j].diff.startsWith('-') && this.problemParentDataList[i].problemDataList[j].diff.length > 1) {
          this.problemParentDataList[i].problemDataList[j].class = 'negativeData'
        }
        else if (!this.problemParentDataList[i].problemDataList[j].diff.startsWith('-') && this.problemParentDataList[i].problemDataList[j].diff.length > 1) {
          this.problemParentDataList[i].problemDataList[j].class = 'positiveData'
        }
      }
    }
    var a = 'a';
  }
}
