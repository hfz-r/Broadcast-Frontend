/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Chip,
  Collapse,
  Divider,
  Drawer,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  drawer: {
    width: 420,
    maxWidth: '100%',
  },
  header: {
    padding: theme.spacing(2, 1),
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
  content: {
    padding: theme.spacing(0, 3),
    flexGrow: 1,
  },
  contentSection: {
    padding: theme.spacing(2, 0),
  },
  contentSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  contentSectionContent: {},
  formGroup: {
    padding: theme.spacing(2, 0),
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  field: {
    marginTop: 0,
    marginBottom: 0,
  },
  flexGrow: {
    flexGrow: 1,
  },
  addButton: {
    marginLeft: theme.spacing(1),
  },
  tags: {
    marginTop: theme.spacing(1),
  },
  minAmount: {
    marginRight: theme.spacing(3),
  },
  maxAmount: {
    marginLeft: theme.spacing(3),
  },
  radioGroup: {},
  actions: {
    padding: theme.spacing(3),
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const projectListOption = [
  'ACMS',
  'eWareNavi',
  'GRP',
  'Lab Test Management System',
  'MPS',
  'SCM Tracker ',
];
const departmentListOption = [
  'MIS - EUC',
  'MIS - ERP',
  'MIS - INF',
  'MIS - DEV',
];

const Filter = props => {
  const { open, onClose, onFilter, className, ...rest } = props;

  const classes = useStyles();

  const initialValues = {
    projects: [],
    tag: '',
    tags: ['bugs'],
    location: 'ngc',
    status: 'progress',
    username: '',
    address: '',
    department: '',
  };

  const initialExpandDiv = {
    project: true,
    user: false,
  };

  const [expandDiv, setExpandDiv] = useState({ ...initialExpandDiv });
  const [values, setValues] = useState({ ...initialValues });

  const handleClear = () => {
    setValues({ ...initialValues });
  };

  const handleFieldChange = (event, field, value) => {
    event.persist();
    setValues(vals => ({
      ...vals,
      [field]:
        field === 'projects'
          ? Array.from(event.target.selectedOptions, item => item.value)
          : value,
    }));
  };

  const handleTagAdd = () => {
    setValues(vals => {
      const newValues = { ...vals };
      if (newValues.tag && !newValues.tags.includes(newValues.tag)) {
        newValues.tags = [...newValues.tags];
        newValues.tags.push(newValues.tag);
      }
      newValues.tag = '';
      return newValues;
    });
  };

  const handleTagDelete = tag => {
    setValues(vals => {
      const newValues = { ...vals };
      newValues.tags = newValues.tags.filter(t => t !== tag);
      return newValues;
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFilter(values);
  };

  const handleToggleCategory = (cat, value) => {
    setExpandDiv(vals => ({
      ...vals,
      [cat]: !value,
    }));
  };

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <form
        {...rest}
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit}
      >
        <div className={classes.header}>
          <Button onClick={onClose} size="small">
            <CloseIcon className={classes.buttonIcon} />
            Close
          </Button>
        </div>
        <div className={classes.content}>
          <div className={classes.contentSection}>
            <div
              className={classes.contentSectionHeader}
              onClick={() => handleToggleCategory('project', expandDiv.project)}
            >
              <Typography variant="h5">Project</Typography>
              {expandDiv.project ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Divider />
            <Collapse in={expandDiv.project}>
              <div className={classes.contentSectionContent}>
                <div className={classes.formGroup}>
                  <TextField
                    className={classes.field}
                    fullWidth
                    label="Filter Projects"
                    margin="dense"
                    name="projects"
                    onChange={event =>
                      handleFieldChange(event, 'projects', event.target.value)
                    }
                    select
                    SelectProps={{ native: true, multiple: true }}
                    value={values.projects}
                    variant="outlined"
                  >
                    <option disabled value="" />
                    {projectListOption.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                </div>
                <div className={classes.formGroup}>
                  <div className={classes.fieldGroup}>
                    <TextField
                      className={clsx(classes.field, classes.flexGrow)}
                      label="Filter Tags"
                      margin="dense"
                      name="tag"
                      onChange={event =>
                        handleFieldChange(event, 'tag', event.target.value)
                      }
                      value={values.tag}
                      variant="outlined"
                    />
                    <Button
                      className={classes.addButton}
                      onClick={handleTagAdd}
                      size="small"
                    >
                      <AddIcon className={classes.addIcon} />
                      Add
                    </Button>
                  </div>
                  <div className={classes.tags}>
                    {values.tags.map(tag => (
                      <Chip
                        deleteIcon={<CloseIcon />}
                        key={tag}
                        label={tag}
                        onDelete={() => handleTagDelete(tag)}
                      />
                    ))}
                  </div>
                </div>
                <div className={classes.formGroup}>
                  <Typography component="p" gutterBottom variant="overline">
                    Location
                  </Typography>
                  <div className={classes.fieldGroup}>
                    <ToggleButtonGroup
                      exclusive
                      onChange={(event, value) =>
                        value && handleFieldChange(event, 'location', value)
                      }
                      size="small"
                      value={values.location}
                      variant="outlined"
                    >
                      <ToggleButton color="primary" value="hsb">
                        HSB
                      </ToggleButton>
                      <ToggleButton value="ngc">NGC</ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
                <div className={classes.formGroup}>
                  <Typography component="p" gutterBottom variant="overline">
                    Status
                  </Typography>
                  <div className={classes.fieldGroup}>
                    <RadioGroup
                      className={classes.radioGroup}
                      name="status"
                      onChange={event =>
                        handleFieldChange(event, 'status', event.target.value)
                      }
                      value={values.status}
                    >
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Proposed"
                        value="proposed"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="In Progress"
                        value="progress"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="UAT"
                        value="uat"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Live"
                        value="live"
                      />
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className={classes.contentSection}>
            <div
              className={classes.contentSectionHeader}
              onClick={() => handleToggleCategory('user', expandDiv.user)}
            >
              <Typography variant="h5">User</Typography>
              {expandDiv.user ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Divider />
            <Collapse in={expandDiv.user}>
              <div className={classes.contentSectionContent}>
                <div className={classes.contentSectionContent}>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Username"
                      margin="dense"
                      name="username"
                      onChange={event =>
                        handleFieldChange(event, 'username', event.target.value)
                      }
                      value={values.username}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Address"
                      margin="dense"
                      name="address"
                      onChange={event =>
                        handleFieldChange(event, 'address', event.target.value)
                      }
                      value={values.address}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Department"
                      margin="dense"
                      name="department"
                      onChange={event =>
                        handleFieldChange(
                          event,
                          'department',
                          event.target.value,
                        )
                      }
                      select
                      SelectProps={{ native: true }}
                      value={values.department}
                      variant="outlined"
                    >
                      <option disabled value="" />
                      {departmentListOption.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        <div className={classes.actions}>
          <Button fullWidth onClick={handleClear} variant="contained">
            <DeleteIcon className={classes.buttonIcon} />
            Clear
          </Button>
          <Button color="primary" fullWidth type="submit" variant="contained">
            Apply filters
          </Button>
        </div>
      </form>
    </Drawer>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onFilter: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

export default Filter;
