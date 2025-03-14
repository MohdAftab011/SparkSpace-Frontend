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
        throw error.response;
    }
};

export const deleteWorkspaceRequest = async ({workspaceId,token})=>{
    try {
        const response = await axios.delete(`/workspace/${workspaceId}`,{
            headers :{
                'x-access-token' : token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log('Error in deleting workspace request', error);
        throw error.response.data;
    }
};

export const updateWorkspaceRequest = async({workspaceId,name,token})=>{
    try {
        const response = await axios.put(`/workspace/${workspaceId}`,{name},{
            headers:{
                'x-access-token' : token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log('Error in updating workspace request', error);
        throw error.response.data;
    }
};

export const addChannelToWorkspaceRequest = async({workspaceId,channelName,token})=>{
    try {
        const response = await axios.put(`/workspace/${workspaceId}/channels`,{channelName},{
            headers:{
                'x-access-token' : token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log('Error in adding channel to workspace request', error);
        throw error.response.data;
    }
};


export const resetJoinCodeRequest = async({workspaceId,token})=>{
    try {
        const response = await axios.put(`/workspace/${workspaceId}/joinCode/reset`,{},{
            headers:{
                'x-access-token' : token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log('Error in resetting join code request', error);
        throw error.response.data;
    }
};

export const addMemberToWorkspaceRequest = async({workspaceId,token})=>{
    try {
        const response = await axios.put(`/workspace/${workspaceId}/members`,{},{
            headers:{
                'x-access-token' : token
            }
        });
        return response?.data?.data;
    } catch (error) {
        console.log('Error in adding Member to workspace request', error);
        throw error.response.data;
    }
};

export const joinWorkspaceRequest = async ({ workspaceId, joinCode, token }) => {
    try {
        const response = await axios.put(`/workspace/${workspaceId}/join`, { joinCode }, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in joining workspace request', error);
        throw error.response.data;
    }
};



