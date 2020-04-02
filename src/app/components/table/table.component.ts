import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public players: Array<any> = [{
    avatar: "https://media1.giphy.com/media/11QEuO6MtKCl6E/giphy.gif?cid=ecf05e4…&rid=giphy.gif"
  }, {
    avatar: "https://media1.giphy.com/media/YAnpMSHcurJVS/giphy.gif?cid=ecf05e473d99ec2b78ea74c01b55307920c6af4d4565fbf0&rid=giphy.gif"
  }, {
    avatar: "https://media1.giphy.com/media/l0HlUxcWRsqROFYuk/giphy.gif?cid=ecf05e47cc25d93b00f70cb3750ad82765036792210b8268&rid=giphy.gif"
  }, {
    avatar: "https://media1.giphy.com/media/WPnkJKCA3c476pGjGu/giphy.gif?cid=ecf05e470f9ced5c00976240a431972a6851938b650c5d50&rid=giphy.gif"
  }, {
    avatar: "https://media2.giphy.com/media/3ohjUR3PKyssNa6sOA/giphy.gif?cid=ecf05e47f3d114e602e81e70f1ca9f1bb18e22e86544484a&rid=giphy.gif"
  }, {
    avatar: "https://media3.giphy.com/media/BomatsZbWzd9c1P298/giphy.gif?cid=ecf05e47682bf5d1932e8bd23dd08f14e4f2aed9795fe52f&rid=giphy.gif"
  }, {
    avatar: "https://media3.giphy.com/media/bpbio2T6cN7Qk/giphy.gif?cid=ecf05e47329dd107bb36835c3b728dc23766ce3cecc3d101&rid=giphy.gif"
  }, {
    avatar: "https://media2.giphy.com/media/l2SpOCdNB9WRmXc3K/giphy.gif?cid=ecf05e475b759c4c2128b521fbc9c00dbc1979626b6ab3a9&rid=giphy.gif"
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
