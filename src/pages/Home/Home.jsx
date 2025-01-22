import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserButton } from '@/components/atoms/UserButton/UserButton';
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace';

export const Home = () => {

    const {isFetching , workspaces} = useFetchWorkspace();

    const navigate = useNavigate();

    useEffect(()=>{

        if(isFetching) return;

        

        if(workspaces.length === 0 || !workspaces) {
            console.log('No workspaces found, creating one');
        }
        else{
            navigate(`/workspace/${workspaces[0]._id}`);
        }

    },[isFetching,workspaces,navigate]);

    return (
        <>
            <h1>Home</h1>
            <UserButton />
        </>
    );
};