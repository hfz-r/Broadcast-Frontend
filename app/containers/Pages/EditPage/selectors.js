import * as R from 'ramda';
import { selectors } from 'stores';

export const getData = (state, ownProps) => {
  const { match } = ownProps;
  const data = selectors.announcement.getMessage(state, match.params.slug);
  return data;
};

export const getInitialValues = (state, ownProps) => {
  const message = getData(state, ownProps).getOrElse({});
  const initialValues = R.applySpec({
    projectSelector: {
      project: R.path(['projectSelector', 'slug']),
    },
    projectAbout: {
      title: R.path(['projectAbout', 'title']),
      description: R.path(['projectAbout', 'description']),
      category: R.path(['projectAbout', 'category']),
      start_date: R.path(['projectAbout', 'start_date']),
      end_date: R.path(['projectAbout', 'end_date']),
      tags: R.path(['projectAbout', 'tags']),
    },
    projectDetails: {
      editor: R.path(['projectDetails', 'editor']),
    },
    projectExtras: {
      files: R.path(['projectExtras', 'files']),
    },
    projectPreferences: {}, // todo
  })(message);
  return initialValues;
};
