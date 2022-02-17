import { Component, OnInit } from "@angular/core";
import { GiphyService } from "../service/giphy.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  gifs: any;
  searchQuery: string;
  notFound = false;
  searchingQuery: string;

  footerLinks = [
    "Footer 1",
    "Footer 2",
    "Footer 3",
    "Footer 4",
    "Footer 5",
    "Footer 6",
    "Footer 7",
    "Footer 8",
    "Footer 9",
    "Footer 10",
    "Footer 11",
    "Footer 12",
    "Footer 13",
    "Footer 14",
    "Footer 15",
    "Footer 16",
    "Footer 17",
    "Footer 18",
    "Footer 19",
    "Footer 20",
  ];

  constructor(private service: GiphyService) {}
  ngOnInit(): void {
    this.searchGifs();
  }

  searchGifs() {
    this.service.searchGifs(
      this.searchingQuery ? this.searchingQuery : "happy"
    );
    this.service.getGifs().subscribe(
      (results) => {
        this.gifs = results["data"];
      },
      (error) => {
        alert("not found :( ");
      }
    );
    this.searchingQuery = null;
  }
}
