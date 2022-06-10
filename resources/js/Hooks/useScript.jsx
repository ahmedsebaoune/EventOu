import { useEffect } from 'react';

const useScript = (url) => {
    // console.log(name)
    $('script[src="'+ url+'"]').remove();
    const script = document.createElement('script');

    script.src = url;
    script.async = false;

    document.body.append(script);
}
export default useScript;
import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default useScript;
