import { IconNameToTitlePipe } from './icon-name-to-title.pipe';
import { IconCategories } from '../icons/data';

const icons = IconCategories.map((category) => category.icons).flat();

describe('IconNameToTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new IconNameToTitlePipe();
    expect(pipe).toBeTruthy();
  });

  describe('should return valid title for', () => {
    const pipe = new IconNameToTitlePipe();

    for (let i = 0; i < icons.length; i++) {
      it(icons[i] + 'icon', () => {
        expect(pipe.transform(icons[i])).toBeTruthy();
        expect(pipe.transform(icons[i])).toMatch(/^[a-zA-Z0-9_ ]*$/);
        expect(pipe.transform(icons[i])).not.toContain("_");
      });
    }
  });
});
