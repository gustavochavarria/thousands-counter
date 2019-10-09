import test from 'ava';
import tc from '..';

test('shoul be 700', t => {
  t.is(tc(700, 1), '700');
});

test('should be 1K', t => {
  const oneK = tc(1000);
  t.is(oneK, '1.0K');
});

test('should be 1.5M', t => {
  const oneMillion = tc(1500000, 1);
  t.is(oneMillion, '1.5M');
});

test('should be a -1.24K', t => {
  const oneK = tc(-1240, 2);
  t.is(oneK, '-1.24K');
});
