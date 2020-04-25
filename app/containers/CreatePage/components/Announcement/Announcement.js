import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { connect } from 'react-redux';
import { Field, FieldArray, formValueSelector } from 'redux-form';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import {
  RenderChip,
  RenderSelectMultiple,
  RenderTextField,
} from 'components/Form';
import { categories } from 'templates/config';
import { required } from '../../validators';
import { RenderTagButton } from './RenderTagButton';
import { RenderDatePicker } from './RenderDatePicker';

const formName = 'createProject';
const formSection = 'projectAbout';

const useStyles = makeStyles(theme => ({
  root: {},
  alert: {
    marginBottom: theme.spacing(3),
  },
  formGroup: {
    marginBottom: theme.spacing(3),
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  fieldHint: {
    margin: theme.spacing(1, 0),
  },
  tags: {
    marginTop: theme.spacing(1),
    '& > * + *': {
      marginLeft: theme.spacing(1),
    },
  },
  flexGrow: {
    flexGrow: 1,
  },
  dateField: {
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const RenderTags = ({ fields }) => (
  <React.Fragment>
    {fields.map((tag, index) => (
      <Field
        key={tag}
        name={tag}
        component={RenderChip}
        onRemoveTag={() => fields.remove(index)}
      />
    ))}
  </React.Fragment>
);

const AboutAnnouncement = props => {
  const { className, formActions } = props;

  const classes = useStyles();

  useEffect(() => {
    formActions.initialize(formName, {
      projectAbout: {
        // category: ['Others'],
        // tags: ['hartalega'],
        start_date: moment(),
        end_date: moment().add(1, 'day'),
      },
    });
  }, []);

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      formActions.arrayPush(formName, `${formSection}.tags`, e.target.value);
      formActions.change(formName, `${formSection}.tag`, '');
    }
  };

  return (
    <Card className={clsx(classes.root, className)}>
      <CardHeader title="About the announcement" />
      <CardContent>
        <div className={classes.formGroup}>
          <Field
            name="title"
            label="Title"
            component={RenderTextField}
            fullWidth
            variant="outlined"
            validate={[required]}
          />
        </div>
        <div className={classes.formGroup}>
          <Field
            name="description"
            label="Description"
            component={RenderTextField}
            fullWidth
            multiline
            rows="4"
            variant="outlined"
            validate={[required]}
          />
        </div>
        <div className={classes.formGroup}>
          <Field
            name="category"
            label="Category"
            payload={categories}
            component={RenderSelectMultiple}
          />
        </div>
        <div className={classes.formGroup}>
          <div className={classes.fieldGroup}>
            <Field
              name="start_date"
              label="Start Date"
              component={RenderDatePicker}
              format={null}
              className={classes.dateField}
            />
            <Field
              name="end_date"
              label="End Date"
              component={RenderDatePicker}
              format={null}
              className={classes.dateField}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <div className={classes.fieldGroup}>
            <Field
              name="tag"
              label="Tags"
              component={RenderTextField}
              onKeyDown={handleKeyDown}
              className={classes.flexGrow}
              variant="outlined"
            />
            <Field
              name="tagbutton"
              component={RenderTagButton}
              array={`${formSection}.tags`}
            />
          </div>
          <Typography className={classes.fieldHint} variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            efficitur nisi elementum odio ultricies, at gravida ex finibus.
          </Typography>
          <div className={classes.tags}>
            <FieldArray name="tags" component={RenderTags} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

AboutAnnouncement.propTypes = {
  className: PropTypes.string,
  formActions: PropTypes.object,
};

RenderTags.propTypes = {
  fields: PropTypes.object,
};

const selector = formValueSelector(formName);

export default connect(state => ({
  tag: selector(state, `${formSection}.tag`),
  tags: selector(state, `${formSection}.tags`),
}))(AboutAnnouncement);
