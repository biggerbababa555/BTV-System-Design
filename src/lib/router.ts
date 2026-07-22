// Next.js basePath (/apps) is NOT auto-prepended by plain fetch() calls — must include manually.
// The proxy route handler receives the request with basePath already stripped by Next.js internally,
// so the handler regex /^\/api\/proxy/ still matches correctly.
// Nuxt API_BASE_PATH = /api/ → keep /api/ prefix so proxy forwards correctly to backend
// e.g. client fetches /apps/api/proxy/api/orders/sales
//      handler receives /api/proxy/api/orders/sales → strips /api/proxy → forwards /api/orders/sales to API_URL
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const url = `${basePath}/api/proxy/api/`;
// O2 gateway: client fetches /apps/api/proxy/o2/... → handler strips /api/proxy/o2 → forwards to O2_API_URL
const url_o2 = `${basePath}/api/proxy/o2`;

export const router = {
  apps: {
    verifyCompany: url + "auth/verify/company",
  },

  interface: {
    list: url + "app/interface",
    info: url + "app/interface/{:interface_id}",
    info_error: url + "app/interface/error/{:interface_id}",
  },

  user: {
    findAll: url + "user",
    findOne: (id: string) => url + `user/${id}`,
    myInfo: url + "user/me",
    create: url + "user",
    update: (id: string) => url + `user/${id}`,
    delete: (id: string) => url + `user/${id}`,
    changePassword: url + "user/change-password",
    unlockPassword: url + "user/unlock-password",
  },

  masterUser: {
    role: url + "sample/user/roles",
    list: url + "sample/user",
    info: url + "sample/user/{:id}",
    create: url + "sample/user",
    update: url + "sample/user/{:id}",
  },

  o2gateway: {
    article: url_o2 + "/mm/article/detail/{:article}",
    branch: url_o2 + "/sys/lookup/zbranch",
    search: url_o2 + "/sd/partner/customer/search",
    info: url_o2 + "/customer/id/search/{:custcode}",
    update: url_o2 + "/customer/update/{:custcode}",
    create: url_o2 + "/sd/customer/createsosh",
  },

  orders: {
    list: url + "orders/sales",
    info: url + "orders/sales/{:orderId}",
    create: url + "orders/sales",
    update: url + "orders/sales/{:orderId}",
    hashtags: url + "orders/sales/hashtags",
  },

  products: {
    info: url + "orders/sales/{:orderId}/items",
    create: url + "orders/sales/{:orderId}/items",
    delete: url + "orders/sales/{:orderId}/items/{:itemId}",
    update: url + "orders/sales/{:orderId}/items/{:itemId}",
    products: url + "products",
    detail: url_o2 + "/mm/article/detail/{:sku}",
  },

  productSearch: {
    search: url + "product-search",
    suggestion: url + "product-search/suggestions",
  },

  notes: {
    list: url + "orders/sales/{:orderId}/notes",
    info: url + "orders/sales/{:orderId}/notes/{:noteId}",
    create: url + "orders/sales/{:orderId}/notes",
    update: url + "orders/sales/{:orderId}/notes/{:noteId}",
    delete: url + "orders/sales/{:orderId}/notes/{:noteId}",
    image: url + "orders/sales/{:orderId}/notes/{:noteId}/upload",
    deleteImg:
      url + "orders/sales/{:orderId}/notes/{:noteId}/delete-photo/{:photoId}",
  },

  cartproduct: {
    createHeader: url_o2 + "/sd/coin/cart/create/header",
    changeHeader: url_o2 + "/sd/coin/cart/change/header",
    listHeader: url_o2 + "/sd/coin/cart",
    createItem: url_o2 + "/sd/coin/cart/create/items",
    changeItem: url_o2 + "/sd/coin/cart/change/items",
    transfer: url_o2 + "/sd/coin/cart/transfer",
  },
};
