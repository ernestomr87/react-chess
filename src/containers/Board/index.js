import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Board'),
  loading: () => null,
});
