import { DiplomskiPage } from './app.po';

describe('diplomski App', () => {
  let page: DiplomskiPage;

  beforeEach(() => {
    page = new DiplomskiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
