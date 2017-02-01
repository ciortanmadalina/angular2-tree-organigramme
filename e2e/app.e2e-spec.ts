import { TreeViewPage } from './app.po';

describe('tree-view App', function() {
  let page: TreeViewPage;

  beforeEach(() => {
    page = new TreeViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
