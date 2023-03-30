import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";


@Component({
  selector: 'Featured',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {

  webViewSrc = "https://drive.google.com/drive/u/0/my-drive";

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
  onLoadStarted(args: LoadEventData) {
    const webView = args.object as WebView;

    if (!args.error) {
        console.log("Load Start");
        console.log(`EventName: ${args.eventName}`);
        console.log(`NavigationType: ${args.navigationType}`);
        console.log(`Url: ${args.url}`);
    } else {
        console.log(`EventName: ${args.eventName}`);
        console.log(`Error: ${args.error}`);
    }
}

onLoadFinished(args: LoadEventData) {
    const webView = args.object as WebView;

    if (!args.error) {
        console.log("Load Finished");
        console.log(`EventName: ${args.eventName}`);
        console.log(`NavigationType: ${args.navigationType}`);
        console.log(`Url: ${args.url}`);
    } else {
        console.log(`EventName: ${args.eventName}`);
        console.log(`Error: ${args.error}`);
    }
  }
}
