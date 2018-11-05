/**
 *
 * AppLoader
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import makeSelectApp from 'containers/App/selectors';

class AppLoader extends React.Component {
  shouldLoad = () => {
    const { appPlugins, plugins: mountedPlugins } = this.props;

    return appPlugins.length !== Object.keys(mountedPlugins).length;
  }
  render() {
    return this.props.children({ shouldLoad: this.shouldLoad() });
  }
}

AppLoader.propTypes = {
  appPlugins: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  plugins: PropTypes.object.isRequired,
};

const mapStateToProps = makeSelectApp();

export default connect(mapStateToProps, null)(AppLoader);
