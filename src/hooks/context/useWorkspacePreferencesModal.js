import { useContext } from 'react';

import WorkspacePreferencesModalContext from '@/context/WorkspacePreferencesModalContext.jsx';

export const useWorkspacePreferencesModal = ()=>{
    return useContext(WorkspacePreferencesModalContext);
};