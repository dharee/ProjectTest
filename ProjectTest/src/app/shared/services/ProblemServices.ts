import { Observable } from "rxjs";
import { ProblemData } from "../model/ProblemData";
import { ProblemParentData } from "../model/ProblemParentData ";

export class ProblemServices {

  public getData(): ProblemParentData[] {
    //mock data
    let problemParentdataList: ProblemParentData[] = [
      {
        name: "Problèmes techniques", totalCrawl1: 67, totalCrawl2: 116, totalDiff: "-49", totalDiffPercent: "-60%", problemDataList: [
          { name: "Pages non indexées", crawl1: 14, crawl2: 116, diff: "-49", diffPercent: "-60%", class: "" },
          { name: "Pages hors sitemap", crawl1: 31, crawl2: 31, diff: "-", diffPercent: "-", class: "" },
          { name: "Tags canoniques manquants", crawl1: 17, crawl2: 14, diff: "+3", diffPercent: "+1%", class: "" },
          { name: "Pages orphelines", crawl1: 17, crawl2: 14, diff: "+3", diffPercent: "+1%", class: "" },
          { name: "Mailage interne manquant", crawl1: 17, crawl2: 14, diff: "+3", diffPercent: "+1%", class: "" },
          { name: "Pages lentes desktop / Pages lentes mobile", crawl1: 17, crawl2: 14, diff: "+3", diffPercent: "+1%", class: "" },
          { name: "Redirection non 301", crawl1: 17, crawl2: 14, diff: "+3", diffPercent: "+1%", class: "" },
          { name: "Pages en erreur 4xx et 5xx", crawl1: 17, crawl2: 14, diff: "+3", diffPercent: "+1%", class: "" },
          { name: "Internationalisation", crawl1: 17, crawl2: 14, diff: "+3", diffPercent: "+1%", class: "" },
          { name: "Micro données", crawl1: 17, crawl2: 14, diff: "+3", diffPercent: "+1", class: "" }
        ], class: ""
      },
      { name: "Problèmes sèmantiques", totalCrawl1: 31, totalCrawl2: 31, totalDiff: "-", totalDiffPercent: "-", problemDataList: [], class: "" },
      { name: "Problèmes comportementaux", totalCrawl1: 17, totalCrawl2: 19, totalDiff: "-2", totalDiffPercent: "-20%", problemDataList: [], class: "" }
    ];


    return problemParentdataList;
  }
}
