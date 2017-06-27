import { QuizFrameworkPage } from './app.po';

describe('quiz-framework App', () => {
  let page: QuizFrameworkPage;

  beforeEach(() => {
    page = new QuizFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
