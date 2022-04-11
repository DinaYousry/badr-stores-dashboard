// export const ApiMainStemUrl = "http://hwayadesigns-001-site2.itempurl.com";
export const ApiMainStemUrl = "http://api.badrstores.net";

// Main prosuct Api
export const GetMainProducts = (pageType, pageNo, pageSize) => {
  return `${ApiMainStemUrl}/api/${pageType}/List?pageNo=${pageNo}&pageSize=${pageSize}`;
};
export const AddMainProduct = (pageType) => {
  return `${ApiMainStemUrl}/api/${pageType}`;
};
export const EditMainProduct = (pageType) => {
  return `${ApiMainStemUrl}/api/${pageType}`;
};
export const DeleteMainProduct = (pageType) => {
  return `${ApiMainStemUrl}/api/${pageType}`;
};

// subProsduct APi
export const GetSubProduct = (id, pageNo, pageSize) => {
  return `${ApiMainStemUrl}/api/ProductCpanelById/List?id=${id}&pageNo=${pageNo}&pageSize=${pageSize}`;
};
export const EditSubProduct = `${ApiMainStemUrl}/api/Prodact/EditProduct`;
export const AddSubProduct = `${ApiMainStemUrl}/api/Product/AddAdProduct`;

// images Api
export const GetImg = (imgStr) => {
  return `${ApiMainStemUrl}/img/products/${imgStr}`;
};
