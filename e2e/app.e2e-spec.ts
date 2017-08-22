import { GoogleMapsApiAngularPage } from './app.po';

describe('google-maps-api-angular App', () => {
  let page: GoogleMapsApiAngularPage;

  beforeEach(() => {
    page = new GoogleMapsApiAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
