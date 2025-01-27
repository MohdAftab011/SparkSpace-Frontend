import { useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useDeleteWorkpace } from '@/hooks/apis/workspaces/useDeleteWorkspace';
import { useUpdateWorkpace } from '@/hooks/apis/workspaces/useUpdateWorkspace';
import { useWorkspacePreferencesModal } from '@/hooks/context/useWorkspacePreferencesModal';
import { useToast } from '@/hooks/use-toast';


export const WorkspacePreferencesModal = ()=>{

    const queryClient = useQueryClient();

    const navigate = useNavigate();

    const {initialValue, openPreferences, setOpenPreferences ,workspace } = useWorkspacePreferencesModal();

    const [workspaceId,setWorkspaceId] = useState(null);
    const [editOpen,setEditOpen] = useState(false);

    const {toast} = useToast();

    const { deleteWorkspaceMutation } = useDeleteWorkpace(workspaceId);

    const {isPending,updateWorkspaceMutation} = useUpdateWorkpace(workspaceId);

    const [renameValue, setRenameValue] = useState(workspace?.name);

    function handleClose() {
        setOpenPreferences(false);
    }

    async function handleFormSubmit(e){
        e.preventDefault();
        try {
            await updateWorkspaceMutation(renameValue);
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspace?._id}`);
            setOpenPreferences(false);
            toast({
                title: 'Workspace updated successfully',
                type: 'success'
            });
        } catch(error) {
            console.log('Error in updating workspace', error);
            toast({
                title: 'Error in updating workspace',
                type: 'error'
            });
        }
    }

    useEffect(() => {
        setWorkspaceId(workspace?._id);
        setRenameValue(workspace?.name);
    }, [workspace]);

    async function handleDelete(){
        try {
            await deleteWorkspaceMutation();
            navigate('/home');
            queryClient.invalidateQueries('fetchWorkspaces');
            setOpenPreferences(false);
            toast({
                title: 'Workspace deleted successfully',
                type: 'success'
            });
        } catch (error) {
            console.log('Error in deleting workspace',error);
            toast({
                title: 'Error in deleting workspace',
                type: 'error'
            });
        }
    }

    return(
        <Dialog open={openPreferences} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {initialValue}
                    </DialogTitle>
                </DialogHeader>
                <div className='px-4 pb-4 flex flex-col gap-y-2'>
                    <Dialog open={editOpen} onOpenChange={setEditOpen}>
                        <DialogTrigger>
                            <div
                                className='px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
                                >   
                                <div className='flex items-center justify-between'>
                                    <p
                                        className='font-semibold text-sm'
                                    >
                                        Workspace Name
                                    </p>
                                    <p
                                        className='text-sm font-semibold hover:underline'
                                    >
                                        Edit
                                    </p>
                                </div>
                                <p
                                    className='text-sm'
                                >
                                    {initialValue}
                                </p>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Rename Workspace
                                </DialogTitle>
                            </DialogHeader>
                            <form className='space-y-4' onSubmit={handleFormSubmit}>
                                <Input
                                    value = {renameValue}
                                    onChange = {(e)=> setRenameValue(e.target.value)}
                                    required
                                    autoFocus
                                    minLength = {3}
                                    maxLength ={40}
                                    disabled = {isPending}
                                    placeholder = 'Enter Workspace Name'

                                />
                                <DialogFooter>
                                    <DialogClose>
                                        <Button
                                            variant="outline"
                                            disabled={isPending}
                                        >
                                            Cancel
                                        </Button>
                                    </DialogClose>
                                    <Button
                                        type="submit"
                                        disabled={isPending}
                                    >
                                        Save
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                    <button
                        className='flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
                        onClick={handleDelete}
                    >
                        <TrashIcon className='size-5' />
                        <p className='text-sm font-semibold'>
                            Delete Workspace
                        </p>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};