import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Page, Paginate, SearchBar } from 'components';
import { Header, Results } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(3),
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const RoleMgmt = props => {
  const classes = useStyles();

  const handleFilter = () => {
    // console.log(val);
  };

  return (
    <Page className={classes.root} title="Role Management">
      <Header />
      <SearchBar onFilter={handleFilter} />
      {props.data && <Results className={classes.results} {...props} />}
      <Paginate className={classes.paginate} pageCount={3} />
    </Page>
  );
};

RoleMgmt.propTypes = {
  data: PropTypes.object,
};

export default RoleMgmt;
