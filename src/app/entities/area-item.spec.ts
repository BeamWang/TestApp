import { AreaItem } from './area-item';

describe('AreaItem', () => {
  it('创建实例', () => {
    expect(new AreaItem('杭州',500)).toBeTruthy();
  });
});
