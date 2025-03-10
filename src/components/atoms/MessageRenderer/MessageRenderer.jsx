import Quill from 'quill';
import { useEffect, useRef, useState } from 'react';

export const MessageRenderer = ({value})=>{

    const rendererRef = useRef(null);

    const [isEmpty, setIsEmpty] = useState(false);


    useEffect(()=>{

        if(!rendererRef.current) return;

        console.log('Value: ', value);

        const quill = new Quill(document.createElement('div'), {
            theme: 'snow'
        });

        quill.disable();
        const content = JSON.parse(value);
        quill.setContents(content);

        const isContentEmpty = quill.getText().trim().length === 0;
        setIsEmpty(isContentEmpty);

        rendererRef.current.innerHTML = quill.root.innerHTML;

    },[value]);
    return(
        <div ref={rendererRef} className='ql-editor ql-renderer'>

        </div>
    );
};