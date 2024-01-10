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
   router.push('/');
  }
  return (
    <>
      <div className="  text-2xl p-4  justify-center ">
        <nav variant={'outline'} className={'text-2xl bg-slate-300 rounded-lg text-center m-2 p-2'}>Import Products</nav>
      </div>

      <ResizablePanelGroup direction="vertical" className=''>
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
        <ResizablePanel className="row lower-row p-4 ">
          <div className="col flex ml-96 items-center">
            <LowerComponent />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <div className="  text-white  text-2xl p-4 flex justify-end gap-2">
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
