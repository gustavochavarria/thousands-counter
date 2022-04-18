import test from 'ava';
import tc from '../src';

test('should be 700', t => {
  t.is(tc('700'), 700);
});

test('should be 1K', t => {
  const oneK = tc(1000);
  t.is(oneK, '1K');
});

test('should be 1K (forcing)', t => {
  const oneK = tc(1200, { digits: 0 });
  t.is(oneK, '1K');
});

test('should be 1.44k (lower case)', t => {
  const oneK = tc(1444, { digits: 2, uppercase: false });
  t.is(oneK, '1.44k');
});

test('should be negative 1K', t => {
  const oneK = tc(-1000);
  t.is(oneK, '-1K');
});

test('should be 1.5M', t => {
  const oneMillion = tc(1500000, {
    digits: 1
  });
  t.is(oneMillion, '1.5M');
});

test('should be -1.24K', t => {
  const oneK = tc(-1240, {
    digits: 2
  });
  t.is(oneK, '-1.24K');
});

test('should be 1B', t => {
  const oneK = tc(1000 ** 3);
  t.is(oneK, '1B');
});
