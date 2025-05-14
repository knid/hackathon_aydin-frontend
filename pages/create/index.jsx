
import DefaultLayout from "@/layouts/default";
import {Avatar} from "@heroui/avatar";
import { useState } from "react";

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [projectId, setProjectId] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3993/api/v1/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token: U557mQFZV8ECCulOcoKbZ5AANuN9LbS30VvOrWy4ITnXvGvdzx5kRAtAN67PyM8R'
          },
          body: JSON.stringify({
            title,
            description,
          }),
        })
          .then((response) => response.json())
          .then((data) => window.location.href = "/taskGeneration/" + data.ID);
          // .then((data) => setProjectId(data.id));
  };

  return (
        <DefaultLayout>
    <form className='h-screen flex flex-col justify-center items-center' onSubmit={handleSubmit}>
    <Avatar size="lg" className="w-20 h-20 text-large mb-12" color="primary" src="/timezen.jpeg" />

      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Create Project</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Timezen AI will process given data and generate sub-tasks for you.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                Project Name
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="An Awesome Project"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border rounded-md"
                    onChange={(e) => {setTitle(e.target.value)}}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                Project Description
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border"
                  defaultValue={''}
                  onChange={(e) => {setDescription(e.target.value)}}
                />
              </div>
            </div>

            </div>
        </div>
        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
         <button
          // href={"/taskGeneration/" + projectId} 
          type="submit"
          className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create
        </button>
      </div>
    </form>
        </DefaultLayout>
  )
}
