import { is, pipe, filter, values } from 'ramda';
import invariant from 'invariant';

/**
 * Validate the shape of redux store
 */
export default function checkStore(store) {
  const result = pipe(
    values,
    filter(s => is(Function, s) || is(Object, s)),
  )(store);

  invariant(
    result && result.length > 0,
    '(app/utils...) injectors: Expected a valid redux store',
  );
}
