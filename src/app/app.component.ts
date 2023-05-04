import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  chartData = [
    {
      name: 'Appointment 2022',
      series: [
        {
          name: 'January',
          value: 90
        },
        {
          name: 'February',
          value: 5000
        },
        {
          name: 'March',
          value: 250
        },
        {
          name: 'April',
          value: 0
        },
        {
          name: 'May',
          value: 2000
        },
        {
          name: 'June',
          value: 1
        },
        {
          name: 'July',
          value: 1000
        },
        {
          name: 'August',
          value: 300
        },
        {
          name: 'September',
          value: 800
        },
        {
          name: 'October',
          value: 1800
        },
        {
          name: 'November',
          value: 150
        },
        {
          name: 'December',
          value: 200
        }
      ]
    },
    {
      name: 'Appointment 2023',
      series: [
        {
          name: 'January',
          value: 3000
        },
        {
          name: 'February',
          value: 7500
        },
        {
          name: 'March',
          value: 9500
        },
        {
          name: 'April',
          value: 6500
        },
        {
          name: 'May',
          value: 8500
        },
        {
          name: 'June',
          value: 0
        },
        {
          name: 'July',
          value: 0
        },
        {
          name: 'August',
          value: 0
        },
        {
          name: 'September',
          value: 0
        },
        {
          name: 'October',
          value: 0
        },
        {
          name: 'November',
          value: 0
        },
        {
          name: 'December',
          value: 0
        }
      ]
    }
  ];
  
  // Define chart options
  colorScheme = 'cool';
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;



























  
  // chartData = [
  //   {
  //     name: 'Appointment 2022',
   
  //     series: [
  //       {
  //         name: 'January',
  //         value: 5000
  //       },
  //       {
  //         name: 'February',
  //         value: 7000
  //       },
  //       {
  //         name: 'March',
  //         value: 9000
  //       },
  //       {
  //         name: 'April',
  //         value: 6000
  //       },
  //       {
  //         name: 'May',
  //         value: 8000
  //       },
  //       {
  //         name: 'June',
  //         value: 10000
  //       },
  //       {
  //         name: 'July',
  //         value: 12000
  //       },
  //       {
  //         name: 'August',
  //         value: 9000
  //       },
  //       {
  //         name: 'September',
  //         value: 11000
  //       },
  //       {
  //         name: 'October',
  //         value: 8000
  //       },
  //       {
  //         name: 'November',
  //         value: 7000
  //       },
  //       {
  //         name: 'December',
  //         value: 10000
  //       }
  //     ],
     
  //   }
  // ];

  // onSelect(event: any) {
  //   console.log(event);
  // }

  // onActivate(event: any) {
  //   console.log(event);
  // }

  // onDeactivate(event: any) {
  //   console.log(event);
  // }
}
