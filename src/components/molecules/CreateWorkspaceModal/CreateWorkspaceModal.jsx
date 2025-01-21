import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateWorkspace } from '@/hooks/apis/workspaces/useCreateWorkspace';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreateWorkspaceModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const CreateWorkspaceModal = () =>{

    const [workspaceName,setWorkspaceName] = useState('');

    const navigate = useNavigate();

    const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

    const {isPending,createWorkspaceMutation} = useCreateWorkspace();

    function handleClose() {
        setOpenCreateWorkspaceModal(false);
    }

    async function handleFormSubmit(e){
        e.preventDefault();
        try {
            const data = await createWorkspaceMutation({name : workspaceName});
            console.log(data);
            navigate(`/workspace/${data._id}`);
        } catch (error) {
            console.log('Unable to create workspace',error);
        }
        finally{
            setWorkspaceName('');
            setOpenCreateWorkspaceModal(false);
        }
        
    }

    return(
        <Dialog open={openCreateWorkspaceModal} onOpenChange={handleClose} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new Workspace</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleFormSubmit}>
                    <Input 
                    required
                    dislabled ={isPending}
                    minLength = {3}
                    maxLength = {50}
                    placeholder ="Put the workspace name e.g MyWorkspace,DevWorkspace..."
                    value = {workspaceName}
                    onChange = {(e)=>setWorkspaceName(e.target.value)}
                    />

                <div className='flex justify-end mt-5'>
                    <Button dislabled={isPending}>Create Workspace</Button>
                </div>    
                </form>
            </DialogContent>
        </Dialog>
    );
};