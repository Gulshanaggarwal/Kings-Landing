import { useQuery } from "react-query";



export default function useVerifyJwt() {
    const token = localStorage.getItem("__auth__token");

    const { isLoading, data, error } = useQuery("verifyJwt", () => fetch("https://backend-kingslanding.herokuapp.com/verifyJwt", {
        headers: {
            "x-access-token": token,
        },
    }).then((res) => res.json()));

    return {isLoading,data,error}
}