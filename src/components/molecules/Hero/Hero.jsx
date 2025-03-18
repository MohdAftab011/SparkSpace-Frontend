import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-none bg-background">
                <CardContent className="p-6">
                  <h1 className="text-2xl font-bold text-black sm:text-4xl lg:text-5xl font-['Poppins']">
                  Real-time collaborative platform,
                    <div className="relative inline-block mt-4">
                      <span className="absolute inset-x-0 bottom-0 h-3 bg-[#032785]/20 w-full rounded-full" />
                      <span className=" ml-5 relative text-3xl font-bold text-black sm:text-5xl lg:text-6xl">
                        SparkSpace
                      </span>
                    </div>
                  </h1>

                  <p className="mt-8 text-base text-gray-600 sm:text-xl font-['Inter']">
                  Real-time collaborative platform for workspaces, channels & messaging with advanced admin controls & a responsive design.
                  </p>

                  <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:items-center sm:space-x-8">
                  <Button
                    size="xl"
                    className="text-lg h-14 px-8 bg-[#203f8e] hover:bg-[#1a357a] transition-all"
                    onClick={()=>navigate('/auth/signup')}
                    >
                    Get Started
                    </Button>
                    
                    <Button
                    variant="outline"
                    size="xl"
                    className="text-lg h-14 px-8 gap-2 hover:bg-[#203f8e]/10"
                    onClick={() => window.open('https://github.com/MohdAftab011/SparkSpace-Frontend', '_blank')}
                  >
                    <svg
                      className="w-7 h-7 text-[#203f8e]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49v-1.72c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 012.5-.34c.85.004 1.71.12 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.91.68 1.84v2.73c0 .27.18.59.69.49A10.003 10.003 0 0022 12c0-5.52-4.48-10-10-10z"
                      />
                    </svg>
                    GitHub Repository
                  </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  className="w-full transition-transform duration-300 hover:scale-105"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                  alt="Collaboration illustration"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#203f8e]/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};