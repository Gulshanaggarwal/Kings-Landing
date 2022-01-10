import { useEffect } from 'react'



export default function ScrollTop() {

   // const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return null;
}
