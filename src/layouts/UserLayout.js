import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import GlobalFooter from '../components/GlobalFooter';
import styles from './UserLayout.less';
import { getRouteData } from '../utils/utils';

class UserLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
  }
  getChildContext() {
    const { location } = this.props;
    return { location };
  }
  getPageTitle() {
    const { location } = this.props;
    const { pathname } = location;
    let title = 'CodeIt';
    getRouteData('UserLayout').forEach((item) => {
      if (item.path === pathname) {
        title = `${item.name} - CodeIt`;
      }
    });
    return title;
  }
  render() {
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div style={{ height: '100vh' }}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="" className={styles.logo} src="/assets/codeit-brand-logo-400.png" />
                  <span className={styles.title}>CodeIt</span>
                </Link>
              </div>
              <p className={styles.desc}>致力于打造最优秀的在线编程学习平台</p>
            </div>
            {
            getRouteData('UserLayout').map(item =>
              (
                <Route
                  exact={item.exact}
                  key={item.path}
                  path={item.path}
                  component={item.component}
                />
              )
            )
          }
          </div>
          <GlobalFooter />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
