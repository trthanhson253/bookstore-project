import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { CatesService } from "../../services/cates.service";
import { Cates } from "../../models/cates";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-cates",
  templateUrl: "./cates.component.html",
  styleUrls: ["./cates.component.css"]
})
export class CatesComponent implements OnInit {
  public cates: Cates[] = [];

  constructor(public catesService: CatesService, public dialog: MatDialog) {}

  displayedColumns: string[] = ["position", "name", "action"];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCatesList() {
    this.catesService.getCatesList().subscribe(
      res => {
        
        this.dataSource.data = res.json();
      },
      err => {
        
      }
    );
  }

  openDialogAddMyCates(): void {
    let dialogRef = this.dialog.open(DialogAddMyCatesDialog, {
      width: "450px"
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCatesList();
    });
  }

  openDialogUpdateMyCates(cates: Cates): void {
    const dialogRef = this.dialog.open(DialogUpdateMyCatesDialog, {
      width: "450px",
      data: cates
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCatesList();
    });
  }

  openDialogDeleteMyCates(id: number): void {
    const dialogRef = this.dialog.open(DialogDeleteMyCatesDialog, {
      width: "550px",
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCatesList();
    });
  }

  ngOnInit() {
    this.getCatesList();

    this.dataSource.paginator = this.paginator;
  }
}

@Component({
  selector: "add-my-cates",
  templateUrl: "dialog-add-my-cates.html"
})
export class DialogAddMyCatesDialog implements OnInit {
  public newCates: Cates = new Cates();

  constructor(
    public dialogRef: MatDialogRef<DialogAddMyCatesDialog>,
    public catesService: CatesService
  ) {}

  onAddNewCates(): void {
    this.catesService.sendCates(this.newCates).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {}
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}

// UPDATE CATEGORY POP UP -----------------------------------------------------------------

@Component({
  selector: "update-my-cates",
  templateUrl: "dialog-update-my-cates.html"
})
export class DialogUpdateMyCatesDialog implements OnInit {
  public updateCates: Cates = new Cates();

  constructor(
    public dialogRef: MatDialogRef<DialogUpdateMyCatesDialog>,
    public catesService: CatesService,
    @Inject(MAT_DIALOG_DATA) public data: Cates
  ) {
    this.updateCates = this.data;
  }

  onAddNewCates(): void {
    this.catesService.sendCates(this.updateCates).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {}
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}

// DELETE CATEGORY POP UP -----------------------------------------------------------------

@Component({
  selector: "delete-my-cates",
  templateUrl: "dialog-delete-my-cates.html"
})
export class DialogDeleteMyCatesDialog implements OnInit {
  public id: number;
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteMyCatesDialog>,
    public catesService: CatesService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {
    this.id = this.data;
  }

  onDeleteCates(): void {
    this.catesService.deleteCates(this.id).subscribe(
      res => {
        this.dialogRef.close();
      },
      err => {}
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
