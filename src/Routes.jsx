import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './components/molecules/ProtectedRoute/ProtectedRoute';
import { SigninContainer } from './components/organisms/Auth/SignInContainer';
import { SignupContainer } from './components/organisms/Auth/SignUpContainer';
import { Auth } from './pages/Auth/Auth';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { Channel } from './pages/Workspace/Channel/Channel';
import { JoinPage } from './pages/Workspace/JoinPage';
import { WorkspaceLayout } from './pages/Workspace/Layout';
import { LandingPage } from './pages/LandingPage/LandingPage';



export const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
          <Route path="/auth/signin" element={<Auth><SigninContainer /></Auth>} />
          <Route path="/home" element={<ProtectedRoute><Auth><Home/></Auth></ProtectedRoute>} />
          <Route path="/workspace/:workspaceId" element={<ProtectedRoute><WorkspaceLayout>Workspace</WorkspaceLayout></ProtectedRoute>} />
          <Route  
            path="/workspace/:workspaceId/channels/:channelId"
            element={<ProtectedRoute><WorkspaceLayout><Channel/></WorkspaceLayout></ProtectedRoute>}
          />
          <Route path='/workspace/join/:workspaceId' element={<JoinPage/>}/>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<LandingPage/>} />
        </Routes>
    );
};