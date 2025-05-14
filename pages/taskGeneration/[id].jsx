import  OnBoarding  from "@/components/onboard";
import {Avatar} from "@heroui/avatar";
import {CircularProgress} from "@heroui/progress";
import {Button} from "@heroui/button";
import DefaultLayout from "@/layouts/default";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function TaskGeneration() {
    const [tasks, setTasks] = useState([])
    const [activeJob, setActiveJob] = useState(true)
    const router = useRouter()
    const [projectId, setProjectId] = useState('');

useEffect(() => {
    const id = router.query.id
    setProjectId(id)
    const interval = setInterval(() => {
        fetch('http://localhost:3993/api/v1/projects/' + id)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched project:", data);
                setActiveJob(data.active_job);

                // if (data.active_job) {
                    fetch('http://localhost:3993/api/v1/projects/' + id + '/tasks')
                        .then(response => response.json())
                        .then(taskData => {
                            console.log("Fetched tasks:", taskData);
                            setTasks(taskData);
                        });
                // }
            });
    }, 1500);

    return () => clearInterval(interval); // Cleanup on unmount
}, [router.isReady]);

  return (
    <DefaultLayout>
    <div className="h-screen w-screen mx-auto max-w-4xl px-6 flex justify-center "> 

    
            <div className="mr-16 flex flex-col justify-center items-center">
                <Avatar size="lg" className="w-20 h-20 text-large" color="primary" src="/timezen.jpeg" />
                <h4 className="text-md text-center font-bold mt-4">Timezen AI </h4>
                <p className="text-sm text-gray-600 text-nowrap mt-4 font-medium">Generating sub-tasks</p>
    { activeJob ? <CircularProgress className="mt-8" aria-label="Loading..." /> : <Button color="primary" className="mt-8" onPress={() => window.location.href = "/dashboard/" + projectId}>Start Now</Button>}
            </div>

    <div className="max-w-2xl mt-80">
     <OnBoarding tasks={tasks} activeJob={activeJob}/>
     </div>
    </div>
    </DefaultLayout>
  );

}
