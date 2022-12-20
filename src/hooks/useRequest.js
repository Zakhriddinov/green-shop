const { BASE_URL } = process.env;

export const useRequest = () => {
   const request = async ({
      me,
      url,
      method = "GET",
      body,
   }) => {
      const options = {
         method,
         body: JSON.stringify(body),
      };
      return fetch(
         `${me ? "https://green-shop-server.herokuapp.com/api" : BASE_URL
         }${url}`,
         options
      ).then((res) => res.json());
   };

   return request;
};

export default useRequest;
