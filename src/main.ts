/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

WA.room.onEnterLayer("floor").subscribe(() => {
    WA.room.hideLayer("roof");
    WA.room.hideLayer("walls-bg-front");
    WA.room.hideLayer("signs");
  });
  
WA.room.onLeaveLayer("floor").subscribe(() => {
    WA.room.showLayer("roof");
    WA.room.showLayer("walls-bg-front");
    WA.room.showLayer("signs");
  });
  WA.room.onEnterLayer("rooms_floor").subscribe(() => {
    WA.room.hideLayer("facade");
    WA.room.hideLayer("facade-furniture-fg");
    WA.room.hideLayer("facade-furniture-bg");
  });
  WA.room.onLeaveLayer("rooms_floor").subscribe(() => {
    WA.room.showLayer("facade");
    WA.room.showLayer("facade-furniture-fg");
    WA.room.showLayer("facade-furniture-bg");
  });
  WA.room.onEnterLayer("room_walls_remove").subscribe(() => {
    WA.room.hideLayer("facade");
    WA.room.hideLayer("facade-furniture-fg");
    WA.room.hideLayer("facade-furniture-bg");
  });
  WA.room.onEnterLayer("room_walls_remove").subscribe(() => {
    WA.room.hideLayer("facade");
    WA.room.hideLayer("facade-furniture-fg");
    WA.room.hideLayer("facade-furniture-bg");
  });
  
WA.room.onLeaveLayer("room_walls_remove").subscribe(() => {
    WA.room.showLayer("facade");
    WA.room.showLayer("facade-furniture-fg");
    WA.room.showLayer("facade-furniture-bg");
  });

    // JULIA TESTING
    WA.room.onEnterLayer('test_popup').subscribe(() => {
        
      currentPopup = WA.ui.openPopup("test_popup","Hello This is Julia's test",[{
          label: "Test",
          className: "primary",
          callback: () => {
              // Close the popup when the "Close" button is pressed.
              WA.ui.website.open({
                  url: "https://docs.google.com/document/d/1-mSPDgih5i0VsidlaNj_lZq3sP3KGSTqizcYGb8Kq4o/edit?usp=sharing",
                  position: {
                      vertical: "middle",
                      horizontal: "middle",
                  },
                  size: {
                      height: "50vh",
                      width: "50vw",
                  },
              });
              
          }
      }]);
  })

  WA.room.onLeaveLayer('test_popup').subscribe(closePopUp)


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
