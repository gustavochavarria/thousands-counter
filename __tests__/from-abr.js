import test from 'ava';
import { fromAbr } from '../src';

test('should be 700', t => {
  t.is(fromAbr('700'), 700);
});

test('should be 4805', t => {
  t.is(fromAbr('4,805'), 4805);
});

test('should be 1000', t => {
  const oneK = fromAbr('1K');
  t.is(oneK, 1000);
});

test('should be 1440 (lower case)', t => {
  const oneK = fromAbr('1.44k');
  t.is(oneK, 1440);
});

test('should be 1440 (upper case)', t => {
  const oneK = fromAbr('1.44K');
  t.is(oneK, 1440);
});

test('should be -1000', t => {
  const oneK = fromAbr('-1K');
  t.is(oneK, -1000);
});

test('should be 1,500,000', t => {
  const oneMillion = fromAbr('1.5M');
  t.is(oneMillion, 1500000);
});

test('should be -1240', t => {
  const oneK = fromAbr('-1.24K');
  t.is(oneK, -1240);
});

test('should be 1,000,000,000', t => {
  const oneK = fromAbr('1B');
  t.is(oneK, 1000 ** 3);
});
