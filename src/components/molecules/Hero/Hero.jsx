import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const Hero = () => {
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
                  <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl font-['Poppins']">
                    Collaborate remotely, with
                    <div className="relative inline-block mt-4">
                      <span className="absolute inset-x-0 bottom-0 h-3 bg-[#032785]/20 w-full rounded-full" />
                      <span className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        Postcrafts.
                      </span>
                    </div>
                  </h1>

                  <p className="mt-8 text-base text-gray-600 sm:text-xl font-['Inter']">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
                  </p>

                  <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:items-center sm:space-x-8">
                  <Button
                    size="xl"
                    className="text-lg h-14 px-8 bg-[#203f8e] hover:bg-[#1a357a] transition-all"
                    >
                    Start exploring
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="xl"
                      className="text-lg h-14 px-8 gap-2 hover:bg-[#203f8e]/10"
                    >
                      <svg
                        className="w-7 h-7 text-[#203f8e]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Watch video
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