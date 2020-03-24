import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, ListItemText, Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  listItem: {},
  divider: {
    marginTop: 8,
    marginBottom: 8,
  },
}));

const LanguageList = props => {
  const { languages, locale, onChangeLocale, ...rest } = props;
  const classes = useStyles();

  return (
    <Menu
      {...rest}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {languages.map(lang => (
        <MenuItem
          key={lang.id}
          className={classes.listItem}
          selected={locale === lang.code}
          onClick={() => onChangeLocale(lang.code)}
        >
          <ListItemText primary={lang.locale} />
        </MenuItem>
      ))}
      <Divider className={classes.divider} />
      <MenuItem>
        <ListItemText primary="Help to translate" />
      </MenuItem>
    </Menu>
  );
};

LanguageList.propTypes = {
  languages: PropTypes.array.isRequired,
  locale: PropTypes.string,
  onChangeLocale: PropTypes.func,
};

export default LanguageList;
