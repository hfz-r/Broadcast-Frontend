import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(3),
  },
}));

const ProjectMgmt = props => {
  const classes = useStyles();

  const handleFilter = () => {
    // console.log(val);
  };

  return (
    <Page className={classes.root} title="Project Management">
      <Header onAddProject={props.handleAddProject} />
      <SearchBar onFilter={handleFilter} />
      {props.data && <Results className={classes.results} {...props} />}
    </Page>
  );
};

ProjectMgmt.propTypes = {
  data: PropTypes.object,
  handleAddProject: PropTypes.func,
};

export default ProjectMgmt;
