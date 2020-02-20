import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { UsersService } from "../../services/users.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { User } from "../../models/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  constructor(public usersService: UsersService, public dialog: MatDialog) {}

  displayedColumns: string[] = ["id", "name", "username", "role", "action"];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUsersList() {
    this.usersService.getUsersList().subscribe(
      res => {
        this.dataSource.data = res.json();
      },
      err => {
       
      }
    );
  }

  openDialogAddMyUsers(): void {
    let dialogRef = this.dialog.open(DialogAddMyUserDialog, {
      width: "450px"
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUsersList();
    });
  }

  ngOnInit() {
    this.getUsersList();
    this.dataSource.paginator = this.paginator;
  }
}

// ADD NEW USER ------------------------------------------------------

@Component({
  selector: "add-my-user",
  templateUrl: "dialog-add-my-user.html"
})
export class DialogAddMyUserDialog implements OnInit {
  public newUser: User = new User();

  constructor(
    public usersService: UsersService,
    public dialogRef: MatDialogRef<DialogAddMyUserDialog>
  ) {}

  onAddNewUser() {
    this.usersService.sendUser(this.newUser).subscribe(
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
