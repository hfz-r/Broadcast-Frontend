import React from 'react';
import { compose, filter, flatten, map } from 'ramda';
import Label from 'components/Label';

export default ({ selected, payload, className }) => {
  const Labeled = lbl => (
    <Label className={className} key={lbl.text} color={lbl.color}>
      {lbl.text}
    </Label>
  );

  return map(
    Labeled,
    compose(
      flatten,
      map(text => filter(p => p.text === text, payload)),
      map(text => text),
    )(selected),
  );
};
