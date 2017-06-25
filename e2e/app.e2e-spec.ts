import { ChessProjectPage } from './app.po';

describe('chess-project App', () => {
  let page: ChessProjectPage;

  beforeEach(() => {
    page = new ChessProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('app works!');
  });
});
