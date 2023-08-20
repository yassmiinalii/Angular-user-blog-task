import { TestBed } from '@angular/core/testing';
import { LimitCharactersPipe } from './limit-characters.pipe';

describe('LimitCharactersPipe', () => {

  let pipe: LimitCharactersPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LimitCharactersPipe],
    });
    pipe = TestBed.inject(LimitCharactersPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not modify string shorter than limit', () => {
    const result = pipe.transform('Short string', 20);
    expect(result).toEqual('Short string');
  });

  it('should truncate string longer than limit', () => {
    const result = pipe.transform('This is a long string', 10);
    expect(result).toEqual('This is a  ...');
  });

  it('should handle empty input', () => {
    const result = pipe.transform('', 5);
    expect(result).toEqual('');
  });

  it('should handle null input', () => {
    const result = pipe.transform(null, 5);
    expect(result).toEqual('');
  });

});
