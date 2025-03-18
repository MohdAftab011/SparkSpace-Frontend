import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent,SheetTrigger } from '@/components/ui/sheet';

export const TopBar = () => {

  const navigate = useNavigate();
  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <span className="text-xl font-bold">SparkSpace</span>
            <a href="#" className="flex">
              <img 
                className="w-auto h-8 lg:h-10" 
                src="./src/assets/logo.jpeg" 
                alt="SparkSpace Logo" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Button onClick={()=>navigate('/auth/signin')}
              variant="default" 
              className="text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign In / Register
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-black hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full pt-6">
                <div className="flex justify-end">
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-black hover:bg-gray-100"
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close Menu</span>
                    </Button>
                  </SheetTrigger>
                </div>

                <div className="flex-1 mt-8">
                  <nav className="flex flex-col gap-4">
                    <Button 
                      variant="default"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Login
                    </Button>
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};