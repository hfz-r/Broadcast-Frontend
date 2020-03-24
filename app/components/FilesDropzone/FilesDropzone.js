/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { useDropzone } from 'react-dropzone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
  colors,
} from '@material-ui/core';
import { connect } from 'react-redux';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreIcon from '@material-ui/icons/MoreVert';
import Image from 'components/Images';
import bytesToSize from 'utils/bytesToSize';

const useStyles = makeStyles(theme => ({
  root: {},
  dropZone: {
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.grey[50],
      opacity: 0.5,
      cursor: 'pointer',
    },
  },
  dragActive: {
    backgroundColor: colors.grey[50],
    opacity: 0.5,
  },
  image: {
    width: 130,
  },
  info: {
    marginTop: theme.spacing(1),
  },
  list: {
    maxHeight: 320,
  },
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });

const FilesDropzone = props => {
  const { className, input, dispatch, ...rest } = props;
  const classes = useStyles();

  const handleDrop = useCallback(
    async acceptedFiles => {
      const files = input.value || [];
      try {
        const fileObj = {
          name: acceptedFiles[0].name,
          type: acceptedFiles[0].type,
          size: acceptedFiles[0].size,
          data: await getBase64(acceptedFiles[0]).then(
            result => result.split('base64,')[1],
          ),
        };
        const allFiles = files.concat(fileObj);
        input.onChange(allFiles);
      } catch (e) {
        console.log(e.message);
      }
    },
    [input.value],
  );

  const handleRemoveAll = () => {
    input.onChange([]);
  };

  const handleUpload = () => {
    // use api to submit form
    input.value.map(file => console.log(file));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div
        className={clsx({
          [classes.dropZone]: true,
          [classes.dragActive]: isDragActive,
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div>
          <Image className={classes.image} name="add-file" />
        </div>
        <div>
          <Typography gutterBottom variant="h3">
            Select files
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            variant="body1"
          >
            Drop files here or click <Link underline="always">browse</Link>{' '}
            thorough your machine
          </Typography>
        </div>
      </div>
      {input.value.length > 0 && (
        <React.Fragment>
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <List className={classes.list}>
              {input.value.map((file, i) => (
                <ListItem divider={i < input.value.length - 1} key={uuid()}>
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={file.name}
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary={bytesToSize(file.size)}
                  />
                  <Tooltip title="More options">
                    <IconButton edge="end">
                      <MoreIcon />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </PerfectScrollbar>
          <div className={classes.actions}>
            <Button onClick={handleRemoveAll} size="small">
              Remove all
            </Button>
            <Button
              onClick={handleUpload}
              color="secondary"
              size="small"
              variant="contained"
            >
              Upload files
            </Button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

FilesDropzone.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect()(FilesDropzone);
