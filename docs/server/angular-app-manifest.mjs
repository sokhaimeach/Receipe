
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1158, hash: 'c9b88e49a23916411ace24a74e35e1878fd76217834f744bde5506a50ffe4807', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1517, hash: 'a4b482cb5d9a3ba0810cbfd3496eb348376ff4e488dee76b4d2f1635e9418d60', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5609, hash: '7f125f87d96f70fb59896d323f09b15bd9f9d4af67502df5b8df65dfec7273aa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UDR3BNFV.css': {size: 29, hash: 'rmDbGBjvl8w', text: () => import('./assets-chunks/styles-UDR3BNFV_css.mjs').then(m => m.default)}
  },
};
