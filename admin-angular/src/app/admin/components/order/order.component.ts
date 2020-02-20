import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { OrderService } from "../../services/order.service";
import { Order } from "../../models/order";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  constructor(public dialog: MatDialog, public orderService: OrderService) {}

  displayedColumns: string[] = [
    "id",
    "orderDate",
    "orderStatus",
    "orderTotal",
    "action"
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getOrderList() {
    this.orderService.getOrderList().subscribe(
      res => {
        
        this.dataSource.data = res.json();
      },
      err => {
        
      }
    );
  }

  openDialogSeeMyOrder(order: Order): void {
    const dialogRef = this.dialog.open(DialogSeeMyOrderDialog, {
      width: "750px",
      data: order
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  ngOnInit() {
    this.getOrderList();
    this.dataSource.paginator = this.paginator;
  }
}

@Component({
  selector: "see-my-order",
  templateUrl: "dialog-see-my-order.html"
})
export class DialogSeeMyOrderDialog implements OnInit {
  public order: Order = new Order();

  constructor(
    public dialogRef: MatDialogRef<DialogSeeMyOrderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) {
    this.order = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
