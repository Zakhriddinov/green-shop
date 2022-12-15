const { BASE_URL } = process.env;

const useRequest = () => {
   const request = async ({
      me,
      url,
      method = "GET",
      body,
      token,
      headers = {}
   }) => {
      if (token)
         headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

      const options = {
         method,
         headers: { ...headers, "Content-Type": "application/json" },
         body: JSON.stringify(body)
      }

      return fetch(
         `${me ? "https://green-shop-backends.onrender.com/api" : BASE_URL
         }${url}`,
         options
      ).then((res) => res.json());
   }

   return request;
}

export default useRequest;