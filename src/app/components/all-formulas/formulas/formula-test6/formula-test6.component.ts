import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartDataset, ChartOptions, ChartType, Color } from 'chart.js';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import { NgChartsConfiguration, baseColors } from 'ng2-charts'
import { doLineSegmentsIntersect } from './line-segments-intersect-simplified';
import ChartDataLabels from 'chartjs-plugin-datalabels'

// const {myChart}= require('./myChart')

@Component({
  selector: 'app-formula-test6',
  templateUrl: './formula-test6.component.html',
  styleUrls: ['./formula-test6.component.css']
})
export class FormulaTest6Component implements OnInit, AfterViewInit {

  matrixCodes: number[] = [0, 0]

  k: number[][] = []
  t: number[][] = []

  ramatNokhut: number[] = [0, 0]

  @ViewChild('chartjsCanvas') canvas?: ElementRef = undefined;
  @ViewChild('chartjsCanvas2') canvas2?: ElementRef = undefined;

  canvases: (ElementRef|undefined)[] = [this.canvas,this.canvas2]
  charts:Chart[] = []


  constructor(private data: PersonalDataService) {
    Chart.register(ChartDataLabels)
  }
  ngAfterViewInit(): void {
    this.refreshData()

  }

  ngOnInit(): void {
    // console.log(doLineSegmentsIntersect({x:0,y:0},{x:3,y:5},{x:10,y:0},{x:0,y:3}));
    // console.log(doLineSegmentsIntersect({x:0,y:0},{x:10,y:0},{x:4,y:2},{x:4,y:-8}));

    this.refreshData()
    this.data.register(() => this.refreshData())
  }

  refreshData() {
    this.matrixCodes = []
    this.matrixCodes.push( 55 - 2 * this.data.personalData.birthDate.month - this.data.personalData.birthDate.day)
    this.matrixCodes[0] = this.matrixCodes[0] == 0? 52 : this.matrixCodes[0]
    if (this.matrixCodes[0] < 52)
      this.matrixCodes.push(this.matrixCodes[0] >= 40 ? this.matrixCodes[0] + 1 : this.matrixCodes[0] + 13)
    // this.matrixCode = 41;
    // console.log(this.matrixCode * this.data.personalData.birthDate.year * 52);
    // if (this.matrixCodes[1] > 52)
    //   this.matrixCodes.pop()
    this.t = []
    this.canvases = [this.canvas,this.canvas2]

    this.matrixCodes.forEach((matrixCode,index) => {
      console.log('creating graph ' + index);
      

      this.k[index] = this.data.funcs.toDigits(matrixCode * this.data.personalData.birthDate.year * 52)
      if (this.k[index].length == 6) {
        this.k[index].push(0)
      }
      this.t[index] = [];
      this.k[index].forEach((element, i) => {
        this.t[index].push(element + 10 * i);
      });

      this.ramatNokhut[index] = this.k[index].reduce((sum, cur) => sum + cur) / 7;

      if ( this.charts[index]){
        this.charts[index].destroy()
      }

      // Those born on jan first will have a single graph
      // if (this.matrixCodes[1] <= 52)
        this.charts[index] = this.createChart(this.k[index],this.ramatNokhut[index],this.canvases[index])
    });

  }

  // public chart!: Chart

  createChart(k:number[],ramatNokhut:number,canvas:ElementRef|undefined) {
    // console.log(this.canvas);
    // console.log(this.canvas?.nativeElement);

    let kArr = [{ x: 0, y: 0 }]
    k.forEach((element, i) => {
      kArr.push({ x: (i + 1) * 10, y: element })
    });

    let ramatNokhutData = [{ x: 0, y: ramatNokhut }, { x: 70, y: ramatNokhut, hideDataLabel:true }]

    let intersections = []
    let i = 0;
    do {
      let intersectionPoint = doLineSegmentsIntersect(ramatNokhutData[0], ramatNokhutData[1], kArr[i], kArr[i + 1])
      if (intersectionPoint) {
        intersections.push(intersectionPoint)
      }
    } while ((i += 1) < kArr.length - 1);

    // if (this.chart) {
    //   this.chart.destroy()
    // }

    let maxY = kArr.reduce((highest, curr) => curr.y > highest.y ? curr : highest).y
    let minY = kArr.reduce((lowest, curr) => curr.y < lowest.y ? curr : lowest).y
    let maxX = kArr.reduce((highest, curr) => curr.x > highest.x ? curr : highest).x
    let minX = kArr.reduce((lowest, curr) => curr.x < lowest.x ? curr : lowest).x
    let labelDownMargin = (maxY - minY) / 10

    return new Chart(canvas?.nativeElement, {
      type: 'scatter',
      
      data: {
        datasets: [
          {
            data: intersections,
            label: 'Intersections',
            borderColor: '#ac40ff',
            backgroundColor:'#ac40ff',
            borderWidth: 1,
            pointBackgroundColor: '#ac40ff',
            pointBorderColor: '#8c00ff',
            pointRadius: 5,
            pointHoverRadius: 5,
            pointHitRadius: 0,
            tension: 0,
            showLine: false,
          },
          {
            data: ramatNokhutData,
            label: 'Ramat Nokhut',
            borderColor: 'orange',
            backgroundColor:'orange',
            borderWidth: 2,
            pointBackgroundColor: 'orange',
            pointBorderColor: 'darkorange',
            pointRadius: 5,
            pointHoverRadius: 5,
            pointHitRadius: 0,
            showLine: true
          },
          {
            data: kArr,
            label: 'K',
            borderColor: '#40d7ff',
            backgroundColor:'#40d7ff',
            borderWidth: 1,
            pointBackgroundColor: '#40d7ff',
            pointBorderColor: '#00b7ff',
            pointRadius: 5,
            pointHoverRadius: 5,
            pointHitRadius: 0,
            fill: {
              target: '-1',
              above: '#1cac5880',
              below: '#90302080'
            },
            tension: 0,
            showLine: true,
          },
        ]
      },
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          tooltip: {
            enabled: true,
            callbacks: {
              label: (ctx: any) => {
                // console.log(ctx);
                if (ctx.dataset.label === 'Intersections' || ctx.dataset.label === 'K') {
                  return `${parseFloat(ctx.raw.x + ctx.raw.y).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 0 })}`
                }
                if (ctx.dataset.label === 'Ramat Nokhut') {
                  return `${ramatNokhut.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 0 })}`

                }

                return `${parseFloat(ctx.raw.x + ctx.raw.y).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 0 })}`
              }
            }
          },
          datalabels: {
            display:(context)=>{
              let value: any = context.dataset.data[context.dataIndex];
              return !value.hideDataLabel as boolean
            },
            anchor: (context) => {
              let value: any = context.dataset.data[context.dataIndex];
              return value.y > maxY - labelDownMargin ? 'start' : 'end'
            },
            align: (context) => {
              let value: any = context.dataset.data[context.dataIndex];
              let bottomPercent = (maxY - value.y) / (maxY - minY)
              let leftPercent = (maxX - value.x) / (maxX - minX)

              if (leftPercent >= 0.9) return 'right'
              if (leftPercent <= 0.1) return 'left'
              if (bottomPercent <= 0.1) return 'bottom'
              return 'top'
            },
            color: 'white',
            borderRadius: 3,
            backgroundColor: '#222222cc',

            font: {
              weight: 'bold',
              size: 11,
            },
            formatter: function (value) {
              // console.log(value);

              return `${parseFloat(value.x + value.y).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 0 })}`
            },
            offset: 5,
            padding: 3
          }

        }
      }
    });
  }
}
