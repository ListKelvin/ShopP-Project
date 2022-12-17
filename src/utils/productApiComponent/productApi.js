import { get, post, put } from "../ApiCaller";

const productApi = {
  // subject api
  getAllProduct: async () => {
    const endpoint = "/product/list-all";
    return await get(endpoint, {}, {})
      .then((res) => {
        if (res.data.code !== 200) console.log(res.data.message);
        return res;
      })
      .catch((err) => console.log(err.message));
  },
  getSubjectByName: async (name) => {
    const endpoint = `/subject/name/${name}`;
    return await get(endpoint, {}, {})
      .then((res) => {
        if (res.data.code !== 200) console.log(res.data.message);
        return res;
      })
      .catch((err) => console.log(err.message));
  },
  getProductByName: async (name) => {
    const endpoint = `/product/search-by-name/${name}`;
    return await get(endpoint, {}, {}).catch((err) => console.log(err.message));
  },
  //   createSubject: async (subject, token) => {
  //     const endpoint = `/subject`;
  //     return await post(endpoint, subject, {}, { authorization: token })
  //       .then((res) => {
  //         if (res.data.code !== 200) console.log(res.data.message);
  //         return res;
  //       })
  //       .catch((err) => console.log(err.message));
  //   },
  //   updateSubject: async (subject, token) => {
  //     const endpoint = `/subject`;
  //     return await put(endpoint, subject, {}, { authorization: token })
  //       .then((res) => {
  //         if (res.data.code !== 200) console.log(res.data.message);
  //         return res;
  //       })
  //       .catch((err) => console.log(err.message));
  //   },

  //   //resource api
  //   createResource: async (resource, token) => {
  //     const endpoint = `/resource`;
  //     return await post(endpoint, resource, {}, { authorization: token })
  //       .then((res) => {
  //         if (res.data.code !== 200) console.log(res.data.message);
  //         return res;
  //       })
  //       .catch((err) => console.log(err.message));
  //   },
  //   updateResource: async (resource, token) => {
  //     console.log(resource);
  //     const endpoint = `/resource`;
  //     return await put(endpoint, resource, {}, { authorization: token })
  //       .then((res) => {
  //         if (res.data.code !== 200) console.log(res.data.message);
  //         return res;
  //       })
  //       .catch((err) => console.log(err.message));
  //   },
  //   getAllResources: async () => {
  //     const endpoint = "/resource/all";
  //     return await get(endpoint, {}, {})
  //       .then((res) => {
  //         if (res.data.code !== 200) console.log(res.data.message);
  //         return res;
  //       })
  //       .catch((err) => console.log(err.message));
  //   },
  //   getResourceBySubjectId: async (id) => {
  //     const endpoint = `/resource/subject/${id}`;
  //     return await get(endpoint, {}, {}).catch((err) => console.log(err.message));
  //   },
};

export default productApi;
