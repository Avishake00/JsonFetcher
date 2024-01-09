'use client'
import React, { useContext } from 'react';
import UpperLeftComponent from '@/components/auth/upperleft';
import UpperRightComponent from '@/components/auth/upperright';
import LowerComponent from '@/components/auth/lowerpart';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


const Home = () => {
  const router= useRouter();
  const handleUpperLeftFileChange = (file) => {
    console.log('Selected file in upper-left component:', file);
  };

  const handleNext=()=>{
    router.push('/auth/table')
  }

  const handleCancel=()=>{
   
  }
  return (
    <>
      <div className=" bg-gradient-to-r from-sky-400 to-blue-800 text-white text-2xl p-4">
        <Badge variant={'outline'} className={'text-2xl text-white bg-[#0f172a]'}>Import Products</Badge>
      </div>

      <ResizablePanelGroup direction="vertical" className='bg-gradient-to-r from-sky-400 to-blue-800'>
        <ResizablePanel className="upper-row p-4 flex">
          <ResizablePanelGroup direction='horizontal'>
            <ResizablePanel>
              <UpperLeftComponent onFileChange={handleUpperLeftFileChange} />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <UpperRightComponent />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="row lower-row p-4">
          <div className="col">
            <LowerComponent />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <div className=" bg-gradient-to-r from-sky-400 to-blue-800 text-white text-2xl p-4 flex justify-end gap-2">
        <Button className="bg-green-600 hover:bg-green-700" onClick={handleNext}>Next</Button>
        <Button className="bg-red-500 hover:bg-red-600" onClick={handleCancel}>Cancel</Button>
      </div>

      <style jsx>{`
        .row {
          display: flex;
          width: 100%;
          height: 50vh;
          margin-bottom: 10px;
        }

        .col {
          flex: 1;
          padding: 20px;
        }

        .header {
          border-bottom: 1px solid #ccc;
        }

        .upper-row {
          flex-direction: row;
        }

        /* Additional styling for the buttons */
        .footer {
          border-top: 1px solid #ccc;
        }

        /* Adjust button styles */
        Button {
          padding: 10px 20px;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
        }

        /* Add hover effect */
        Button:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
};

export default Home;
