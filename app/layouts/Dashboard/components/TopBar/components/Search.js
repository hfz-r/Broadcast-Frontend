import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Input,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  search: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit',
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit',
    },
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100,
  },
  searchPopperContent: {
    marginTop: theme.spacing(1),
  },
}));

const Search = () => {
  const classes = useStyles();
  const searchRef = useRef(null);
  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = event => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };

  const popularSearches = ['Project', 'Error', 'Hafiz', 'Bugs on MPS'];

  return (
    <React.Fragment>
      <div className={classes.search} ref={searchRef}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          onChange={handleSearchChange}
          value={searchValue}
          placeholder="Search people &amp; projects"
          disableUnderline
        />
      </div>
      <Popper
        className={classes.searchPopper}
        anchorEl={searchRef.current}
        open={openSearchPopover}
        transition
      >
        <ClickAwayListener onClickAway={handleSearchPopverClose}>
          <Paper className={classes.searchPopperContent} elevation={3}>
            <List>
              {popularSearches.map(search => (
                <ListItem button key={search} onClick={handleSearchPopverClose}>
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText primary={search} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </React.Fragment>
  );
};

export default Search;
