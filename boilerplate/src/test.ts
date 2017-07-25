import test from 'ava'
import m from '.'

const fn = async () => Promise.resolve(m('foo', {}))

test(async t => {
	t.is(await fn(), 'foo & rainbows');
});
