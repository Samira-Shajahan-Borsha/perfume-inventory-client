import { useEffect } from "react";


export const useTitle = title => {
    useEffect(() => {
        document.title = `Perfume Inventory - ${title}`;
    }, [title])
}