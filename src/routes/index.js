// import file
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

import { HeaderOnly } from '../components/Layout';
// dành cho các router không cần login vẫn xem đc
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

// dành cho các router cần đăng nhập
const privateRoutes = [
  // placeholder
];

export { publicRoutes, privateRoutes };
