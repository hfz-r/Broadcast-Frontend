import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  convertFromHTML,
  ContentState,
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  getDefaultKeyBinding,
} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Paper, Divider } from '@material-ui/core';

import { EditorToolbar } from './components';
import { blockRenderMap } from './utils';

const useStyles = makeStyles(theme => ({
  root: {},
  editorContainer: {
    padding: theme.spacing(2),
    minHeight: 400,
    '& .public-DraftEditorPlaceholder-root': {
      ...theme.typography.body2,
    },
    '& .public-DraftEditorPlaceholder-hasFocus': {
      display: 'none',
    },
    '& .public-DraftEditor-content': {
      '& p': {
        ...theme.typography.body1,
      },
      '& h1': {
        ...theme.typography.h1,
      },
      '& h2': {
        ...theme.typography.h2,
      },
      '& h3': {
        ...theme.typography.h3,
      },
      '& h4': {
        ...theme.typography.h4,
      },
      '& h5': {
        ...theme.typography.h5,
      },
      '& h6': {
        ...theme.typography.h6,
      },
      '& blockquote': {
        ...theme.typography.subtitle1,
      },
      '& ul': {
        ...theme.typography.body1,
        marginLeft: theme.spacing(4),
      },
      '& ol': {
        ...theme.typography.body1,
        marginLeft: theme.spacing(4),
      },
      '& pre': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
      },
    },
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignJustify: {
    textAlign: 'justify',
  },
}));

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const RichEditor = props => {
  const {
    placeholder,
    className,
    input,
    meta: { pristine },
  } = props;

  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const classes = useStyles();

  useEffect(() => {
    if (input.value) {
      const blocksFromHTML = convertFromHTML(input.value);
      const content = ContentState.createFromBlockArray(blocksFromHTML);

      const state = EditorState.createWithContent(content);
      setEditorState(state);
    }
  }, []);

  useEffect(() => {
    if (pristine) {
      const clearState = EditorState.push(
        editorState,
        ContentState.createFromText(''),
      );
      setEditorState(clearState);
    }
  }, [pristine]);

  const handleContainerClick = () => {
    editorRef.current.focus();
  };

  const handleToolbarToggle = (type, value) => {
    if (type === 'blockType') {
      if (['left', 'center', 'right', 'justify'].includes(value)) {
        const newContentState = Modifier.setBlockData(
          editorState.getCurrentContent(),
          editorState.getSelection(),
          { 'text-align': value },
        );

        const newEditorState = EditorState.push(
          editorState,
          newContentState,
          'change-block-data',
        );

        setEditorState(newEditorState);
        return;
      }

      setEditorState(RichUtils.toggleBlockType(editorState, value));
    } else {
      setEditorState(RichUtils.toggleInlineStyle(editorState, value));
    }
  };

  const handleEditorChange = state => {
    input.onChange(stateToHTML(editorState.getCurrentContent()));
    setEditorState(state);
  };

  const handleKeyCommand = (command, state) => {
    const newState = RichUtils.handleKeyCommand(state, command);

    if (newState) {
      handleEditorChange(newState);
      return true;
    }

    return false;
  };

  const mapKeyToEditorCommand = event => {
    if (event.keyCode === 9) {
      const newEditorState = RichUtils.onTab(event, editorState, 4);

      if (newEditorState !== editorState) {
        handleEditorChange(newEditorState);
      }
      return;
    }
    // eslint-disable-next-line consistent-return
    return getDefaultKeyBinding(event);
  };

  function blockStyleFn(contentBlock) {
    const textAlign = contentBlock.getData().get('text-align');

    if (textAlign) {
      const c = `textAlign${capitalize(textAlign)}`;
      return classes[c];
    }

    return '';
  }

  return (
    <Paper className={clsx(classes.root, className)}>
      <EditorToolbar editorState={editorState} onToggle={handleToolbarToggle} />
      <Divider />
      <div
        role="presentation"
        className={classes.editorContainer}
        onClick={handleContainerClick}
      >
        <Editor
          {...input}
          blockRenderMap={blockRenderMap}
          blockStyleFn={blockStyleFn}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={handleEditorChange}
          placeholder={placeholder}
          ref={editorRef}
          spellCheck
        />
      </div>
    </Paper>
  );
};

RichEditor.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.any,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default connect()(RichEditor);
