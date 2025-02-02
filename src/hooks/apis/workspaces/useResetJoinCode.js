import { useMutation, useQueryClient } from '@tanstack/react-query';

import { resetJoinCodeRequest } from '@/api/workspaces';
import { useAuth } from '@/hooks/context/useAuth';


export const useResetJoinCode = (workspaceId)=>{
    const { auth } = useAuth();

    const queryClient = useQueryClient();
    const {isPending, isSuccess, error, mutateAsync: resetJoinCodeMutation} = useMutation({
        mutationFn: () => resetJoinCodeRequest({ workspaceId,token: auth?.token}),
        onSuccess: () => {
            console.log('Join Code reset successfully');
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`);
        },
        onError: (error) => {
            console.log('Error in resetting join code', error);
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        resetJoinCodeMutation
    };
};