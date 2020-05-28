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

const UserMgmt = props => {
  const classes = useStyles();

  const handleFilter = () => {
    // console.log(val);
  };

  return (
    <Page className={classes.root} title="User Management">
      <Header onAddUser={props.handleAddUser} />
      <SearchBar onFilter={handleFilter} />
      {props.data && <Results className={classes.results} {...props} />}
    </Page>
  );
};

UserMgmt.propTypes = {
  data: PropTypes.object,
  handleAddUser: PropTypes.func,
};

export default UserMgmt;
