import axios from '@/config/axiosConfig';

export const createWorkspaceRequest = async ({name,description,token})=>{


    try {
        const response = await axios.post('/workspace',{name,description},{
            headers : {
                'x-access-token' : token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log('Error in create workspace request',error);
        throw error.response.data;
    }
};


export const fetchWorkspacesRequest = async ({token})=>{
    try {
        const response = await axios.get('/workspace',{
            headers : {
                'x-access-token' : token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log('Error in fetching workspace request',error);
        throw error.response.data;
    }
};


export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
    try {
        const response = await axios.get(`/workspace/${workspaceId}`, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in fetching workspace details request', error);
        throw error.response.data;
    }
};