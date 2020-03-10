import React from 'react';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router-dom';
import { List } from '@material-ui/core';
import NavigationListItem from './ListItem';

const reduceChildRoutes = props => {
  const { location, items, page, depth } = props;
  if (page.children) {
    const open = matchPath(location.pathname, {
      path: page.href,
      exact: false,
    });
    items.push(
      <NavigationListItem
        depth={depth}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={Boolean(open)}
        title={page.title}
      >
        <NavigationList
          depth={depth + 1}
          pages={page.children}
          location={location}
        />
      </NavigationListItem>,
    );
  } else {
    items.push(
      <NavigationListItem
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        label={page.label}
        title={page.title}
      />,
    );
  }
  return items;
};

const NavigationList = props => {
  const { pages, ...rest } = props;
  return (
    <List>
      {pages.reduce(
        (items, page) => reduceChildRoutes({ items, page, ...rest }),
        [],
      )}
    </List>
  );
};

NavigationList.propTypes = {
  depth: PropTypes.number,
  pages: PropTypes.array,
};

export default NavigationList;
