import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector, arrayPush, change } from 'redux-form';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const formName = 'createProject';
const formSection = 'projectAbout';

const TagButton = ({ input, array, dispatch, tag, tags = [], ...custom }) => {
  const handleTagAdd = () => {
    if (!tags.includes(tag)) {
      dispatch(arrayPush(formName, array, tag));
    }
    dispatch(change(formName, `${formSection}.tag`));
  };

  return (
    <Button
      disabled={tag === undefined}
      onClick={handleTagAdd}
      size="small"
      {...custom}
    >
      <AddIcon {...custom} />
      Add
    </Button>
  );
};

TagButton.propTypes = {
  input: PropTypes.object,
  array: PropTypes.string,
  dispatch: PropTypes.func,
  tag: PropTypes.string,
  tags: PropTypes.array,
};

const selector = formValueSelector(formName);

export const RenderTagButton = connect((state, props) => ({
  tag: selector(state, `${formSection}.tag`),
  tags: selector(state, props.array),
}))(TagButton);
