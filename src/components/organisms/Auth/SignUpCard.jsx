
import { LucideLoader2, TriangleAlert } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export const SignupCard = ({signupForm , setSignupForm ,validationError ,onSignupFormSubmit , error,isPending,isSuccess})=>{

    const navigate = useNavigate();

    
    return (
        <Card className="mx-auto max-w-md shadow-lg">
          <CardHeader className="space-y-4">
            <div className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tight">Create Account</CardTitle>
              <CardDescription className="mt-2 text-muted-foreground">
                Get started with your free account
              </CardDescription>
            </div>
    
            {(validationError || error) && (
              <Alert variant="destructive">
                <TriangleAlert className="h-5 w-5" />
                <AlertTitle>Registration Error</AlertTitle>
                <AlertDescription>
                  {validationError?.message || error?.message}
                </AlertDescription>
              </Alert>
            )}
    
            {isSuccess && (
              <Alert>
                <FaCheck className="h-5 w-5" />
                <AlertTitle>Account Created!</AlertTitle>
                <AlertDescription className="flex items-center gap-2">
                  Redirecting to login
                  <LucideLoader2 className="animate-spin" />
                </AlertDescription>
              </Alert>
            )}
          </CardHeader>
    
          <CardContent className="space-y-6">
            <form className="space-y-4" onSubmit={onSignupFormSubmit}>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  required
                  disabled={isPending}
                  value={signupForm.username}
                  onChange={(e) => setSignupForm({...signupForm, username: e.target.value})}
                  className="h-11"
                />
              </div>
    
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="example@email.com"
                  required
                  type="email"
                  disabled={isPending}
                  value={signupForm.email}
                  onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                  className="h-11"
                />
              </div>
    
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="••••••••"
                  required
                  type="password"
                  disabled={isPending}
                  value={signupForm.password}
                  onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                  className="h-11"
                />
              </div>
    
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  placeholder="••••••••"
                  required
                  type="password"
                  disabled={isPending}
                  value={signupForm.confirmPassword}
                  onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
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
                    Creating Account...
                  </div>
                ) : (
                  'Continue'
                )}
              </Button>
            </form>
    
            <div className="relative my-6">
              <Separator />
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-muted-foreground text-sm">
                OR
              </div>
            </div>
    
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Button 
                variant="link" 
                className="px-1.5 text-base font-semibold text-primary hover:text-primary/80"
                onClick={() => navigate('/auth/signin')}
              >
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      );
};