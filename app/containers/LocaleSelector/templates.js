import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { ToggleButton, LanguageList } from './components';
import { data } from './data';

const useStyles = makeStyles(() => ({
  root: {},
}));

const LocaleSelector = props => {
  const selectorRef = useRef(null);
  const [languages, setLanguages] = useState([]);
  const [openLocalePopover, setOpenLocalePopover] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    let mounted = true;

    const fetchNotifications = () => {
      if (mounted) {
        setLanguages(data);
      }
    };

    fetchNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  const handleLocalePopoverOpen = () => {
    setOpenLocalePopover(true);
  };

  const handleLocalePopoverClose = () => {
    setOpenLocalePopover(false);
  };

  const getLocale = () => {
    const langObj = languages.find(lg => lg.code === props.locale);
    return langObj !== undefined ? langObj.locale : '';
  };

  return (
    <div className={classes.root}>
      <ToggleButton
        selectorRef={selectorRef}
        language={getLocale()}
        onClick={handleLocalePopoverOpen}
      />
      <LanguageList
        anchorEl={selectorRef.current}
        languages={languages}
        onClose={handleLocalePopoverClose}
        open={openLocalePopover}
        {...props}
      />
    </div>
  );
};

LocaleSelector.propTypes = {
  locale: PropTypes.string,
};

export default LocaleSelector;
