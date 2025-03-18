
import { LucideLoader2, TriangleAlert } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';

export const SigninCard = ({
    signinForm,
    setSigninForm,
    onSigninFormSubmit,
    validationError,
    error,
    isSuccess,
    isPending
  }) => {
    const navigate = useNavigate();
  
    return (
      <Card className="mx-auto max-w-md shadow-lg">
        <CardHeader className="space-y-4">
          <div className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight">Welcome Back</CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">
              Enter your credentials to access your account
            </CardDescription>
          </div>
  
          {(validationError || error) && (
            <Alert variant="destructive">
              <TriangleAlert className="h-5 w-5" />
              <AlertTitle>Authentication Error</AlertTitle>
              <AlertDescription>
                {validationError?.message || error?.message}
              </AlertDescription>
            </Alert>
          )}
  
          {isSuccess && (
            <Alert>
              <FaCheck className="h-5 w-5" />
              <AlertTitle>Sign-in Successful!</AlertTitle>
              <AlertDescription className="flex items-center gap-2">
                Redirecting to dashboard
                <LucideLoader2 className="animate-spin" />
              </AlertDescription>
            </Alert>
          )}
        </CardHeader>
  
        <CardContent className="space-y-6">
          <form className="space-y-4" onSubmit={onSigninFormSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                disabled={isPending}
                placeholder="example@email.com"
                type="email"
                value={signinForm.email}
                onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
                className="h-11"
              />
            </div>
  
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                disabled={isPending}
                placeholder="••••••••"
                type="password"
                value={signinForm.password}
                onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}
                className="h-11"
              />
            </div>
  
            <Button 
              className="w-full h-11 text-lg" 
              disabled={isPending}
              type="submit"
            >
              {isPending ? (
                <div className="flex items-center gap-2">
                  <LucideLoader2 className="animate-spin h-5 w-5" />
                  Signing In...
                </div>
              ) : (
                'Continue'
              )}
            </Button>
          </form>
  
          <Separator className=" relative my-6">
            <span className="absolute left-1/2 -translate-x-1/2 px-2 bg-background text-muted-foreground text-sm">OR</span>
          </Separator>
  
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Need an account? </span>
            <Button 
              variant="link" 
              className="px-1.5 text-base font-semibold text-primary hover:text-primary/80"
              onClick={() => navigate('/auth/signup')}
            >
              Create Account
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };