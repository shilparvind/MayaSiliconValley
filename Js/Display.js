class Display {
  constructor() {}
  show() {
    Creator.getCreatorInfo();
    console.log(clArtistSelect);
    if (allCreators !== undefined) {
      for (var crt in allCreators) {
        if (allCreators[crt].artist === clArtistSelect) {
          console.log(allCreators[crt]);
        }
      }
      //   console.log("aft foreach loop");
      //   console.log(allCreators);
    }
  }
}
