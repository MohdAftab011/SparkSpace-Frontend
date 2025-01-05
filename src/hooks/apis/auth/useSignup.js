import { useMutation } from '@tanstack/react-query';

import { signUpRequest } from '@/api/auth';
import { useAuth } from '@/hooks/context/useAuth';

export const useSignup = ()=>{
    const {isPending,isSuccess,error, mutate : signupMutation} =  useMutation({
        mutationFn : signUpRequest,
        onSuccess : (data)=>{
            console.log('Successfully signed up',data);
        },
        onError : (error)=>{
            console.error('Failed to sign up',error);
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        signupMutation
    };
};